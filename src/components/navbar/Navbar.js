import React, { useState } from "react";
import icstImg from '../../img/ICST.png'
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header>
			<nav>
                <Link to="/" className='title'> <img src={icstImg} alt='icst-logo'></img> </Link>
                <div className='menu' onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen && "open"}>
                    <li><NavLink to="/partners">Partners</NavLink></li>
                    <li><NavLink to="/careers">Careers</NavLink></li>
                    <li><NavLink to="/blogs">Blog</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
                <ul className={menuOpen && "open"}>
                    <li><NavLink to="/lms" className="button">LMS</NavLink></li>
                    <li><NavLink to="/library" className="button">Library</NavLink></li>
                </ul>
                
            </nav>
		</header>
	);
}

export default Navbar