import React from 'react';
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

const pageVariants = {
    initial:{
        opacity:0,
        x:"-100vh",
        scale:0.5
    },
    in:{
        opacity:1,
        x:"0",
        scale:1
    },
    out:{
        opacity:0,
        x:"100vh",
        scale:0.5
    }
}

const pageTransition = {
    // type:"tween",
    // ease:"anticipate",
    duration :"1"
}

const Main = (props) => {
    
    const location = useLocation()
    
    return(
        <div className='main-div' >

            <div className="social-icon-div">
                <IconButton>
                    <FacebookIcon style={{fontSize:35}}/>
                </IconButton>
                <IconButton>
                    <TwitterIcon style={{fontSize:35}}/>
                </IconButton>
                <IconButton>
                    <LinkedInIcon style={{fontSize:35}}/>
                </IconButton>
                <IconButton>
                    <MailIcon style={{fontSize:35}}/>
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
                            <Route exact path="/about-me">
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