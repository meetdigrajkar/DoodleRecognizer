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

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/about/")
def about():
    return render_template('about.html')

@app.route("/play/", methods = ["GET"])
def play():
    doodle_type = random.choice(doodle_types)
    session["doodle_type"] = doodle_type
    return render_template('play.html', doodle_type = doodle_type)

@app.route("/api/doodle/", methods = ["POST"])
def doodle():
    r = request
    img_uri = r.form["imgBase64"]

    print("doodle type is {}".format(session["doodle_type"]))
    print(session["doodle_type"])

    img = readb64(img_uri)

    #calculate matches based on doodle type
    calculateMatches(img)

    #save doodle
    processed_doodle = writeDoodle(img)

    #check for similarties between the doodle and the sample

    # build a response dict to send back to client
    response = {'message': 'image received. size={}x{}'.format(processed_doodle.shape[1], processed_doodle.shape[0])
                }
    # encode response using jsonpickle
    response_pickled = jsonpickle.encode(response)

    return Response(response=response_pickled, status=200, mimetype="application/json")

def readb64(uri):
    encoded_data = uri.split(',')[1]
    nparr = np.fromstring(base64.b64decode(encoded_data), np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return img

def process(img):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    img_float32 = np.float32(gray)

    dft = cv2.dft(img_float32, flags = cv2.DFT_COMPLEX_OUTPUT)
    dft_shift = np.fft.fftshift(dft)
    magnitude_spectrum = 20*np.log(cv2.magnitude(dft_shift[:,:,0],dft_shift[:,:,1]))

    return magnitude_spectrum

def writeSample(srclocation, savePNGlocation, saveFFTlocation):
    #read in apple svg
    sample_svg = svg2rlg(srclocation)
    renderPM.drawToFile(sample_svg, savePNGlocation, fmt="PNG")

    #process apple png
    sample_png = cv2.imread(savePNGlocation)
    sample_fft = process(sample_png)
    cv2.imwrite(saveFFTlocation, sample_fft)
    return sample_fft

def writeDoodle(img):
    cv2.imwrite("doodles/doodle.png", img)

    #process the image
    processed_img = process(img)
    cv2.imwrite("doodles/processed_doodle.png", processed_img)
    return processed_img

def calculateMatches(img):
    if(session["doodle_type"] == "Ice-cream"):
        img_to_compare = cv2.imread("samples/icecream/png/icecream0.png",0)
    elif(session["doodle_type"] == "Apple"):
        img_to_compare = cv2.imread("samples/apple/png/apple0.png",0)
    elif(session["doodle_type"] == "Carrot"):
        img_to_compare = cv2.imread("samples/carrot/png/carrot0.png",0)
    elif(session["doodle_type"] == "Key"):
        img_to_compare = cv2.imread("samples/key/png/key0.png",0)
    elif(session["doodle_type"] == "Pants"):
        img_to_compare = cv2.imread("samples/pants/png/pants0.png",0)
    elif(session["doodle_type"] == "Tower"):
        img_to_compare = cv2.imread("samples/tower/png/tower0.png",0)

    GOOD_MATCH_PERCENT = 0.15

    detector = cv2.AKAZE_create()

    # find the keypoints and descriptors with SIFT
    kp1, des1 = detector.detectAndCompute(img, None)
    kp2, des2 = detector.detectAndCompute(img_to_compare, None)

    # create BFMatcher object
    bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)

    # Match descriptors.
    matches = bf.match(des1,des2)

    # Sort them in the order of their distance.
    matches = sorted(matches, key = lambda x:x.distance)
    #print(matches)

    #remove not good Matches
    numGoodMatches = int(len(matches) * GOOD_MATCH_PERCENT)
    matches = matches[:numGoodMatches]

    print(numGoodMatches)
    #matches between image 1 and image 2
    img_1__2_matches = cv2.drawMatches(img,kp1,img_to_compare,kp2,matches,None)

    cv2.imwrite("result.png", img_1__2_matches)
