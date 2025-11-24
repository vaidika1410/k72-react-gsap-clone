import React from 'react'
import Video from './video'

const HomeHeroText = () => {
  return (
    <div className='home-hero-text uppercase text-[20vh] text-center mt-3.5'>
        <div className='leading-[17vh]'>
            The spark
        </div>
        <div className='flex align-center justify-center leading-[18vh]'>
            <div>
                Who
            </div>
            <div className='h-28 w-1/6 rounded-full overflow-hidden object-cover'>
                <Video />
            </div>
        </div>
        <div className='leading-[17vh]'>
            generates
        </div>
        <div className='leading-[17vh]'>
            there
        </div>
        <div className='leading-[17vh]'>
            creativity
        </div>
    </div>
  )
}

export default HomeHeroText