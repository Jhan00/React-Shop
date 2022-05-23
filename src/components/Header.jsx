import React from "react";

const Header = () => {
    return (
        <nav>
        <img src="./icons/menu-bar.png" alt="" className="menu" />
        <div className="navbar-left">
            <img src="./logo/main-logo.jpeg" alt="logo" className="logo" />
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li className="navbar-email">platzi@example.com</li>
                <li className="navbar-shopping-cart">
                    <img src="./icons/cart.png" alt="shopping cart" />
                    <div>2</div>
                </li>
                </ul>
        </div>
    </nav>
    );
}

export default Header;