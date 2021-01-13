import React from "react";
import {NavLink } from "react-router-dom";

export default function Routes(props) {

    return (
        <React.Fragment>
            <h1>LOGO</h1>
            <NavLink className="nav-links" activeClassName="active" to="/my-projects">Projects</NavLink>
            <NavLink className="nav-links" activeClassName="active" to="/about-me">Profile</NavLink>
            <NavLink className="nav-links" activeClassName="active" to="/contact-me">Contacts</NavLink>
        </React.Fragment>
    );
}

