import LogoImg from '../../assets/common/camera-logo.png'
import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { menulists } from '../../assets/data/data.js'
import { CustomNavLink, CustomLink, Badges } from './CustomComponents.jsx'
import './Header.css'
import { IoSearchOutline } from 'react-icons/io5'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { ModelCart } from '../cart/ModelCart.jsx'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    // close menu if the user clicks outside of the close menu button
    const closeMenuOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    // handle scroll with animation
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeMenuOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", closeMenuOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const isHomePage = location.pathname === "/";

    return (
        <>
            <header className={isHomePage ? `header px-12 py-3 bg-white-100 relative z-20 ${isScrolled ? "scrolled" : ""}` : `header px-12 py-3 bg-white-100 relative z-20 scrolled`}>
                {isHomePage && (
                    <div className={`${isScrolled ? "lg:bg-none" : "lg:bg-black"} lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}></div>
                )}
                <nav className="p-4 flex justify-between items-center relative">
                    <div className="flex items-center gap-14">
                        <a style={{display: 'flex', marginBottom: '-1em'}} href={`/`}>
                            <img src={LogoImg} alt="LogoImg" className="h-12" />
                            <h3 style={{marginTop: '1em', marginLeft: '0.5em', fontWeight: 'bold'}}>CameraShop</h3>
                        </a>
                        <div className="hidden lg:flex items-center justify-between gap-8">
                            {menulists.map((list) => (
                                <li key={list.id} className="uppercase list-none">
                                    <CustomNavLink href={list.path} className={`${isScrolled || isHomePage ? "text-primary" : "text-primary"}`}>{list.link}</CustomNavLink>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-8 icons">
                        <div className="uppercase hidden lg:block text-inherit relative z-20">
                            <CustomLink className={`${isScrolled || isHomePage ? "text-white" : "text-primary"}`}>Login</CustomLink>
                            <span className={`${isScrolled || isHomePage ? "text-white" : "text-primary"}`}>/</span>
                            <CustomLink className={`${isScrolled || isHomePage ? "text-white" : "text-primary"}`}>Register</CustomLink>
                        </div>
                        <div className={`${isScrolled || isHomePage ? "text-white" : "text-primary"} icon flex items-center justify-center gap-6`}>
                            <IoSearchOutline size={23} />
                            <ModelCart />
                            <button onClick={toggleMenu} className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none">
                                {isOpen ? (
                                  <AiOutlineClose size={24} />  
                                ) : (
                                  <AiOutlineMenu size={24} />
                                )}
                            </button>
                        </div>
                    </div>

                {/* The menu will be responsive if the window width is below 768px */}
                
                    <div ref={menuRef} className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-0 menu-container ${isOpen ? "open" : "closed"}`}>
                        {menulists.map((list) => (
                            <li key={list.id} className="uppercase list-none">
                                <CustomNavLink href={list.path} className={`${isScrolled || isHomePage ? "text-white" : "text-white"}`}>{list.link}</CustomNavLink>
                            </li>
                        ))}
                    </div>
                </nav>
            </header>
        </>
    );
};  