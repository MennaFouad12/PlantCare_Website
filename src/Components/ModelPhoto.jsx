import React from 'react'

export default function ModelPhoto({img,uploader}) {
  
  return (
    <div className='text-center'> 
    {uploader && img && (
      <img
        src={img}
        alt="Selected"
        style={{ width: '300px', height: 'auto', borderRadius: '8px' ,margin:'50px auto'}}
      />
    )}
  </div>
  )
}
