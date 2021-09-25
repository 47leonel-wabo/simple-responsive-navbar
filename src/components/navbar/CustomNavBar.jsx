import React from "react";
import { NavLink } from "react-router-dom";
import "./custom-navbar.style.css";

function CustomNavBar(props) {
    return (
        <>
            <div className="custom-navbar-container">
                <NavLink to="/" end className="logo">
                    {" "}
                    Company Logo
                </NavLink>
                {/* Hide and show dropdown menu */}
                <input type="checkbox" id="custom-menu-bar" />
                <label htmlFor="custom-menu-bar">Menu</label>
                <nav className="custom-navbar">
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active" end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeClassName="active" end>
                                Admin
                            </NavLink>
                        </li>
                        <li>
                            <a href="#">Pages +</a>
                            <ul>
                                <li>
                                    <a href="/blog">Blog</a>
                                </li>
                                <li>
                                    <a href="/help">Help</a>
                                </li>
                                <li>
                                    <a href="#">More +</a>
                                    <ul>
                                        <li>
                                            <a href="/sub1">Sub 1</a>
                                        </li>
                                        <li>
                                            <a href="/sub2">Sub 2</a>
                                        </li>
                                        <li>
                                            <a href="/sub3">Sub 3</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/review">Review</a>
                        </li>
                        <li>
                            <a href="#">Gallery +</a>
                            <ul>
                                <li>
                                    <a href="/g1">Events</a>
                                </li>
                                <li>
                                    <a href="/g2">Parties</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default CustomNavBar;
