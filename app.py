from flask import flash, render_template, request, Response, session
from flask.app import Flask
import jsonpickle
import cv2
import numpy as np
import base64
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPDF, renderPM
import random
from flask_session import Session
import imutils
import glob
from skimage.metrics import structural_similarity
from skimage.transform import resize
import os, shutil
import operator

app = Flask(__name__,static_url_path='/static')
# Check Configuration section for more details
SESSION_TYPE = 'filesystem'
app.config.from_object(__name__)
Session(app)

addr = 'http://localhost:5000'
doodle_url = addr + '/api/doodle'

# prepare headers for http request
content_type = 'image/jpeg'
headers = {'content-type': content_type}

doodle_types = ["Apple", "Carrot", "Ice-cream", "Key", "Pants", "Tower"]

max_range = 9

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/about/")
def about():
    return render_template('about.html')

@app.route("/draw/", methods = ["GET"])
def draw():
    doodle_type = random.choice(doodle_types)
    session["doodle_type"] = doodle_type

    #clear data folders
    clearFolder("./save")
    clearFolder("./doodles")

    return render_template('play.html', doodle_type = doodle_type)

@app.route("/api/doodle/", methods = ["POST"])
def doodle():
    r = request
    img_uri = r.form["imgBase64"]

    print("doodle type is {}".format(session["doodle_type"]))
    print(session["doodle_type"])

    img = readb64(img_uri)

    #calculate matches based on doodle type
    crop = cropImg(img)
    split_imgs = splitImg(crop,3)
    calculateMatches(split_imgs)

    # build a response dict to send back to client
    response = {'message': 'image received. size={}x{}'.format(img.shape[1], img.shape[0])
                }
    # encode response using jsonpickle
    response_pickled = jsonpickle.encode(response)

    return Response(response=response_pickled, status=200, mimetype="application/json")

def structural_sim(img1, img2):
    sim, diff = structural_similarity(img1, img2, full = True)
    return sim

def readb64(uri):
    encoded_data = uri.split(',')[1]
    nparr = np.fromstring(base64.b64decode(encoded_data), np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
    return img

def writeSample(srclocation, savePNGlocation, saveFFTlocation):
    #read in apple svg
    sample_svg = svg2rlg(srclocation)
    renderPM.drawToFile(sample_svg, savePNGlocation, fmt="PNG", bg = 0xffffff)

    #process apple png
    sample_png = cv2.imread(savePNGlocation)
    sample_fft = process(sample_png)
    cv2.imwrite(saveFFTlocation, sample_fft)
    return sample_fft

def writeDoodle(img):
    cv2.imwrite("doodles/doodle.png", img)

def calculateMatches(split_imgs):
    #get all the samples in all the classes in a hash map ("apple", apple1)...
    #template match each tile of the image to each class
    #get the average correlation value for each class for that cell
    #save the highest correlation value out of all the classes and determine the class for that cell
    img_dict = getImages()
    icecreamSumCorr, appleSumCorr, carrotSumCorr, keySumCorr, towerSumCorr, pantsSumCorr = 0,0,0,0,0,0

    avg_corr_dict = dict()
    tile_type_dict = dict()
    tileCount = 1

    for tile in split_imgs:
        avg_corr_dict.clear()
        for type in img_dict:
            res = cv2.matchTemplate(tile,img_dict.get(type),cv2.TM_CCOEFF_NORMED)
            min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)

            if(type == "icecream"):
                icecreamSumCorr += max_val
            elif(type == "apple"):
                appleSumCorr += max_val
            elif(type == "carrot"):
                carrotSumCorr += max_val
            elif(type == "key"):
                keySumCorr += max_val
            elif(type == "pants"):
                pantsSumCorr += max_val
            elif(type == "tower"):
                towerSumCorr += max_val

        #calculate average correlation
        avg_corr_dict.update({"icecream" : icecreamSumCorr/max_range})
        avg_corr_dict.update({"apple" : appleSumCorr/max_range})
        avg_corr_dict.update({"carrot" : carrotSumCorr/max_range})
        avg_corr_dict.update({"key" : keySumCorr/max_range})
        avg_corr_dict.update({"pants" : pantsSumCorr/max_range})
        avg_corr_dict.update({"tower" : towerSumCorr/max_range})

        #caluclate the max avg corrlation among classes
        max_key = max(avg_corr_dict.items(), key=operator.itemgetter(1))[0]
        tile_type_dict.update({tileCount : max_key})
        tileCount = tileCount + 1

    print(tile_type_dict)
    return tile_type_dict

