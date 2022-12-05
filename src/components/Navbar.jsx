import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { heroData } from '../data/hero_data';

import './styles/navbar.css'

export const Navbar = () => {

    /* ======== Toggle menu ======== */
    const [toggle, setToggle] = useState(false);
    const [hero, setHero] = useState('');
    const { pathname } = useLocation();


    useEffect(() => {
        setHero(heroData[`${pathname}`])
    }, [pathname])
    

    const showMenu = () => {
        setToggle(!toggle);
    }


  return (
    <header className='header'>
        
        <nav className="nav container">
            <a href="/" className="nav__logo">Turing-IA</a>

            <div className={`${ toggle ? 'nav__menu show-menu' : 'nav__menu'}`}>
                <ul className="nav__list">
                    {/* li item */}
                    <li className="nav__item">
                        <a 
                            href="/" 
                            className={` nav__link`}
                        >
                            {/* <AiOutlineHome className='nav__icon'/> */}
                            Inicio
                        </a>
                    </li>
                    {/* li item */}
                    <li className="nav__item">
                        <a 
                            href="/nosotros" 
                            className={`nav__link`}
                        >
                            {/* <AiOutlineUser className='nav__icon'/> */}
                            Nosotros
                        </a>
                    </li>
                    {/* li item */}
                    <li className="nav__item">
                        <a 
                            href="/servicios" 
                            className={`nav__link`}
                        >
                            {/* <AiOutlineFileText className='nav__icon'/> */}
                            Servicios
                        </a>
                    </li>
                    {/* li item */}
                    <li className="nav__item">
                        <a 
                            href="/tableu" 
                            className={`nav__link`}
                        >
                            {/* <BiBriefcaseAlt2 className='nav__icon'/> */}
                            Tableu
                        </a>
                    </li>
                    {/* li item */}
                    <li className="nav__item">
                        <a 
                            href="/portal" 
                            className={`nav__link`}
                        >
                            {/* <BiImage className='nav__icon'/> */}
                            Portal
                        </a>
                    </li>
                    {/* li item */}
                    <li className="nav__item">
                        <a 
                            href="/blog" 
                            className={`nav__link`}
                        >
                            {/* <AiOutlineSend className='nav__icon'/> */}
                            Blog
                        </a>
                    </li>
                    {/* li item */}
                    <li className="nav__item">
                        <a 
                            href="/contacto" 
                            className={`nav__link`}
                        >
                            {/* <AiOutlineSend className='nav__icon'/> */}
                            Contacto
                        </a>
                    </li>
                </ul>

                {/* <AiOutlineClose
                    className='nav__close'
                    onClick={showMenu}
                /> */}
                <span className='nav__close'
                    onClick={showMenu}>X</span>
            </div>

            <div 
                className="nav__toggle nav__toggle-open"
                onClick={showMenu}
            >
                {/* <AiOutlineAppstore className='nav__icon'/> */}
                <span className='nav__icon'>X</span>
            </div>
        </nav>
        <div className="hero">
            <span className="hero__title">{hero.title}</span>
            <span className="hero__subtitle">{hero.subtitle}</span>
            <button className="button">Empecemos </button>
        </div>
    </header>
  )
}
