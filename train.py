from prepare_data import *
from sklearn.model_selection import train_test_split as tts
from keras.models import Sequential
from keras.layers import Dense, Dropout
from keras.utils import np_utils
from nets.MLP import mlp
from nets.conv import conv
from random import randint

# define some constants
N_ANIMALS = 10
ANIMALS = {0: "bear", 1: "bee", 2: "bird", 3: "cat.npy", 4: "cow",5: "crocodile",6: "dog",7: "elephant",8: "giraffee",9: "horse"}

# number of samples to take in each class
N = 10000

# some other constants
N_EPOCHS = 40

# data files in the same order as defined in FRUITS
files = ["bear.npy", "bee.npy","bird.npy", "cat.npy", "cow.npy","crocodile.npy","dog.npy","elephant.npy","giraffee.npy","horse.npy"]

# images need to be 28x28 for training with a ConvNet
animals_load_data = load("data/", files, reshaped=True)

# limit no of samples in each class to N
animals_limit = set_limit(animals_load_data, N)

animals_map = normalize(animals_limit)

# define the labels
labels_f = make_labels(N_ANIMALS, N)

# prepare the data
x_train, x_test, y_train, y_test = tts(animals_map, labels_f, test_size=0.05)

# one hot encoding
Y_train = np_utils.to_categorical(y_train, N_ANIMALS)
Y_test = np_utils.to_categorical(y_test, N_ANIMALS)

# use our custom designed ConvNet model
model = conv(classes=N_ANIMALS, input_shape=(28, 28, 1))

model.compile(loss='categorical_crossentropy',
              optimizer='adam',
              metrics=['accuracy'])

model.fit(np.array(x_train), np.array(Y_train), batch_size=32, epochs=N_EPOCHS, verbose=1)

#print "Evaluating model"
preds = model.predict(np.array(x_test))

score = 0
for i in range(len(preds)):
    if np.argmax(preds[i]) == y_test[i]:
        score += 1

print ("Accuracy: ", ((score + 0.0) / len(preds)) * 100)

name = input(">Enter name to save trained model: ")
model.save(name + ".h5")
print ("Model saved")

def visualize_and_predict():
    #"selects a random test case and shows the object, the prediction and the expected result"
    n = randint(0, len(x_test))
    visualize(denormalize(np.reshape(x_test[n], (28, 28))))
    pred = ANIMALS[np.argmax(model.predict(np.array([x_test[n]])))]
    actual = ANIMALS[y_test[n]]
    print ("Actual:", actual)
    print ("Predicted:", pred)

#print "Testing mode"
visualize_and_predict()
