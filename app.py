from flask import render_template, request, session
from flask_cors import CORS, cross_origin
from flask.app import Flask
import random
from collections import Counter
from flask import jsonify, json
from recognize import *

app = Flask(__name__, static_folder='./frontend/build', static_url_path='/')

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Check Configuration section for more details
SESSION_TYPE = 'filesystem'
app.config.from_object(__name__)

# prepare headers for http request
content_type = 'image/jpeg'
headers = {'content-type': content_type}


@app.errorhandler(404)
def page_not_found(e):
    return app.send_static_file('index.html')

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route("/api/doodle/", methods=["POST"])
@cross_origin()
def doodle():
    response = request.get_json()

    img_uri = response['imgBase64']
    algorithm = response['algorithm']

    img = readb64(img_uri)
    crop = cropImg(img)

    if(algorithm == "1"):
        similarity_vals = []
        split_imgs = splitImg(crop, gridSize)
        tile_types, occurences = calculateMatches(split_imgs)
        occ_list = Counter(occurences)

        for i in sorted(occ_list.keys()):
            similarity_vals.append(occ_list.get(i))

        # clear data folders
        clearFolder("./save")
        clearFolder("./doodles")

        res = str(similarity_vals)
        print('OpenCV Response: ' + res)
        return json.dumps(res)

    else:
        res = str(Conv_Recognize(crop))
        print('Neural Network Response: ' + res)
        return json.dumps(res)


if __name__ == 'main':
    app.run(host='0.0.0.0')
