from flask import flash, render_template
from flask.app import Flask

app = Flask(__name__,static_url_path='/static')

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/about/")
def about():
    return render_template('about.html')

@app.route("/play/")
def play():
    return render_template('play.html')
