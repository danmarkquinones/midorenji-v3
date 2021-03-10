import React , {useContext, useState , useEffect} from 'react';
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
import GitHubIcon from '@material-ui/icons/GitHub';
import { ThemeContext } from "./context/themeContext";
import 'aos/dist/aos.css';


const Main = (props) => {
    
    const location = useLocation()
    const [theme,setTheme] = useContext(ThemeContext)
    const [navBar , setNavbar] = useState(false)
    const [watermark,setWatermark] = useState("")

    // AOS.init()

    useEffect(()=>{
        console.log(location.pathname)
        if(location.pathname==="/profile"){
            setWatermark("ABOUT MYSELF")
        }else if(location.pathname==="/my-projects"){
            setWatermark("MY PROJECTS")
        }else{
            setWatermark("CONNECT WITH ME")
        }
    },[location])

    const pageVariants = {
        initial:{
            opacity:0,
        },
        in:{
            opacity:1,
        },
        out:{
            opacity:0,
        }
    }

    const pageTransition = {duration:0.5}

    const changeNavBarBackground = (event) => {
        if(event.target.scrollTop >= 100){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

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
                        background: "rgb(244,59,98)",
                        background: "linear-gradient(-315deg, rgba(244,59,98,1) 0%, rgba(53,120,229,1) 50%, rgba(0,212,255,1) 100%)",
                    }}
                >
                    <FacebookIcon style={{fontSize:"30px", transform:"scale(1.2)" , color:theme.secondaryBackground}}/>
                </IconButton>
                <IconButton
                    className="social-icon-button"
                    onClick={()=>handleRedirect("https://twitter.com/hidnlmrks")}
                    style={{
                        margin:"5px 0px",
                        background: "rgb(244,59,98)",
                        background: "linear-gradient(-315deg, rgba(244,59,98,1) 0%, rgba(53,120,229,1) 50%, rgba(0,212,255,1) 100%)",
                    }}
                >
                    <TwitterIcon style={{fontSize:"30px", transform:"scale(1.2)" , color:theme.secondaryBackground}}/>
                </IconButton>
                <IconButton 
                    className="social-icon-button"
                    onClick={()=>handleRedirect("https://www.linkedin.com/in/danmark-qui%C3%B1ones-7607601b7/")}
                    style={{
                        margin:"5px 0px",
                        background: "rgb(244,59,98)",
                        background: "linear-gradient(-315deg, rgba(244,59,98,1) 0%, rgba(53,120,229,1) 50%, rgba(0,212,255,1) 100%)",
                    }}
                >
                    <LinkedInIcon style={{fontSize:"30px", transform:"scale(1.2)" , color:theme.secondaryBackground}}/>
                </IconButton>
                <IconButton 
                    className="social-icon-button"
                    onClick={()=>handleRedirect("https://github.com/danmarkquinones")}
                    style={{
                        margin:"5px 0px",
                        background: "rgb(244,59,98)",
                        background: "linear-gradient(-315deg, rgba(244,59,98,1) 0%, rgba(53,120,229,1) 50%, rgba(0,212,255,1) 100%)",
                    }}
                >
                    <GitHubIcon style={{fontSize:"30px", transform:"scale(1.2)" , color:theme.secondaryBackground}}/>
                </IconButton>
            </div>

            <div className="right-side-div" onScroll={changeNavBarBackground}>
                
                <div style={{position:"absolute" , height:"70%" , width:"80%" , marginTop:"100px", opacity:"0.05" , overflow:"hidden" }}>
                    <h1 style={{fontSize:"250px" , color:theme.primaryTextColor , fontWeight:"bold" , lineHeight:"200px"}}>{watermark}</h1>
                </div>

                <div 
                    className='nav-div'
                    style={{
                        background:navBar?theme.secondaryBackground:"transparent",
                        boxShadow:navBar?"0px 0px 10px gray":"none",
                        transition:"0.5s",
                        paddingLeft:"35px"
                    }}
                >
                    <Routes/>
                </div>

                <div className="content-div">
                    <AnimatePresence exitBeforeEnter>
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