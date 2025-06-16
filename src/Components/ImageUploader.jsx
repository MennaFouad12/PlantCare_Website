import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle image selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    } else {
      setError('Please select a valid image (JPEG or PNG).');
      setImagePreview(null);
    }
  };

  // Clean up the object URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // Send the image to the API
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setError('Please select an image first.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:8000/predict/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError('Error uploading the image or connecting to the API. Ensure the server is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Render the result based on the response type
  const renderResult = () => {
    if (!result) return null;

    const { result: prediction, confidence } = result;

    if (typeof prediction === 'string') {
      // For cases like 'Normal_Flower', 'Other', 'toxic', 'non_toxic'
      return (
        <div className="mt-5 p-4 bg-gray-100 rounded-lg animate-fadeIn">
          <h4 className="font-bold text-lg text-gray-800">Result:</h4>
          <p><strong>Type:</strong> {prediction === 'Normal_Flower' ? 'Normal Flower' : 
                                    prediction === 'Other' ? 'Other' : 
                                    prediction === 'toxic' ? 'Toxic Plant' : 
                                    prediction === 'non_toxic' ? 'Non-Toxic Plant' : prediction}</p>
          <p><strong>Confidence:</strong> {confidence.toFixed(2)}%</p>
        </div>
      );
    } else if (typeof prediction === 'object') {
      // For cases like {'plantName': 'Corn_(maize)', 'sick': 'not sick', 'Toxic': 'NON Toxic'}
      return (
        <div className="mt-5 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-lg animate-slideIn">
          <h4 className="font-bold text-2xl text-green-800 mb-4">Result:</h4>
          <div className="space-y-3">
            <p className="flex items-center text-lg">
              <span className="font-semibold text-gray-700 w-24">Plant:</span>
              <span className="text-green-600">{prediction.plantName.replace('_(maize)', '')}</span>
            </p>
            <p className="flex items-center text-lg">
              <span className="font-semibold text-gray-700 w-24">Condition:</span>
              <span className={prediction.sick === 'not sick' ? 'text-green-500' : 'text-red-500'}>
                {prediction.sick === 'not sick' ? 'Healthy' : prediction.sick}
              </span>
            </p>
            <p className="flex items-center text-lg">
              <span className="font-semibold text-gray-700 w-24">Toxicity:</span>
              <span className={prediction.Toxic === 'NON Toxic' ? 'text-green-500' : 'text-red-500'}>
                {prediction.Toxic === 'NON Toxic' ? 'Non-Toxic' : 'Toxic'}
              </span>
            </p>
            <p className="flex items-center text-lg">
              <span className="font-semibold text-gray-700 w-24">Accuracy:</span>
              <span className="text-blue-600">{confidence.toFixed(2)}%</span>
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 p-2 border rounded"
      />
      {imagePreview && (
        <div className="mb-4">
          <img
            src={imagePreview}
            alt="Selected preview"
            className="max-w-xs w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 disabled:bg-gray-400"
      >
        {loading ? 'Uploading...' : 'Detect Image'}
      </button>
      {error && <p className="text-red-500 mt-3">{error}</p>}
      {renderResult()}
    </div>
  );
};

export default ImageUploader;