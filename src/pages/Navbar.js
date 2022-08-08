import React, { useRef } from 'react';
import '../styles/navbar.scss';
import logo from '../assets/imgs/logo-2.svg';

export default function Navbar() {
    const menu = useRef();
    const navIcon = useRef();

    function openCloseMenu() {
        menu.current.classList.toggle('right');
        navIcon.current.classList.toggle('bgWhite');
    }

    return (
        <nav className='navBar'>
            <a className='logo' href='#home'>
                <img src={logo} alt='' />
            </a>

            <div className='menu' ref={menu}>
                <div className='navLinks'>
                    <a className='fw-300' href='#home'>
                        Home
                    </a>
                    <a className='fw-300' href='#projects'>
                        Projects
                    </a>
                    <a className='fw-300' href='#about'>
                        About
                    </a>
                    <a className='fw-300' href='#contact'>
                        Contact
                    </a>
                </div>
            </div>

            <div className='navIcon pointer' ref={navIcon} onClick={openCloseMenu}>
                <div className='top'></div>
                <div className='bottom'></div>
            </div>
        </nav>
    );
}
