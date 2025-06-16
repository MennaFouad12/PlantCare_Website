import React, { useState, useRef, useEffect } from 'react';
import ModelPhoto from './ModelPhoto';

const CameraCapture = () => {
  const [image, setImage] = useState(null); // Store the image preview
  const [isCameraActive, setIsCameraActive] = useState(false); // Manage camera state (active or not)
  const videoRef = useRef(null); // Reference to the <video> element
  const canvasRef = useRef(null); // Reference to the <canvas> element
  const streamRef = useRef(null); // Reference to the media stream

  // Start the camera when the button is clicked
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
      console.log(videoRef.current)
        videoRef.current.srcObject = stream;
      }
      setIsCameraActive(true); // Set camera as active
    } catch (error) {
      console.error("Error accessing the camera: ", error);
    }
  };

  // Stop the camera stream
  const stopCamera = () => {
    const stream = streamRef.current;
    if (stream) {
      const tracks = stream.getTracks();// return array of all medie  i have enabled it
      console.log(tracks)
      tracks[0].stop();
      // tracks.forEach((track) => track.stop()); // Stop each track in the stream
    }
    setIsCameraActive(false); // Set camera as inactive
  };

  // Capture the image from the video stream
  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const video = videoRef.current;

    // Set the canvas size to match the video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current frame from the video to the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas to a data URL (base64 image)
    const imageUrl = canvas.toDataURL("image/png");

    // Set the image state to show the preview
    setImage(imageUrl);
    stopCamera();
  };

  // Button to toggle camera on and off
  const toggleCamera = () => {
    if (isCameraActive) {
      stopCamera();
    } else {
      startCamera();
    }
  };

  // Cleanup: Stop the camera when the component is unmounted
  useEffect(() => {
    return () => {
      if (isCameraActive) stopCamera();
    };
  }, [isCameraActive]);

  return (
    <div className=''>
     

      {/* Button to start/stop camera */}
      <button className='  bg-green-800 md:me-10 text-white focus:ring-4 focus:outline-none  font-medium  text-sm px-3 py-3 text-center ' onClick={toggleCamera}>
        {isCameraActive ? 'Stop Camera' : 'Start Camera'}
      </button>

      
        <video
          ref={videoRef}
          autoPlay
          muted
          style={{
            width: "50%",
            borderRadius: "8px",
            marginBottom: "10px",
            display: isCameraActive ? "block" : "none", // Ensure video hides when camera is off
          }}
        ></video>
      

      {/* Button to capture the image */}
      {isCameraActive && <button onClick={captureImage}>Capture Photo</button>}

      {/* Canvas element to temporarily hold the image data */}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

      {/* Display the captured image */}
      {/* {image && (
        <div style={{ marginTop: "20px" }}>
          <h3>Captured Image:</h3>
          <img
            src={image}
            alt="Captured"
            style={{ width: "300px", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )} */}
      <ModelPhoto img={image} uploader={true}></ModelPhoto>
    </div>
  );
};

export default CameraCapture;




