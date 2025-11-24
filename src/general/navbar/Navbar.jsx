import React, { useState, useEffect } from 'react'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'
import { useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { useRef } from "react"

const Navbar = () => {

    const currentPath = useLocation().pathname

    const navRight = useRef(null)

    let svgFill = 'white'

    if(currentPath == '/projects') {
        svgFill = 'black'
    }
    if(currentPath == '/agency') {
        svgFill = 'black'
    }

    useEffect(() => {
    if (currentPath === '/') {
        gsap.set(navRight.current, { translateY: '-100' });
    } else {
        gsap.set(navRight.current, { translateY: '0%' });
    }
}, [currentPath]);

    return (
        <div className='p-2 px-3 flex justify-between fixed top-0 w-screen z-10'>
          <NavbarLeft fill={svgFill} />
          <NavbarRight navRight={navRight} />
        </div>
    )
}

export default Navbar