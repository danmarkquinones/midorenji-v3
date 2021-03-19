import React , {useState , useEffect} from "react";
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from "@material-ui/core";
import './globalCSS.css';
import AboutMe from "./AboutMe";
import 'hover.css/css/hover.css'
import { motion} from "framer-motion"
import ContactMe from "./ContactMe";


const LandingPage = (props) => {

    const [pageState , setPageState] = useState("")
    const [variants , setVariants] = useState({
        about:{height:"50%" , width:"25%"},
        contact:{height:"50%" , width:"25%"},
        project:{height:"100%" , width:"50%" , top:"0%" , left:"25%"},
        socialIcons:{top:"80%" , left:"0%"}
    })

    useEffect(()=>{
        if(pageState==="about"){
            setVariants({...variants,
                about:{height:"100%",width:"65%"},
                contact:{height:"50%",width:"25%"},
                project:{height:"50%" , width:"30%" , top:"0%" , left:"70%"},
                socialIcons:{top:"0%" , left:"70%"}
            })
        }else if(pageState==="contact"){
            setVariants({...variants,
                about:{height:"50%",width:"25%"},
                contact:{height:"100%",width:"65%"},
                project:{height:"50%" , width:"30%" , top:"50%" , left:"0%"},
                socialIcons:{top:"50%" , left:"0%"}
            })
        }else if(pageState==="project"){
            setVariants({...variants,
                about:{height:"20%",width:"10%"},
                contact:{height:"20%",width:"10%"},
                project:{height:"100%" , width:"80%" , top:"0%" , left:"10%"},
                socialIcons:{top:"50%" , left:"0%"}
            })
        }else{
            setVariants({...variants,
                about:{height:"50%",width:"25%"},
                contact:{height:"50%",width:"25%"},
                project:{height:"100%" , width:"50%" , top:"0%" , left:"25%"},
                socialIcons:{top:"50%" , left:"0%"}
            })
        }
    },[pageState])

    return(
        <div
            className="landing-page-container"
            style={{height:"100vh" , background:"#fff" , position:"relative", overflow:"hidden"}}
        >
            <div 
                style={{
                    position:"absolute" , 
                    height:"50%",
                    width:"30%",
                    top:variants.socialIcons.top,
                    left:variants.socialIcons.left,
                    textAlign: pageState==="about"?"right":"left",
                    transition:"0.5s",
                }}
            >
                <div 
                    style={{
                        display:"flex" , 
                        flexDirection:pageState==="project"?"column":"row" , 
                        justifyContent:pageState==="about"?"flex-end":"flex-start" ,
                        transition:"0.5s",
                        position:"absolute",
                        top:pageState==="about"?"0%" : null,
                        left:pageState==="about"?null : "3%",
                        right:pageState==="about"? "3%" : null,
                        bottom:pageState==="about"? null:"0%",
                        zIndex:1,
                    }}
                >
                    <div className="icons-div hvr-bounce-in"><FacebookIcon className="icons"/></div>
                    <div className="icons-div hvr-bounce-in"><TwitterIcon className="icons"/></div>
                    <div className="icons-div hvr-bounce-in"><GitHubIcon className="icons"/></div>
                    <div className="icons-div hvr-bounce-in"><LinkedInIcon className="icons"/></div>
                </div>
            </div>

            <div
                style={{
                    position:"absolute",
                    top:0,
                    left:0,
                    overflow:"hidden",
                    transition:"0.5s",
                    height:variants.about.height,
                    width:variants.about.width
                }}
            >
                <div
                    style={{
                        background:"#2D3D66",
                        height:"200%",
                        width:"200%",
                        transition:"0.5s",
                        borderRadius:pageState==="about"? "0%": "50%",
                        position:"absolute",
                        top:"-100%",
                        left:"-100%"
                    }}
                    onClick={()=>setPageState("about")}
                >
                </div>
                <div onClick={()=>setPageState("about")}>
                    {pageState==="about"?
                        <div style={{position:"absolute" , top:"0%" , left:"0%" , height:"100%" , padding:"7%"}}>
                            <AboutMe/>
                        </div>
                    :pageState!=="project"?
                        <div className="hoverable-div hvr-bounce-in" style={{position:"absolute" , top:"15%" , left :"10%"}}>  
                            <h2 style={{fontSize:"3vw", color:"#fff"}}>KNOW A BIT <br/> OF ME !</h2>
                        </div>
                    :<div className="hoverable-div hvr-bounce-in" style={{position:"absolute" , top:"15%" , left:"15%"}}>
                        <AccountCircleIcon style={{fontSize:"4.5vw", color:"#fff"}}/>
                    </div>}
                </div>
            </div>

            <div
                style={{
                    position:"absolute",
                    height:variants.project.height,
                    width:variants.project.width,
                    top:variants.project.top,
                    left:variants.project.left,
                    transition:"0.5s",
                }}
            >
                {pageState===""?
                    <div
                        style={{
                            width:"100%",
                            transition:"0.5s",
                            position:"absolute",
                            top:"50%",
                            left:"50%",
                            transform:"translate(-50% , -50%)",
                            textAlign:"center",
                            fontSize:"2vw",
                            lineHeight:1,
                        }}
                    >
                        <h1 style={{color:"#2D3D66"}}>Ow.. Hi there! It's me Dan, and welcome to my profile.</h1>
                        <div className="hvr-bounce-in" style={{width:"100%" , overflow:"hidden"}}>
                            <Button 
                                className="view-works-btn"
                                disableElevation
                                onClick={()=>setPageState("project")}
                            >
                                <span>view my works</span>
                            </Button>  
                        </div>
                    </div>
                :pageState!=="project"?
                    <div 
                        className="hoverable-div hvr-bounce-in"
                        onClick={()=>setPageState("project")}
                        style={{
                            position:"absolute",
                            top:"40%",
                            left:pageState==="contact"?"7%":"32%",
                        }}
                    >
                        <h2 style={{fontSize:"3vw", color:"#2D3D66"}}>MY PROJECTS!</h2>
                    </div>
                :<div>
                    PROJECT CARDS
                </div>
                }
            </div>

            <div
                style={{
                    position:"absolute",
                    bottom:0,
                    right:0,
                    transition:"0.5s",
                    overflow:"hidden",
                    height:variants.contact.height,
                    width:variants.contact.width
                }}
            >
                <div
                    style={{
                        background:"#2D3D66",
                        height:"200%",
                        width:"200%",
                        transition:"0.5s",
                        borderRadius:pageState==="contact"? "0%":"50%",
                    }}
                >
                    
                </div>
                <div onClick={()=>setPageState("contact")}>
                    {pageState==="contact"?
                        <div style={{position:"absolute" , bottom:"0%" , right:"0%" , height:"100%" , padding:"4% 7%"}}>
                            <ContactMe/>
                        </div>
                    :pageState!=="project"?
                        <div className="hoverable-div hvr-bounce-in" style={{position:"absolute" , top:"55%" , left:"35%"}}>  
                            <h2 style={{fontSize:"3vw", color:"#fff"}}>EMAIL ME !</h2>
                        </div>
                    :<div className="hoverable-div hvr-bounce-in" style={{position:"absolute" , top:"40%" , left:"40%"}}>
                        <MailIcon style={{fontSize:"4.5vw", color:"#fff"}}/>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default LandingPage