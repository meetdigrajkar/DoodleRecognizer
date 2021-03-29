from flask import render_template, request, session
from flask_cors import CORS, cross_origin
from flask.app import Flask
import random
from collections import Counter
from flask import jsonify, json
from recognize import *


app = Flask(__name__, static_url_path='/static')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Check Configuration section for more details
SESSION_TYPE = 'filesystem'
app.config.from_object(__name__)

addr = 'http://localhost:3000'
doodle_url = addr + '/api/doodle'

# prepare headers for http request
content_type = 'image/jpeg'
headers = {'content-type': content_type}


@app.route("/")
def home():
    return render_template('home.html')


@app.route("/about/")
def about():
    return render_template('about.html')


@app.route("/draw/", methods=["GET"])
def draw():
    doodle_type = random.choice(doodle_types)
    session["doodle_type"] = doodle_type

    # clear data folders
    clearFolder("./save")
    clearFolder("./doodles")

    return render_template('play.html', doodle_type=doodle_type)


@app.route("/api/doodle/", methods=["POST"])
@cross_origin()
def doodle():
    # clear data folders
    clearFolder("./save")
    clearFolder("./doodles")

    similarity_vals = []
    response = request.get_json()

    img_uri = response['imgBase64']
    algorithm = response['algorithm']
    print(algorithm)

    img = readb64(img_uri)
    crop = cropImg(img)

    if(algorithm == 1):
        split_imgs = splitImg(crop, gridSize)
        tile_types, occurences = calculateMatches(split_imgs)
        occ_list = Counter(occurences)
        #print(dict(occ_list))

        for i in sorted (occ_list.keys()) :
            #print(i + " : " + str(occ_list.get(i)))
            similarity_vals.append(occ_list.get(i))
    else:
        similarity_vals = Conv_Recognize(crop)

    print(similarity_vals)
    return json.dumps(str(similarity_vals))
