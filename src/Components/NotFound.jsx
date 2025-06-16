function NotFound(){
  return(
      <>
     


<div className="flex items-center justify-center min-h-screen  bg-gray-200">
    <div className="text-center px-4 md:px-10 lg:px-20">
      <h1 className="text-6xl md:text-8xl font-bold text-gray-800"> Error 404</h1>
      <h2 className="text-2xl md:text-3xl mt-4 text-gray-600">Sorry Page Not Found</h2>
      <p className="mt-2 text-gray-500 text-base md:text-lg">
        The page you are looking for does not exist or has been moved.
      </p>
      <a 
        href="/" 
        className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold text-sm md:text-base rounded hover:bg-blue-700 transition duration-300"
      >
        Go Back to Home
      </a>
    </div>
  </div>



      </> 
  );

}
export default NotFound;