import gsap from "gsap/all"
import { useLocation } from "react-router-dom"
import { X } from 'lucide-react';
import { useRef } from "react";

const NavbarRight = (navRight) => {

    const currentPath = useLocation().pathname

    function displayMenu() {
        const tl = gsap.timeline()

        tl.to('.slice', {
            y: '100vh',
            stagger: {
                amount: -0.23
            }
        }, 'equal')

        tl.to('.menu-transition', {
            y: '100vh',
            stagger: {
                amount: -0.23
            }
        }, 'equal')

        tl.to('.slice', {
            y: '200vh',
            stagger: {
                amount: -0.23
            }
        }, 'equal')

        tl.to('.menu', {
            y: '100vh',
        })

    }

    function closeMenu() {

        const tl = gsap.timeline()

        tl.to('.menu', {
            y: '0vh',
        })
    }

    const links = [
        {
            title: 'Work',
            image1: 'src/assets/MenuImages/link1_image1.jpg',
            image2: 'src/assets/MenuImages/link1_image2.jpg',
            text: 'See everything',
            path: '/k72-react-gsap-clone/projects'
        },
        {
            title: 'Agency',
            image1: 'src/assets/MenuImages/link2_image1.jpg',
            image2: 'src/assets/MenuImages/link2_image2.jpg',
            text: 'know us',
            path: '/k72-react-gsap-clone/agency'
        },
        {
            title: 'Contact',
            image1: 'src/assets/MenuImages/link3_image1.jpg',
            image2: 'src/assets/MenuImages/link3_image1.jpg',
            text: 'send us a fax',
            path: '/k72-react-gsap-clone/'
        },
        {
            title: 'blog',
            image1: 'src/assets/MenuImages/link4_image1.jpg',
            image2: 'src/assets/MenuImages/link4_image2.jpg',
            text: 'read articles',
            path: '/k72-react-gsap-clone/'
        }
    ]


    return (
        <div>
            <div ref={navRight.navRight} className="nav-right absolute top-0 right-0 h-full left-[35%] font-[lausanne-500] text-xl flex">
                <div className="h-[90%] bg-black text-white w-1/3 top-0 uppercase">
                    <a href="/k72-react-gsap-clone/projects" className='right-navigations flex items-end h-full w-full relative hover:text-black'>
                        <h2 className='absolute mx-2'>projects</h2>
                    </a>
                </div>

                <div className="h-[140%] bg-black text-white w-2/4 top-0 flex items-end uppercase">
                    <a href="/k72-react-gsap-clone/agency" className='right-navigations flex items-end h-full w-full relative hover:text-black'>
                        <h2 className='absolute mx-2'>agency</h2>
                    </a>
                </div>

                {currentPath == '/' ? (
                    <div
                        onClick={() => {
                            displayMenu()
                        }}
                        className="h-[220%] bg-black text-white w-1/4 top-0 flex items-end uppercase">
                        <button className='right-navigations flex items-end h-full w-full uppercase cursor-pointer relative hover:text-black'>
                            <div className='absolute h-3 bottom-5 w-15 right-6 flex flex-col justify-center gap-1'>
                                <div className='menu-bars h-[14.5%] w-full bg-white'></div>
                                <div className='menu-bars h-[14.5%] w-[50%] ml-[50%] bg-white'></div>
                            </div>
                        </button>
                    </div>
                ) : (
                    <div className="h-[210%] bg-black text-white w-1/4 top-0 flex items-end uppercase">
                        <button className='right-navigations flex items-end h-full w-full uppercase cursor-pointer relative hover:text-black'>
                            <h2 className='absolute mx-2'>menu</h2>
                            <div className='fixed h-3 w-15 top-5 right-6 flex flex-col justify-center gap-1'>
                                <div className='menu-bars h-[14.5%] w-full bg-white'></div>
                                <div className='menu-bars h-[14.5%] w-[50%] ml-[50%] bg-white'></div>
                            </div>
                        </button>
                    </div>
                )}
            </div>

            <div className="menu h-screen w-screen bg-black text-white absolute -top-[100vh] left-0 z-40">
                <div className="menu-transition h-screen w-screen bg-black absolute z-30  flex">
                    <div className="slice h-full w-1/5 bg-black"></div>
                    <div className="slice h-full w-1/5 bg-black"></div>
                    <div className="slice h-full w-1/5 bg-black"></div>
                    <div className="slice h-full w-1/5 bg-black"></div>
                    <div className="slice h-full w-1/5 bg-black"></div>
                </div>
                <div className="menu-links  h-full text-white flex items-center justify-center flex-col">
                    <div className=" absolute w-full border-b border-b-white flex items-center justify-end flex-col mb-60 h-14/15">
                        {
                            links.map((link, idx) => {
                                return (<a href={link.path}
                                    key={idx}
                                    className="h-1/6 w-full  flex items-center justify-center uppercase font-[lausanne-500] border-t border-t-white"
                                >
                                    <div className="">
                                        <h1 className="text-9xl pt-3">{link.title}</h1>
                                    </div>
                                </a>)
                            })
                        }
                    </div>
                </div>

                <div
                    onClick={() => {
                        closeMenu()
                    }}
                    className="close-menu text-3xl cursor-pointer absolute -right-10 -top-10">
                    <X size={204} strokeWidth={0.3} />
                </div>
            </div>
        </div>
    )
}

export default NavbarRight