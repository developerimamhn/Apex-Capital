"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import logo from '../image/logo.png';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import image13 from '../image/image13.png';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='relative z-30 w-full'>
            <header className=' container mx-auto flex justify-between items-center py-[18px] sm:py-[23px] lg:py-[32px] relative px-[24px] sm:px-[0]'>
                <div className='sm:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[26px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                <h1 className='Froggo-Logo w-[150px] lg:w-[180px] 2xl:w-[207px]'><Image src={logo} alt=''/></h1>
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:opacity-100 flex justify-between items-start sm:items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px] sm:flex-row flex-col p-[20px] sm:p-[0]
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <Link className={`Link-manu-bar`} href="Portfolio">Portfolio</Link>
                    <Link className='Link-manu-bar' href="Funds">Funds</Link>
                    <Link className='Link-manu-bar' href="Our Teamo">Our Teamo</Link>
                    <Link className='Link-manu-bar' href="News & Resources">News & Resources</Link>
                </nav>

                
                <ul className=''>
                    <button className='founderbtn flex justify-center items-center gap-[12px]'>I'm a founder<Image src={image13} alt=''/></button>
                </ul>
                
                
            </header>
            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;