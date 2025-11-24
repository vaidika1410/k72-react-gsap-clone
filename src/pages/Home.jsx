import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeFooter from '../components/home/HomeFooter'

const Home = () => {
    return (
        <div className='home w-screen relative h-full'>
            <div className='h-screen w-screen fixed top-0'>
                <Video />
            </div>
            <div className='h-[125vh] w-screen relative bg-transparent text-white font-[lausanne-300] overflow-x-hidden overflow-y-auto'>
                <HomeHeroText />
                <HomeBottomText />
            </div>
            <div>
                <HomeFooter />
            </div>
        </div>
    )
}

export default Home