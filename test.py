import numpy as np
import base64
import os

sample_data = ["bee", "bird", "cat", "cow", "crocodile", "dog", "elephant", "giraffee", "horse"]
max_range = 100

for name in sample_data:
    for x in range(max_range):
        if(x < 10):
            srclocation = "samples/" + name + "/" + "svg/" + name + "_000" + str(x) + ".svg"
            PNGlocation = "samples/" + name + "/" + "png/" + name + str(x) + ".png"
            os.system("svgexport " + srclocation + " " + PNGlocation)
        else:
            srclocation = "samples/" + name + "/" + "svg/" + name + "_00" + str(x) + ".svg"
            PNGlocation = "samples/" + name + "/" + "png/" + name + str(x) + ".png"
            os.system("svgexport " + srclocation + " " + PNGlocation)
