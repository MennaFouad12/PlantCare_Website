# from flask import Flask, request, jsonify
# import os
# from werkzeug.utils import secure_filename
# import cv2
# import numpy as np
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app, origins="http://localhost:5173")  # Allow requests from your React frontend

# UPLOAD_FOLDER = 'static/uploads'
# ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# # Define per-plant brightness requirements
# plant_light_requirements = {
#     "Apple": (170, 255),
#     "Cherry (including sour)": (160, 255),
#     "Corn (maize)": (180, 255),
#     "Grape": (170, 255),
#     "Peach": (170, 255),
#     "Pepper, bell": (160, 255),
#     "Potato": (150, 230),
#     "Strawberry": (140, 220),
#     "Tomato": (160, 255)
# }

# # Check for allowed file types
# def allowed_file(filename):
#     return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# # Calculate average brightness
# def calculate_brightness(image_path):
#     image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
#     if image is None:
#         return None
#     return np.mean(image)

# # Upload endpoint
# @app.route('/upload', methods=['POST'])
# def upload_file():
#     if 'file' not in request.files:
#         return jsonify({'message': 'No file part'}), 400

#     file = request.files['file']
#     plant_type = request.form.get('plant')

#     if file.filename == '':
#         return jsonify({'message': 'No selected file'}), 400

#     if file and allowed_file(file.filename):
#         filename = secure_filename(file.filename)
#         file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#         file.save(file_path)

#         brightness = calculate_brightness(file_path)

#         if brightness is None:
#             return jsonify({'message': 'Error processing image'}), 500

#         # Use plant-specific light thresholds
#         min_brightness, max_brightness = plant_light_requirements.get(plant_type, (160, 255))

#         if brightness >= min_brightness:
#             message = f"Lighting is perfect for {plant_type}!"
#             css_class = "good"
#         elif brightness >= min_brightness - 20:
#             message = f"Lighting is slightly low for {plant_type}, but still acceptable."
#             css_class = "acceptable"
#         else:
#             message = f"Lighting is too low for {plant_type}. Consider increasing light."
#             css_class = "not-suitable"

#     return jsonify({
#     'uploaded_image': filename,
#     'brightness': round(brightness, 2),
#     'message': message,
#     'css_class': css_class,
#     'min_brightness': min_brightness,
#     'max_brightness': max_brightness
# })


#     return jsonify({'message': 'Invalid file type'}), 400

# # Start server
# if __name__ == '__main__':
#     if not os.path.exists(UPLOAD_FOLDER):
#         os.makedirs(UPLOAD_FOLDER)
#     app.run(debug=True)


from flask import Flask, request, jsonify
import os
from werkzeug.utils import secure_filename
import cv2
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:5173")  # Allow requests from your React frontend

UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Define per-plant brightness requirements (including Strawberry with correct value)
plant_light_requirements = {
    "Apple": (100, 255),
    "Cherry (including sour)": (160, 255),
    "Corn (maize)": (180, 255),
    "Grape": (170, 255),
    "Peach": (170, 255),
    "Pepper, bell": (160, 255),
    "Potato": (150, 230),
    "Strawberry": (140, 220),  # Re-added with correct min_brightness of 140
    "Tomato": (160, 255)
}

# Check for allowed file types
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Calculate average brightness
def calculate_brightness(image_path):
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    if image is None:
        return None
    return np.mean(image)

# Upload endpoint
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'}), 400

    file = request.files['file']
    plant_type = request.form.get('plant')

    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        brightness = calculate_brightness(file_path)

        if brightness is None:
            return jsonify({'message': 'Error processing image'}), 500

        # Use plant-specific light thresholds, default to (160, 255)
        min_brightness, max_brightness = plant_light_requirements.get(plant_type, (160, 255))

        if brightness >= min_brightness:
            message = f"Lighting is perfect for {plant_type}!"
            css_class = "good"
        elif brightness >= min_brightness - 20:
            message = f"Lighting is slightly low for {plant_type}, but still acceptable."
            css_class = "acceptable"
        else:
            message = f"Lighting is too low for {plant_type}. Consider increasing light."
            css_class = "not-suitable"

        return jsonify({
            'uploaded_image': filename,
            'brightness': round(brightness, 2),
            'message': message,
            'css_class': css_class,
            'min_brightness': min_brightness,
            'max_brightness': max_brightness
        })

    else:
        return jsonify({'message': 'Invalid file type'}), 400
    
# Start server
if __name__ == '__main__':
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    app.run(debug=True)