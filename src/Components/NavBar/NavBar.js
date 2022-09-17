import React from "react";
import './NavBar.css'
import logoIcon from '../../Assets/rebbon.svg'

const NavBar = () => {

    return (
        
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img className="rebbon_logo" src={logoIcon} alt="rebbon logo" />
                    <div className='navloading'>
                        <h1>ebbon.</h1>
                    </div>
                </div>
                <div className="nav_items">
                    <div className="nav_items_list_container">
                        <ul className="nav_item_list">
                            <li>Work</li>
                            <li>Services</li>
                            <li>About us</li>
                        </ul>
                    </div>
                    <div className="btn">
                    <div className="Schedule_button"> </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;