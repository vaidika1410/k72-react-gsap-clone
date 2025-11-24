import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import React, { useRef } from 'react'

const AgencySection1 = () => {

    const imageDivRef = useRef(null)
    const imageRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    const images = [
        'public/images/Carl_480x640.jpg',
        'public/images/Olivier_480x640.jpg',
        'public/images/Lawrence_480x640.jpg',
        'public/images/HugoJoseph_480x640.jpg',
        'public/images/ChantalG_480x640.jpg',
        'public/images/SophieA_480x640.jpg',
        'public/images/Michele_480x640.jpg',
        'public/images/Mel_480x640.jpg',
        'public/images/CAMILLE_480x640_2.jpg',
        'public/images/MEGGIE_480x640_2.jpg',
        'public/images/joel_480x640_3.jpg',
    ]

    useGSAP(function () {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                start: 'top 24.5%',
                end: 'top -175%',
                pin: true,
                onUpdate: (elem)=>{
                    let imageIndex;
                    if(elem.progress < 1) {
                        imageIndex = Math.floor(elem.progress * images.length);
                    } else {
                        imageIndex = images.length - 1;
                    }

                    imageRef.current.src = images[imageIndex]
                }
            }
        })
    })

    return (
        <div className='relative font-[lausanne-500]'>
            <div ref={imageDivRef} className='absolute w-56 object-cover rounded-2xl overflow-hidden -top-59 left-[31%] '>
                <img ref={imageRef} src="public/images/Carl_480x640.jpg" alt="" />
            </div>
            <div className="agency-section1-hero-text relative text-[42vh] uppercase leading-[36vh] text-center mt-[27%]">
                <h1>
                    Sixty-
                </h1>
                <h1>
                    seventh
                </h1>
                <h1>
                    Twelve
                </h1>
            </div>
            <div>
                <div className='agency-section1-paragraph-text text-[7.5vh] w-4/7 absolute right-5 leading-14'>
                    <div className='w-68 h-3 inline-block'></div>
                    Our curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. It has values, a personality, a history. If we forget that, we might achieve good short-term results, but we'll kill it in the long run. That's why we're committed to providing perspective, to building influential brands.
                </div>
            </div>
        </div>
    )
}

export default AgencySection1