from flask import flash
from flask.app import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "welcome"

@app.route("/hi/")
def who():
    return "who"

@app.route("/hi/<username>")
def greet(username):
    return f"hi, {username}"
