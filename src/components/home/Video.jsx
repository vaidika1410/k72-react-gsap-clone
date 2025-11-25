import React from 'react'

const Video = () => {
  return (
    <div>
        <video 
        className='h-full w-full object-cover'
        autoPlay muted loop 
        src='/k72-react-gsap-clone/video.mp4' />
    </div>
  )
}

export default Video