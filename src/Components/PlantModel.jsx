
// import React from 'react';
// import ImageUploader from './ImageUploader';
// import logo from '../assets/group-642392263.webp'
// export default function PlantModel() {
//   return (
//     <div className="container flex justify-center bg-green-700 bg-opacity-25 pb-96">
//       <div className="text-center">
//         <h1 className="font-bold text-xl mt-10">Identify plants and plant diseases for free</h1>
//         <h3 className="text-center font-medium mt-5 mb-10">
//           Instantly identify plants, flowers, and trees. Explore gardening tips, detailed care guides, and the plant world around you.
//         </h3>
//         <div className="bg-white p-5  rounded-lg shadow-md text-center">
//           <img src={logo} className='m-auto mb-10' />
//           {/* Adjust margin and add padding for proper spacing */}
//           <ImageUploader />
//           <div className='bg-green-700 bg-opacity-10 rounded-md p-5 mt-10 border border-dashed border-green-700 text-zinc-500  '>
//             <span className='text-zinc-600 font-bold'>Note</span>: Please ensure the image of your plant is as clear as possible, and avoid being too far or too close.
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React from 'react';
import ImageUploader from './ImageUploader';
import logo from '../assets/group-642392263.webp';

export default function PlantModel() {
  return (
    <div className="container flex justify-center bg-green-700 bg-opacity-25 pb-96">
      <div className="text-center">
        <h1 className="font-bold text-xl mt-10">Identify Plants and Their Diseases for Free</h1>
        <h3 className="text-center font-medium mt-5 mb-10">
          Instantly identify plants, flowers, and trees. Explore gardening tips, detailed care guides, and the world of plants around you.
        </h3>
        <div className="bg-white p-5 rounded-lg shadow-md text-center">
          <img src={logo} className="m-auto mb-10" alt="Plant Identifier Logo" />
          <ImageUploader />
          <div className="bg-green-700 bg-opacity-10 rounded-md p-5 mt-10 border border-dashed border-green-700 text-zinc-500">
            <span className="text-zinc-600 font-bold">Note</span>: Please ensure the plant image is as clear as possible, and avoid being too close or too far.
          </div>
        </div>
      </div>
    </div>
  );
}