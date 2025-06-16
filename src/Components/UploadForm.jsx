// import React, { useState } from "react";
// import axios from "axios";

// const UploadForm = () => {
//     const [file, setFile] = useState(null);
//     const [plant, setPlant] = useState("Cactus");
//     const [response, setResponse] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handlePlantChange = (event) => {
//         setPlant(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!file) {
//             alert("Please select a file.");
//             return;
//         }

//         setLoading(true);
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("plant", plant);

//         try {
//             const res = await axios.post("http://127.0.0.1:5000/upload", formData, {
//                 headers: { "Content-Type": "multipart/form-data" }
//             });
//             setResponse(res.data);
//         } catch (error) {
//             console.error("Upload error:", error);
//             setResponse({ message: "Error uploading file." });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div style={{ textAlign: "center", padding: "20px" }}>
//             <h1>Test Room Light for Plants</h1>
//             <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "auto" }}>
//                 <label>
//                     Choose a plant type:
//                     <select value={plant} onChange={handlePlantChange}>
//                         <option value="Cactus">Cactus</option>
//                         <option value="Bamboo">Bamboo</option>
//                         <option value="Peace Lily">Peace Lily</option>
//                         <option value="Fern">Fern</option>
//                     </select>
//                 </label>
//                 <input type="file" accept="image/*" onChange={handleFileChange} required />
//                 <button type="submit" disabled={loading}>{loading ? "Uploading..." : "Upload Image"}</button>
//             </form>

//             {response && (
//                 <div style={{ marginTop: "20px" }}>
//                     <h2>Result</h2>
//                     <p style={{ color: response.css_class === "good" ? "green" : response.css_class === "acceptable" ? "orange" : "red" }}>
//                         {response.message}
//                     </p>
//                     {response.uploaded_image && (
//                         <img
//                             src={`http://127.0.0.1:5000/static/uploads/${response.uploaded_image}`}
//                             alt="Uploaded"
//                             style={{ maxWidth: "300px", marginTop: "10px", borderRadius: "8px" }}
//                         />
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };
import React, { useState } from "react";
import { Camera, Sun, CloudSun, Cloud, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [plant, setPlant] = useState("Apple");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);

    // تحسين متطلبات الإضاءة للنباتات
    const plantLightRequirements = {
        "Apple": {
            sunlight_hours: "6-8 hours",
            light_level: "High - Direct sunlight",
            brightness_threshold: 160,
            optimal_range: "Full sun exposure",
            tips: "Needs open space away from shade"
        },
        "Cherry (including sour)": {
            sunlight_hours: "6-8 hours", 
            light_level: "High - Direct sunlight",
            brightness_threshold: 150,
            optimal_range: "Full sun exposure",
            tips: "Best in south-facing locations"
        },
        "Corn (maize)": {
            sunlight_hours: "6-8 hours",
            light_level: "Very High - Direct sunlight", 
            brightness_threshold: 170,
            optimal_range: "Full sun, no shade tolerance",
            tips: "Requires maximum sunlight exposure"
        },
        "Grape": {
            sunlight_hours: "7-8 hours",
            light_level: "High - Direct sunlight",
            brightness_threshold: 160,
            optimal_range: "Full sun exposure",
            tips: "Needs warm, sunny location"
        },
        "Peach": {
            sunlight_hours: "6-8 hours",
            light_level: "High - Direct sunlight", 
            brightness_threshold: 160,
            optimal_range: "Full sun exposure",
            tips: "Protect from strong winds"
        },
        "Pepper, bell": {
            sunlight_hours: "6-8 hours",
            light_level: "High - Direct sunlight",
            brightness_threshold: 150,
            optimal_range: "Full sun to partial sun",
            tips: "Can tolerate some afternoon shade"
        },
        "Potato": {
            sunlight_hours: "4-6 hours",
            light_level: "Medium - Partial to full sun",
            brightness_threshold: 120,
            optimal_range: "Partial sun acceptable", 
            tips: "More tolerant of partial shade"
        },
        "Strawberry": {
            sunlight_hours: "4-6 hours",
            light_level: "Medium - Partial to full sun",
            brightness_threshold: 110,
            optimal_range: "Morning sun preferred",
            tips: "Benefits from afternoon shade in hot climates"
        },
        "Tomato": {
            sunlight_hours: "6-8 hours",
            light_level: "High - Direct sunlight",
            brightness_threshold: 155,
            optimal_range: "Full sun exposure",
            tips: "Needs consistent direct sunlight"
        }
    };

    const getLightIcon = (brightness) => {
        if (brightness >= 170) return <Sun className="w-6 h-6 text-yellow-500" />;
        if (brightness >= 130) return <CloudSun className="w-6 h-6 text-yellow-400" />;
        return <Cloud className="w-6 h-6 text-gray-500" />;
    };

    const getResultIcon = (cssClass) => {
        if (cssClass === "good") return <CheckCircle className="w-8 h-8 text-green-500" />;
        if (cssClass === "acceptable") return <AlertTriangle className="w-8 h-8 text-yellow-500" />;
        return <XCircle className="w-8 h-8 text-red-500" />;
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        
        if (selectedFile) {
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);
        } else {
            setPreviewUrl(null);
        }
    };

    const handlePlantChange = (event) => {
        setPlant(event.target.value);
    };

    const analyzeImageLocally = (imageFile) => {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                
                let totalBrightness = 0;
                let brightPixels = 0;
                let darkPixels = 0;
                
                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i];
                    const g = data[i + 1]; 
                    const b = data[i + 2];
                    const brightness = (r + g + b) / 3;
                    
                    totalBrightness += brightness;
                    
                    if (brightness > 180) brightPixels++;
                    if (brightness < 80) darkPixels++;
                }
                
                const avgBrightness = totalBrightness / (data.length / 4);
                const brightRatio = (brightPixels / (data.length / 4)) * 100;
                const darkRatio = (darkPixels / (data.length / 4)) * 100;
                
                resolve({
                    avgBrightness: Math.round(avgBrightness),
                    brightRatio: Math.round(brightRatio),
                    darkRatio: Math.round(darkRatio)
                });
            };
            
            img.src = URL.createObjectURL(imageFile);
        });
    };

    const handleSubmit = async () => {
        if (!file) {
            alert("Please select a file.");
            return;
        }

        setLoading(true);
        
        try {
            // تحليل الصورة محلياً
            const analysis = await analyzeImageLocally(file);
            const plantReq = plantLightRequirements[plant];
            
            let suitability = "not-suitable";
            let message = "";
            
            if (analysis.avgBrightness >= plantReq.brightness_threshold) {
                suitability = "good";
                message = `Perfect! This location provides excellent light for ${plant}. The brightness level (${analysis.avgBrightness}) meets the plant's requirements.`;
            } else if (analysis.avgBrightness >= plantReq.brightness_threshold - 30) {
                suitability = "acceptable"; 
                message = `Acceptable light conditions for ${plant}. The brightness (${analysis.avgBrightness}) is moderate but may need some improvement.`;
            } else {
                suitability = "not-suitable";
                message = `This location may not provide sufficient light for ${plant}. The brightness level (${analysis.avgBrightness}) is below optimal requirements.`;
            }
            
            setResponse({
                message,
                css_class: suitability,
                brightness: `Average Brightness: ${analysis.avgBrightness}/255`,
                bright_areas: `Bright areas: ${analysis.brightRatio}%`,
                dark_areas: `Dark areas: ${analysis.darkRatio}%`,
                min_brightness: plantReq.brightness_threshold,
                plant_info: plantReq
            });
            
        } catch (error) {
            console.error("Analysis error:", error);
            setResponse({ 
                message: "Error analyzing image.",
                css_class: "not-suitable"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-green-700 mb-4">
                        🌱 Plant Light Analyzer
                    </h1>
                    <p className="text-lg text-gray-600">
                        Upload a photo of your space to check if it's suitable for your chosen plant
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Upload Section */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-3">
                                    <span className="flex items-center gap-2">
                                        🌿 Choose your plant:
                                    </span>
                                </label>
                                <select 
                                    value={plant} 
                                    onChange={handlePlantChange} 
                                    className="mt-2 block w-full p-3 border-2 border-green-300 rounded-lg focus:border-green-500 focus:outline-none"
                                >
                                    {Object.keys(plantLightRequirements).map(plantName => (
                                        <option key={plantName} value={plantName}>{plantName}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-3">
                                    <span className="flex items-center gap-2">
                                        <Camera className="w-5 h-5" />
                                        Upload location photo:
                                    </span>
                                </label>
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleFileChange} 
                                    className="mt-2 block w-full p-3 border-2 border-green-300 rounded-lg focus:border-green-500 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                                />
                            </div>

                            {previewUrl && (
                                <div className="mt-4">
                                    <img
                                        src={previewUrl}
                                        alt="Preview"
                                        className="w-full max-h-48 object-cover rounded-lg border-2 border-gray-200"
                                    />
                                </div>
                            )}

                            <button 
                                onClick={handleSubmit}
                                disabled={loading || !file} 
                                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        <Sun className="w-5 h-5" />
                                        Analyze Light Conditions
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Plant Information */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            📋 {plant} Requirements
                        </h3>
                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-center gap-2">
                                <Sun className="w-5 h-5 text-yellow-500" />
                                <span><strong>Sunlight:</strong> {plantLightRequirements[plant].sunlight_hours}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CloudSun className="w-5 h-5 text-blue-500" />
                                <span><strong>Light Level:</strong> {plantLightRequirements[plant].light_level}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-orange-500" />
                                <span><strong>Optimal:</strong> {plantLightRequirements[plant].optimal_range}</span>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg">
                                <strong className="text-green-700">💡 Tip:</strong>
                                <p className="text-green-600 mt-1">{plantLightRequirements[plant].tips}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results */}
                {response && (
                    <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            {getResultIcon(response.css_class)}
                            <h2 className="text-2xl font-bold text-gray-800">Analysis Results</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <p className={`text-lg font-semibold mb-4 ${
                                    response.css_class === "good" ? "text-green-600" : 
                                    response.css_class === "acceptable" ? "text-yellow-600" : "text-red-600"
                                }`}>
                                    {response.message}
                                </p>
                                
                                {response.brightness && (
                                    <div className="space-y-2 text-gray-700">
                                        <div className="flex items-center gap-2">
                                            {getLightIcon(parseInt(response.brightness.match(/\d+/)[0]))}
                                            <span className="font-medium">{response.brightness}</span>
                                        </div>
                                        {response.bright_areas && (
                                            <p className="text-sm">☀️ {response.bright_areas}</p>
                                        )}
                                        {response.dark_areas && (
                                            <p className="text-sm">🌑 {response.dark_areas}</p>
                                        )}
                                    </div>
                                )}
                                
                                {(response.css_class === "not-suitable" || response.css_class === "acceptable") && (
                                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                                        <p className="text-blue-700 font-medium">
                                            💡 Recommendation: This plant needs brightness above {response.min_brightness}
                                        </p>
                                        <p className="text-blue-600 text-sm mt-2">
                                            Consider moving to a brighter location or adding grow lights
                                        </p>
                                    </div>
                                )}
                            </div>
                            
                            {previewUrl && (
                                <div>
                                    <img
                                        src={previewUrl}
                                        alt="Analyzed location"
                                        className="w-full max-h-64 object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadForm;