import tensorflow as tf
import numpy as np
from PIL import Image

interpreter = tf.lite.Interpreter(model_path="model/mobnet_model_quantized.tflite")
interpreter.allocate_tensors()

input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

def predict_tflite(img_path):
    img = Image.open(img_path).resize((224, 224))
    input_data = np.expand_dims(np.array(img, dtype=np.float32) / 255.0, axis=0)

    interpreter.set_tensor(input_details[0]['index'], input_data)
    interpreter.invoke()
    output_data = interpreter.get_tensor(output_details[0]['index'])[0]

    class_labels = ['cardboard', 'glass', 'metal', 'paper', 'plastic', 'trash']
    predicted = class_labels[np.argmax(output_data)]
    confidence = np.max(output_data)

    print(f"Predicted: {predicted} ({confidence*100:.2f}%)")


predict_tflite('./dataset/dataset-augmented/dataset-augmented/test/metal/metal408.jpg')