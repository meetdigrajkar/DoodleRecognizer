# COMP 4102 FINAL PROJECT
## DOODLE RECOGNIZER

### GROUP MEMBERS:

-	Shoaib Khan 101033582
-	Meet Digrajkar 101041284 
-	Tamer Ibrahim 101032919

### 1.0 SUMMARY:
The doodle recognizer project uses neural networks and a massive dataset of over 50 million doodle image data contributed by over 15 million players to recognize the doodle drawn by the user. It prompts the user to draw a doodle from a category, such as "car", "banana", "apple", "door", etc. It uses the users' drawn doodle and performs pattern recognition to identify the closest doodle that fits in the same category. The vision problem that is being targeted in this project is pattern recognition.

### 2.0 BACKGROUND:
The inspiration for this project comes directly from Google’s “Quick, Draw!” application. It is a web application where the users are prompt to draw doodles for six randomly chosen categories. The application analysis each doodle drawn by the user and uses neural networks to closely identify the doodle’s category. The neural networks are trained using a dataset of 50 million drawings collected by over 15 million players. The quickdraw dataset is publicly available to develop custom image recognition algorithm or to simply analyse the data. 

For our project, we decided to use pattern recognition and the massive collection of Google’s quickdraw dataset to closely identify the users’ drawn doodle to a doodle under the same category. The project will further generate metrics to how closely the two doodles relate with each other. Along with the metrics, it will also identify if the users’ doodle matches the category. 

For example, a user will be asked to draw a doodle of an apple. It will extract the data and compare it to the collection of horse doodles in the dataset. The figure 1 below is a visual representation of the horse doodles in the dataset. It will pick the horse doodle that closely relates to the user’s doodle version. The application will process, analyse the doodle, and declare if the doodle matches the description of a horse based on the dataset. 

![Test](https://github.com/meetdigrajkar/COMP_4102_PROJECT/blob/master/Images/horseDoodles.png)

#### Figure 1: Visual Representation of Horse Doodles 
### 3.0 THE CHALLENGE:
The proposed problem in this project is challenging due to the concept of comparing various image data with the input image. OpenCV contains a specific function regarding this task, the 2D Discrete Fourier Transform (DFT). The Fourier Transform can be used in both the x and y direction to convert the images into a Frequency representation of the image.  A fast algorithm for the Fourier Transform is also available called Fast Fourier Transform (FFT). 

The problem of comparing the user drawn image to the images from the large sample cannot be done simply by using OpenCV’s Fourier transform function. After performing the FFT computation, we must use comparison methods such as Correlation or Intersection of Images. The size of the compared images must be the same (truncated if needed) and be in the same colour scale, such as greyscale.

#### 3.1 Example Visual Depiction:
As shown in Figure 2 and Figure 3, we are attempting to implement an image recognition web application which allows a user to draw a doodle which then compares it to a database of sample images to identify the drawn image and identifies the closest sample image to the drawn image via FFT from OpenCV and comparison methods such as Correlation. Our goal is to grasp an understanding of Fourier Transforms, comparison methods and their applications in Image comparison.

##### 3.1.1 User is Informed of Image to doodle

![Test2](https://github.com/meetdigrajkar/COMP_4102_PROJECT/blob/master/Images/pizzaInform.png)

The Figure 2 attached below is a visual depiction of the doodle recognizer application prompting the user to draw a doodle of a pizza. 

##### 3.1.2 User drawn doodle.

![Test3](https://github.com/meetdigrajkar/COMP_4102_PROJECT/blob/master/Images/pizzaDoodle.png)

The Figure 3 attached below is a visual depiction of the user’s doodle of a pizza.

### 4.0 GOALS AND DELIVERABLES:

### 5.1 SCHEDULE:
