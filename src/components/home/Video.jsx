import React from 'react'

const Video = () => {
  return (
    <div>
        <video 
        className='h-full w-full object-cover'
        autoPlay muted loop 
        src='public\k72-homepage-video.mp4' />
    </div>
  )
}

export default Video