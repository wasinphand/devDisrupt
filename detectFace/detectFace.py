import cv2
from flask import Flask
from PIL import Image
import base64
import io
import numpy as np
import torch
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "localhost:3000/*"}})


def detect(img):
    face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
    # Read the input image

    # Convert into grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # Detect faces
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)

    if(len(faces) == 1):
        return True
    return False


@app.route('/', methods=['POST'])
def hello_world():
    img_data = request.get_json()['image64']
    print('hello')
    base64_decoded = base64.b64decode(img_data)

    image = Image.open(io.BytesIO(base64_decoded))
    image_np = np.array(image)
    img = torch.tensor(np.array(image))
    return detect(img)


app.run()
