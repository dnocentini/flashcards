import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
    let nav = props.user ? (
        <div>
            <Link to="/categories" className="NavBar-Link" >
                CATEGORIES
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/adm-flashcard" className="NavBar-Link" >
                ADM
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="" className="NavBar-link" onClick={props.handlelogout}>
                LOG OUT
            </Link>
        </div>
    ) : (
        <div>
            <Link to="/login" className="NavBar-link">
                LOG IN
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/signup" className="NavBar-link">
                SIGN UP
            </Link>
        </div>
    );

return <div className="NavBar">{nav}</div>;
};

export default NavBar;