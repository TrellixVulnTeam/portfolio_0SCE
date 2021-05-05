import React, { useState, useEffect } from 'react'
import { NavHashLink } from 'react-router-hash-link';
import './navbar.scss'
import '../App.scss'
const Navbars = (props) =>
{
    const [scrolled, setScrolled] = useState(false);
    const [isActive, setActive] = useState(false);
    useEffect(() =>
    {

        function handleScroll()
        {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        //React states to handle scroll sticky navbar
        window.addEventListener('scroll', handleScroll, true);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);
    // for hamburger menu
    const toggleClass = () =>
    {
        setActive(!isActive);
    };

    return (

        <div className="nav-wrapper">

            <nav className={
                scrolled ? 'navbar sticky' : 'navbar'
            }>
                <label className="logo">
                    <NavHashLink
                        exact
                        smooth to="/#home"
                        activeClassName="active"
                        className="navbar__link" >
                        <img src="./favicon.ico"
                            width="50"
                            height="50"
                            alt="logo" />
                    </NavHashLink>
                </label>
                <ul id="ul" className={isActive ? 'show' : null} onClick={toggleClass}>
                    <li className="nav-lists">
                        <NavHashLink
                            exact
                            smooth to="/#home"
                            activeClassName="active"
                            className="navbar__link" >
                            Home
                        </NavHashLink>
                    </li>
                    <li className="nav-lists">
                        <NavHashLink
                            smooth to="/#projects"
                            activeClassName="active"
                            className="navbar__link"  >
                            Projects
                        </NavHashLink>
                    </li>
                    <li className="nav-lists">
                        <NavHashLink
                            smooth to="/#about"
                            activeClassName="active"
                            className="navbar__link" >
                            About
                        </NavHashLink>
                    </li>
                </ul>
                <label id="icon"
                    onClick={toggleClass} >
                    <i className="fas fa-bars"></i>
                </label>
            </nav>

        </div>


    )
}

export default Navbars
