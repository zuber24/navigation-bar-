import React, {useState} from "react";
import "./Navbar.css";
import Logo from "../Images/logo.png";
import menu from "../Images/menu.png";
import { NavLink } from "react-router-dom";




const Navbar = () => {

    const [show, setshow] = useState(false);
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="mainBar" >
                <div className={show ? 'D-bolck' : 'D-none'}>
                    <div className="nav-list">
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="active_comp" >Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/about" activeClassName="active_comp">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/contact" activeClassName="active_comp">Contact Us</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/login" activeClassName="active_comp">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className="logo2">
                <img src={menu} alt="" onClick={(e) => setshow(!show)} />
            </div>
        </div>
    );
}

export default Navbar;
