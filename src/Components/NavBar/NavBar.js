import React from "react";
import './NavBar.css'
import logoIcon from '../../Assets/rlogo.svg'



const NavBar = ({ navigate, clickedRoute, displayNav, mobileNavopen, setMobileNavOpen }) => {

    

    return (
        
        <div className={`navbar ${displayNav ? 'showNav' : 'dontShowNav'}`}>
            <div className="container">
                <div onClick={() => navigate("home")} className="logo">
                    {/* <img className="rebbon_logo" src={logoIcon} alt="rebbon logo" /> */}
                    <svg width="60" height="60" viewBox="0 0 304 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M139.978 108.117C127.154 108.558 118.772 108.662 115.964 108.414C113.311 108.18 113.563 108.129 113.227 108.969C113.008 109.517 112.921 110.012 112.875 110.973C112.821 112.107 112.843 112.305 113.071 112.753C113.632 113.856 114.735 114.371 118.432 115.259C120.45 115.744 121.025 115.994 121.769 116.708C122.36 117.275 122.566 117.624 122.925 118.664L123.177 119.391L123.213 148.536C123.239 168.918 123.211 178.03 123.119 178.845C122.729 182.308 121.764 184.156 119.878 185.052L119.07 185.436L116.653 185.433C114.751 185.43 114.081 185.385 113.511 185.223C112.789 185.018 112.785 185.019 112.574 185.287C112.218 185.742 112 186.697 112 187.799C112 189.616 112.512 190.541 113.879 191.195C115.514 191.978 114.995 191.951 130.491 192.04C140.21 192.096 144.718 192.163 145.049 192.256C145.649 192.424 145.751 192.345 146.092 191.454C146.273 190.981 146.372 190.389 146.413 189.55C146.465 188.483 146.442 188.271 146.222 187.838C145.66 186.735 144.639 186.229 141.268 185.387C139.932 185.053 138.611 184.662 138.331 184.519C137.651 184.172 137.046 183.515 136.686 182.735C136.035 181.323 136.059 182.499 136.054 151.441C136.051 132.318 136.092 122.312 136.175 121.63C136.693 117.376 138.279 115.658 142.395 114.891C144.124 114.569 149.412 114.566 151.338 114.886C155.673 115.605 158.841 116.952 161.61 119.256C164.437 121.606 166.236 124.681 166.994 128.459C167.234 129.654 167.252 130.024 167.195 132.639C167.145 134.944 167.085 135.716 166.886 136.564C166.046 140.148 164.829 142.455 162.579 144.729C160.543 146.787 157.908 148.316 154.48 149.427C151.358 150.439 149.327 150.817 146.215 150.965C143.94 151.073 142.89 151.22 142.334 151.51C141.854 151.76 141.056 152.663 140.732 153.322C139.929 154.955 139.996 157.161 140.861 157.582C140.973 157.637 142.59 157.71 144.452 157.744L147.839 157.806L148.678 158.22C149.273 158.514 149.8 158.919 150.495 159.614C152.268 161.387 153.213 162.979 157.038 170.64C161.534 179.645 163.919 183.616 166.481 186.36C166.86 186.766 167.189 187.15 167.212 187.213C167.315 187.49 169.818 189.592 170.962 190.361C172.543 191.424 173.284 191.797 174.723 192.256C177.358 193.095 181.131 193.243 183.581 192.603C187.351 191.618 190.629 189.138 191.722 186.443C192.473 184.592 191.616 182.225 190.195 182.225C189.941 182.225 189.235 182.417 188.627 182.653C187.062 183.259 185.364 183.446 183.989 183.164C181.017 182.553 177.569 179.597 173.492 174.166C172.574 172.943 169.109 167.935 166.988 164.766C164.42 160.928 162.1 158.063 160.427 156.665C159.915 156.237 159.513 155.87 159.533 155.85C159.553 155.83 160.246 155.601 161.073 155.342C162.847 154.787 164.676 154.062 166.055 153.366C173.554 149.587 178.887 142.802 180.427 135.084C180.675 133.844 180.705 133.343 180.705 130.54C180.705 127.691 180.678 127.261 180.421 126.056C178.176 115.525 169.557 109.597 154.497 108.229C151.677 107.973 145.546 107.926 139.978 108.117Z" fill="#FAFFFE"/>
                        <path d="M68.1367 174.236V195.016L151.257 246.167L238.374 195.016V174.236" stroke="#FAFFFE" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M238.373 124.684V103.904L155.253 52.7531L68.1362 103.904V124.684" stroke="#FAFFFE" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M280.732 161.449C293.091 161.449 303.111 151.429 303.111 139.07C303.111 126.711 293.091 116.692 280.732 116.692C268.373 116.692 258.354 126.711 258.354 139.07C258.354 151.429 268.373 161.449 280.732 161.449Z" fill="#FAFFFE"/>
                        <path d="M23.3789 107.101V79.128L153.654 4L278.334 79.128V126.283" stroke="#FAFFFE" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23.3774 139.071C11.0181 139.071 0.998859 149.09 0.998859 161.449C0.998859 173.808 11.0181 183.828 23.3774 183.828C35.7367 183.828 45.7559 173.808 45.7559 161.449C45.7559 149.09 35.7367 139.071 23.3774 139.071Z" fill="#FAFFFE"/>
                        <path d="M280.73 193.418V221.391L150.455 296.519L25.7749 221.391V174.236" stroke="#FAFFFE" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className='navloading'>
                        <h1>ebbon.</h1>
                    </div>
                </div>
                <div className="nav_toggler_container">
                    <div onClick={() => !mobileNavopen ? setMobileNavOpen(true) : setMobileNavOpen(false)} className={ mobileNavopen ? "nav_toggler open" : "nav_toggler"}>
                        <span></span>
                    </div>
                </div>
                <div className={ mobileNavopen ? "nav_items open" : "nav_items"}>
                    <div className="menu_background"></div>

                    <div className="colorRoller">
                        <img src={logoIcon} alt='color animation'/>
                    </div>

                    <div className="nav_things">
                        <div className="colorsecRoller">
                            <img src={logoIcon} alt='color animation'/>
                        </div>
                        <div className="nav_items_list_container">
                            <ul className="nav_item_list">
                                <li onClick={() => navigate("work")} className={ clickedRoute === 'work' ? "active" : "notactive"}>Work</li>
                                <li onClick={() => navigate("services")} className={ clickedRoute === 'services' ? "active" : "notactive"}>Services</li>
                                <li onClick={() => navigate("about")} className={ clickedRoute === 'about' ? "active" : "notactive"}>About us</li>
                            </ul>
                        </div>
                        <div className="btn">
                            <div className="Schedule_button"> </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NavBar;