def cropImg(img):
    original = img.copy()
    blur = cv2.GaussianBlur(original, (25,25), 0)
    thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

    # Perform morph operations, first open to remove noise, then close to combine
    noise_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
    opening = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, noise_kernel, iterations=2)
    close_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (7,7))
    close = cv2.morphologyEx(opening, cv2.MORPH_CLOSE, close_kernel, iterations=3)

    # Find enclosing boundingbox and crop ROI
    coords = cv2.findNonZero(close)
    x,y,w,h = cv2.boundingRect(coords)
    cv2.rectangle(original, (x, y), (x + w, y + h), (36,255,12), 2)
    crop = original[y:y+h, x:x+w]

    cv2.imwrite("./doodles/cropped.png", crop)
    return crop

def splitImg(img, gridSize):
    #split image to return
    split_imgs = []

    # Dimensions of the image
    sizeX = img.shape[1]
    sizeY = img.shape[0]

    nRows = gridSize
    mCols = gridSize

    M = sizeY//gridSize
    N = sizeX//gridSize

    for i in range(0,nRows):
        for j in range(0, mCols):
            roi = img[i*int(sizeY/nRows):i*int(sizeY/nRows) + int(sizeY/nRows) ,j*int(sizeX/mCols):j*int(sizeX/mCols) + int(sizeX/mCols)]
            split_imgs.append(roi)
            cv2.imwrite('save/patch_'+str(i)+ "_" +str(j)+".jpg", roi)

    grid_img = img.copy()
    createGrid(grid_img,gridSize)
    return split_imgs

def createGrid(im,gridSize):
    imgheight=im.shape[0]
    imgwidth=im.shape[1]

    y1 = 0
    M = imgheight//gridSize
    N = imgwidth//gridSize

    for y in range(0,imgheight,M):
        for x in range(0, imgwidth, N):
            y1 = y + M
            x1 = x + N
            tiles = im[y:y+M,x:x+N]

            cv2.rectangle(im, (x, y), (x1, y1), (0, 255, 0))
    cv2.imwrite("./doodles/grid_img.png",im)

def clearFolder(folder):
    for filename in os.listdir(folder):
        file_path = os.path.join(folder, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print('Failed to delete %s. Reason: %s' % (file_path, e))

def getImages():
    #loop through all the class and save the key value pair into the dictionary
    imgs = dict()

    for i in range(max_range):
        tempImg = cv2.imread("samples/icecream/png/icecream_000" + str(i) + ".png",0)
        imgs.update({"icecream": tempImg})

    for i in range(max_range):
        tempImg = cv2.imread("samples/apple/png/apple_000" + str(i) + ".png",0)
        imgs.update({"apple": tempImg})

    for i in range(max_range):
        tempImg = cv2.imread("samples/carrot/png/carrot_000" + str(i) + ".png",0)
        imgs.update({"carrot": tempImg})

    for i in range(max_range):
        tempImg =cv2.imread("samples/key/png/key_000" + str(i) + ".png",0)
        imgs.update({"key": tempImg})

    for i in range(max_range):
        tempImg = cv2.imread("samples/pants/png/pants_000" + str(i) + ".png",0)
        imgs.update({"pants": tempImg})

    for i in range(max_range):
        tempImg = cv2.imread("samples/tower/png/tower_000" + str(i) + ".png",0)
        imgs.update({"tower": tempImg})

    return imgs
