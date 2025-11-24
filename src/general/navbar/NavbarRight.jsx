import { useLocation } from "react-router-dom"
import Menu from "../Menu"

const NavbarRight = (navRight) => {
    
    const currentPath = useLocation().pathname

    return (
        <div>
            <div ref={navRight.navRight} className="nav-right absolute top-0 right-0 h-full left-[35%] font-[lausanne-500] text-xl flex">
                <div className="h-[90%] bg-black text-white w-1/3 top-0 uppercase">
                    <a href="/projects" className='right-navigations flex items-end h-full w-full relative hover:text-black'>
                        <h2 className='absolute mx-2'>projects</h2>
                    </a>
                </div>

                <div className="h-[140%] bg-black text-white w-2/4 top-0 flex items-end uppercase">
                    <a href="/agency" className='right-navigations flex items-end h-full w-full relative hover:text-black'>
                        <h2 className='absolute mx-2'>agency</h2>
                    </a>
                </div>

                {currentPath == '/' ? (
                    <div 
                    onClick={() => {
                        <Menu />
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
                ) }
            </div>
        </div>
    )
}

export default NavbarRight