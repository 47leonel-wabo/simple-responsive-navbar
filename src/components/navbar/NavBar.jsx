import React from "react";
import "./NavBar.css";

const NavBar = () => (
  <nav>
    <ul className="list-elements">
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/shop">Shop</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/connect">Connect</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
