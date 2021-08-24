import React from "react";
import "./NavBarLogo.css";

const NavBarLogo = () => {
    return (
        <>
            <header>
                <a
                    className="hamburger"
                    href="#navbar"
                    aria-label="Open main menu."
                >
                    <span className="sr-only">Open main menu</span>
                    <i class="fas fa-bars" aria-hidden="true"></i>
                </a>
                <nav id="navbar" className="nav_with_logo">
                    <ul>
                        <li>
                            <i className="fab fa-linkedin logo"></i>
                            <span className="sr-only">LinkedIn</span>
                        </li>
                        <li>
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </li>
                        <li>
                            <i className="fas fa-network-wired"></i>
                            <span>Network</span>
                        </li>
                        <li>
                            <i className="fas fa-biking"></i>
                            <span>Sport</span>
                        </li>
                        <li>
                            <i className="fas fa-user-lock"></i>
                            <span>Security</span>
                        </li>
                    </ul>
                    <a className="close" href="#" aria-label="Close main menu.">
                        <span className="sr-only">Close main menu</span>
                        <i class="fas fa-times" aria-hidden="true"></i>
                    </a>
                </nav>
            </header>
        </>
    );
};

export default NavBarLogo;
