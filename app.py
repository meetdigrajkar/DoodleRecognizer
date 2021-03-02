from flask import flash, render_template
from flask.app import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/test/")
def test():
    return render_template('test.html')

@app.route("/hi/<username>")
def greet(username):
    return f"hi, {username}"