import gsap from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const PageTransition = () => {

    const currentPath = useLocation().pathname

    const animationParentDiv = useRef(null)

    useGSAP(function () {
        const tl = gsap.timeline()

        tl.to(animationParentDiv.current, {
            display: 'block',
        })

        tl.from('.block', {
            y: '-100%',
            stagger: {
                amount: -0.23
            }
        })

        tl.to('.block', {
            y: '100%',
            delay: 0,
            duration: 0.5,
            stagger: {
                amount: -0.23
            }
        })

        tl.to(animationParentDiv.current, {
            display: 'none',
            opacity: 0,
            duration: 0.3
        })

        tl.to('.block', {
            y: '0%'
        })

    }, [currentPath])

    return (
        <div>
            <div ref={animationParentDiv} className='animation h-screen w-screen bg-white fixed top-0 z-20'>
                <div className='fixed top-0 z-30 p-2 px-3'>
                    <svg style={{fill:'white', stroke:'white'}} xmlns="http://www.w3.org/2000/svg" width="115" height="52" viewBox="0 0 103 44">
                        <path fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
                <div className='h-full w-full flex '>
                    <div className="block h-full w-1/5 bg-black"></div>
                    <div className="block h-full w-1/5 bg-black"></div>
                    <div className="block h-full w-1/5 bg-black"></div>
                    <div className="block h-full w-1/5 bg-black"></div>
                    <div className="block h-full w-1/5 bg-black"></div>
                </div>
            </div>
        </div>

    )
}

export default PageTransition