# DOODLE RECOGNIZER

### DEVELOPERS:

-	Shoaib Khan
-	Meet Digrajkar
-	Tamer Ibrahim

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

The Figure 2 attached below is a visual depiction of the doodle recognizer application prompting the user to draw a doodle of a pizza. 

![Test2](https://github.com/meetdigrajkar/COMP_4102_PROJECT/blob/master/Images/pizzaInform.png)


##### 3.1.2 User drawn doodle.

The Figure 3 attached below is a visual depiction of the user’s doodle of a pizza.

![Test3](https://github.com/meetdigrajkar/COMP_4102_PROJECT/blob/master/Images/pizzaDoodle.png)


### 4.0 GOALS AND DELIVERABLES:
4.1 Project Required Goals:
We plan to create a Web application that allows a User to draw a doodle based on the category informed to the User by the application. The Web application will consist of a Flask application and a sample of 20 categories, each consisting of 20 images per category. 

We will use OpenCV with python to implement the Fast Fourier Transform to convert the User’s drawn image to the frequency representation of the image. We will compare the User drawn image to the specific category from the 20 categories that the User was informed of.  It will identify the doodle drawn by the User only if the frequency representation of the image has a correlation factor higher than the threshold value with the compared images in the category. Also, in the identified category, the closest resembling image in the category to the User drawn image will be identified, via the highest correlation factor from the comparisons.
To prove that our goal is achieved, we will provide a video of various test cases, in which a User will draw doodles from various categories. The application as a result, will provide the identified category of the drawn doodle (if it exists) and its closest resembling image in the category.

4.1.1 An Example Use Case:
1.	User is informed to draw a doodle of a Pizza.
2.	Application converts doodle into a frequency representation of the image.
3.	Application searches through the Pizza Category and performs the Correlation Factor calculation for every sample Pizza Image in the category
4.	If the Correlation Factor is higher than threshold value, the doodle is identified as a Pizza.
5.	The Application also identifies the closest resembling Pizza image via the highest CF.
6.	If the CF is below the threshold value, the doodle is identified as Not Found.

4.2 Future Project Goals (Optional): 
Our future goals include expanding the number of categories, increasing the number of sample images per category, and adding the ability of identifying the specific doodle from every category if it does not match (have a correlation factor of higher than the threshold value) of the informed category. It should also identify the closest resembling image of the category that it was identified as.

4.2.1 An Example Future Use Case (Continuing from Completion of Current Goals):
1.	If the CF is below the threshold value, the other categories are searched until a CF of higher than the threshold value is found. The image closet resembling the doodle (highest CF) will be identified.
2.	If no image from any category consists of a higher than the threshold CF value, the image is Not Found.

Note: The threshold value is to be determined through experiments throughout the development of the project.

### 5.1 SCHEDULE:
![sch1](https://github.com/meetdigrajkar/Doodle-Recognizer/blob/master/Images/schedule_1.PNG)
##### 
![sch2](https://github.com/meetdigrajkar/Doodle-Recognizer/blob/master/Images/schedule_2.PNG)
