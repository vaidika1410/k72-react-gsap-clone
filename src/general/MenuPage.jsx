import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { X } from 'lucide-react';
import { useContext, useRef, useState } from 'react';
import { NavbarContext } from './navbar/NavContext';

const MenuPage = () => {
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    console.log(navOpen)

    const fullscreenNav = useRef(null)
    const LinksContainer = useRef(null)
    const tl = useRef(null)

    useGSAP(() => {

        tl.current = gsap.timeline({ paused: true })

        tl.current
            .set(fullscreenNav.current, { display: "block" }) 
            .from('.slice', {
                height: 0,
                stagger: { amount: -0.23 }
            })
            .from('.close-menu', {
                x: 130,
                duration: 0.2,
                ease: 0.5
            }, 'equal')
            .from('.all-links', {
                opacity: 0,
            }, 'equal')
            .from('.link', {
                rotateX: 100,
                opacity: 0,
                stagger: { amount: 0.23 }
            }, 'equal')

    }, []) 


    useGSAP(() => {
        if (navOpen) {
            tl.current.play()
        } else {
            tl.current.reverse()
        }
    }, [navOpen])


    const links = [
        {
            title: 'Projects',
            image1: 'src/assets/MenuImages/link1_image1.jpg',
            image2: 'src/assets/MenuImages/link1_image2.jpg',
            text: 'See everything',
            path: '/projects'
        },
        {
            title: 'Agency',
            image1: 'src/assets/MenuImages/link2_image1.jpg',
            image2: 'src/assets/MenuImages/link2_image2.jpg',
            text: 'know us',
            path: '/agency'
        },
        {
            title: 'Contact',
            image1: 'src/assets/MenuImages/link3_image1.jpg',
            image2: 'src/assets/MenuImages/link3_image1.jpg',
            text: 'send us a fax',
            path: '/'
        },
        {
            title: 'blog',
            image1: 'src/assets/MenuImages/link4_image1.jpg',
            image2: 'src/assets/MenuImages/link4_image2.jpg',
            text: 'read articles',
            path: '/'
        }
    ]

    const [svgfill, setsvgfill] = useState('white')

    return (
        <div ref={fullscreenNav} className='fullscreenNav hidden h-screen w-screen bg-transparent fixed z-20 text-white'>
            <div className='h-screen w-full flex'>
                <div className='h-full w-full flex '>
                    <div className="slice h-full w-1/5 bg-black"></div>
                    <div className="slice h-full w-1/5 bg-black"></div>
                    <div className="slice h-full w-1/5 bg-black"></div>
                    <div className="slice h-full w-1/5 bg-black"></div>
                    <div className="slice h-full w-1/5 bg-black"></div>
                </div>
            </div>
            <div className=' absolute top-2 left-3'>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="115" height="52" viewBox="0 0 103 44" fill={svgfill}>
                        <path fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </a>
            </div>
            <div ref={LinksContainer} className='relative'>
                <div className='all-links w-screen z-20 bg-black fixed top-35 text-white'>
                    {
                        links.map((link, idx) => {
                            return (<a href={link.path}
                                key={idx}
                                className="link origin-top h-[16vh] w-full  flex items-center justify-center uppercase font-[lausanne-500] border-b border-b-white">
                                <div className="">
                                    <h1 className="text-9xl pt-3">{link.title}</h1>
                                </div>
                            </a>)
                        })
                    }
                </div>
            </div>
            <div
                onClick={()=>{
                    setNavOpen(false)
                }}
                className="close-menu text-3xl cursor-pointer absolute -right-10 -top-10 hover:text-[#D3FD50]">
                <X size={204} strokeWidth={0.3} />
            </div>
        </div>
    )
}

export default MenuPage