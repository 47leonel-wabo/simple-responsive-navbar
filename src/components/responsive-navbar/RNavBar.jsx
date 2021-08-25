import React from "react";
import "./rNavBar.css";

const RNavBar = () => {
    return (
        <>
            <nav>
                <div className="logo">aiwa group</div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Features</a>
                        <ul>
                            <li>
                                <a href="#">Performance</a>
                            </li>
                            <li>
                                <a href="#">Availability</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Services</a>
                        <ul>
                            <li>
                                <a href="#">Normal</a>
                            </li>
                            <li>
                                <a href="#">Premium</a>
                            </li>
                            <li>
                                <a href="#">More</a>
                                <span className="fa fa-plus"></span>
                                <ul>
                                    <li>
                                        <a href="#">Gold</a>
                                    </li>
                                    <li>
                                        <a href="#">Platinium</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default RNavBar;
