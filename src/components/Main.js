import React , {useContext} from 'react';
import '../styles/MainStyles.css'
import {Switch,Route,Redirect , useLocation} from "react-router-dom";
import Routes from './Routes'
import AboutMe from './right-side/AboutMe';
import Projects from './right-side/Projects';
import ContactMe from './right-side/ContactMe';
import {AnimatePresence , motion} from 'framer-motion'
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ThemeContext } from "./context/themeContext";

const pageVariants = {
    initial:{
        opacity:0,
        // x:"-100vh",
        scale:0.5
    },
    in:{
        opacity:1,
        // x:"0",
        scale:1
    },
    out:{
        opacity:0,
        // x:"100vh",
        scale:0.5
    }
}

const pageTransition = {
    duration :"1"
}

const Main = (props) => {
    
    const location = useLocation()
    const [theme,setTheme] = useContext(ThemeContext)

    const handleRedirect = (link) => {
        window.open(link, "_blank")
    }
    
    return(
        <div 
            className='main-div' 
            style={{
                backgroundColor : theme.primaryBackground
            }}
        >

            <div 
                className="social-icon-div"
                style={{
                    backgroundColor : theme.secondaryBackground,
                    boxShadow: !theme.isDarkMode && "0px 0px 10px gray"
                }}
            >
                <IconButton 
                    className="social-icon-button"
                    onClick={()=>handleRedirect("https://www.facebook.com/itzmedanmark/")}
                    style={{
                        margin:"5px 0px",
                        backgroundColor: theme.isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <FacebookIcon style={{fontSize:30 , color:theme.primaryTextColor}}/>
                </IconButton>
                <IconButton
                    className="social-icon-button"
                    onClick={()=>handleRedirect("https://twitter.com/hidnlmrks")}
                    style={{
                        margin:"5px 0px",
                        backgroundColor: theme.isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.3)"
                    }}
                >
                    <TwitterIcon style={{fontSize:30 , color:theme.primaryTextColor}}/>
                </IconButton>
                <IconButton 
                    className="social-icon-button"
                    onClick={()=>handleRedirect("https://www.linkedin.com/in/danmark-qui%C3%B1ones-7607601b7/")}
                    style={{
                        margin:"5px 0px",
                        backgroundColor: theme.isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.3)"
                    }}
                >
                    <LinkedInIcon style={{fontSize:30 , color:theme.primaryTextColor}}/>
                </IconButton>
                <IconButton 
                    className="social-icon-button"
                    onClick={()=>handleRedirect("https://github.com/danmarkquinones")}
                    style={{
                        margin:"5px 0px",
                        backgroundColor: theme.isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.3)"
                    }}
                >
                    <GitHubIcon style={{fontSize:30 , color:theme.primaryTextColor}}/>
                </IconButton>
            </div>
            
            <div className="right-side-div">

                <div className='nav-div'>
                    <Routes/>
                </div>

                <div className="content-div">
                    <AnimatePresence>
                        <Switch location={location} key={location.pathname}>
                            <Route exact path="/"> 
                                <Redirect to="/my-projects" />
                            </Route>
                            <Route path="/my-projects">
                                <Projects 
                                    motion={motion} 
                                    pageVariants={pageVariants} 
                                    pageTransition={pageTransition}
                                />
                            </Route>
                            <Route exact path="/profile">
                                <AboutMe 
                                    motion={motion} 
                                    pageVariants={pageVariants} 
                                    pageTransition={pageTransition}
                                />
                            </Route>
                            <Route path="/contact-me">
                                <ContactMe 
                                    motion={motion} 
                                    pageVariants={pageVariants} 
                                    pageTransition={pageTransition}
                                />
                            </Route>
                        </Switch>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
export default Main