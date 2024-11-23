import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarstyles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={navbarstyles.navbar}>
            <div className={navbarstyles.logoContainer}>
                <img 
                    className={navbarstyles.logo} 
                    src={getImageUrl("nav/logo.png")}
                    alt="Library Logo"
                />
                <Link className={navbarstyles.title} to="/">
                    Baguio City Public Library
                </Link>
            </div>

            {/* Menu Section */}
            <div className={navbarstyles.menu}>
                <img 
                    className={navbarstyles.menuBtn} 
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
                    alt="menu-button" 
                    onClick={() => setMenuOpen(!menuOpen)} 
                />
                <div
                    className={`${navbarstyles.menuItems} ${menuOpen ? navbarstyles.menuOpen : ''}`} 
                    onClick={() => setMenuOpen(false)}
                >
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/bookPage">Book</Link>
                    </div>
                    <div>
                        <Link to="/activityPage">Activity</Link>
                    </div>
                    <div>
                        <Link to="/contactPage">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
