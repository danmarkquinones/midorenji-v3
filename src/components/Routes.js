import React , {useContext} from "react";
import {NavLink } from "react-router-dom";
import { ThemeContext } from "./context/themeContext";
import { Switch } from 'antd';
import logo from '../images/logo2.png'

export default function Routes(props) {

    const [theme,setTheme] = useContext(ThemeContext)

    const lightColors = {
        primaryBackground : "#F2F3F5",
        secondaryBackground : "#fff",
        primaryTextColor : "#1f1f1f",
        secondaryTextColor : "#1c1e21"
    }

    const darkColors = {
        primaryBackground : "#030407",
        secondaryBackground : "#1c1e21",
        primaryTextColor : "#F2F3F5",
        secondaryTextColor : "#fff"
    }

    function switchToDarkMode(checked) {
        console.log(`switch to ${checked}`);
        if(checked){
            setTheme({
                ...theme , 
                isDarkMode : checked,
                ...darkColors
            })
        }else{
            setTheme({
                ...theme , 
                isDarkMode : checked,
                ...lightColors
            })
        }
    }

    console.log("THEME" ,theme)

    return (
        <React.Fragment>
            {/* <h1 style={{color:theme.primaryTextColor}}>LOGO</h1> */}
            <div
                style={{
                    height:"50px",
                    width:"50px",
                    overflow:"hidden",
                    marginRight:"1%"
                }}
            >
                <img src={logo} style={{height:"50px"}} alt="logo"/>
            </div>
            <NavLink 
                className="nav-links" 
                activeClassName="active" 
                style={{color:theme.secondaryTextColor}} 
                to="/my-projects"
            >
                Projects
            </NavLink>
            <NavLink 
                className="nav-links" 
                activeClassName="active" 
                style={{color:theme.secondaryTextColor}} 
                to="/profile"
            >
                Profile
            </NavLink>
            <NavLink 
                className="nav-links" 
                activeClassName="active" 
                style={{color:theme.secondaryTextColor}} 
                to="/contact-me">
                    Contacts
            </NavLink>
            <div style={{position:"absolute" , right:"5%"}}>
                <Switch  onChange={switchToDarkMode} />
            </div>
        </React.Fragment>
    );
}

