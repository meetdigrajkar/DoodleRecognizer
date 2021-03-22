from flask import flash, render_template, request, Response
from flask.app import Flask
import jsonpickle
import cv2
import numpy as np
import base64
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPDF, renderPM
from app import writeSample

sample_data = ["apple", "carrot", "icecream", "key", "pants", "tower"]
max_range = 20

for name in sample_data:
    for x in range(max_range):
        if(x < 10):
            srclocation = "samples/" + name + "/" + "svg/" + name + "_000" + str(x) + ".svg"
            PNGlocation = "samples/" + name + "/" + "png/" + name + str(x) + ".png"
            FFTlocation = "samples/" + name + "/" + "fft/" + name + str(x) + ".png"
            writeSample(srclocation, PNGlocation, FFTlocation)
        else:
            srclocation = "samples/" + name + "/" + "svg/" + name + "_00" + str(x) + ".svg"
            PNGlocation = "samples/" + name + "/" + "png/" + name + str(x) + ".png"
            FFTlocation = "samples/" + name + "/" + "fft/" + name + str(x) + ".png"
            writeSample(srclocation, PNGlocation, FFTlocation)
