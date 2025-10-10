# from flask import Flask, request, jsonify
# import tensorflow as tf
# import numpy as np
# from PIL import Image
# import io

# app = Flask(__name__)


from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for all routes


# Load your TFLite model
# interpreter = tf.lite.Interpreter(model_path="model/mobnet_model_quantized.tflite")
interpreter = tf.lite.Interpreter(model_path="../TrashNet-Classification/model/mobnet_model_quantized.tflite")
interpreter.allocate_tensors()
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

class_labels = ['cardboard', 'glass', 'metal', 'paper', 'plastic', 'trash']

def predict_tflite(image_bytes):
    img = Image.open(io.BytesIO(image_bytes)).resize((224, 224))
    input_data = np.expand_dims(np.array(img, dtype=np.float32) / 255.0, axis=0)
    interpreter.set_tensor(input_details[0]['index'], input_data)
    interpreter.invoke()
    output_data = interpreter.get_tensor(output_details[0]['index'])[0]
    predicted = class_labels[np.argmax(output_data)]
    confidence = float(np.max(output_data))
    return predicted, confidence

# @app.route('/predict', methods=['POST'])
# def predict():
#     if 'file' not in request.files:
#         return jsonify({'error': 'No file uploaded'}), 400
#     file = request.files['file']
#     predicted, confidence = predict_tflite(file.read())
#     return jsonify({
#         'predicted': predicted,
#         'confidence': confidence
#     })




@app.route('/predict', methods=['POST'])
def predict():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400
        file = request.files['file']
        predicted, confidence = predict_tflite(file.read())
        return jsonify({
            'predicted': predicted,
            'confidence': confidence
        })
    except Exception as e:
        print("🔥 Error:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
