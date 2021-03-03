import React , {useState} from "react";
import { Grid , IconButton} from '@material-ui/core';
import Profile from './Profile';
import Skills from './Skills';
import {profileData , skillsData , hobbiesData , experienceData} from "../../../helpers/data";
import Hobbies from "./Hobbies";
import { AnimatePresence } from "framer-motion";
import Experience from "./Experience";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ExpandProfile from "./ExpandProfile";
import ExpandExperience from "./ExpandExperience";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const AboutIndex = (props) => {

    const {theme , motion , showModal , modalType , setModalType} = props

    const [profileCards , setProfileCards] = useState([
        {value:"profile" , title:"About Me" , gridRow : 8 , expanded:false, height : "240px"},
        {value:"skills" , title:"Skill Set" , gridRow : 4 ,expanded:false, height : "240px"},
        {value:"hobbies" , title:"Hobbies" , gridRow : 4 ,expanded:false, height : "240px"},
        {value:"experience" , title:"Experiences" , gridRow : 8 ,expanded:false, height : "240px"},
    ]) 

    const variants = {
        open: { 
            opacity:1 ,
            height:"100%"
        },
        close: { 
            opacity:0,
            height:0
         }
    };

    return(
        <AnimatePresence>
            <Grid container style={{padding:"0px 20px"}}>
                <Grid container item sm={7}>
                    {profileCards.map((card,index)=>
                        <Grid key={index} item sm={card.gridRow}>
                            <div style={{padding:"10px"}}>
                                <motion.div
                                    initial={{opacity:0}}
                                    animate={{opacity:1 }}
                                    exit={{opacity:0}}
                                    transition={{ 
                                        delay : (index+1)-(0.5*index) , 
                                        duration:1
                                    }}
                                >
                                    <div
                                        className="profile-card-div"
                                        style={{
                                            backgroundColor:theme.secondaryBackground , 
                                            boxShadow: !theme.isDarkMode && "1px 1px 5px rgba(0,0,0,0.3)",
                                        }}
                                    >
                                        <div>
                                            <div
                                                className="profile-card-header-title" 
                                                style={{
                                                    zIndex:5,
                                                    backgroundColor:"#3578E5"
                                                }}
                                            >
                                                <h2 
                                                    style={{
                                                        fontWeight:"bold", 
                                                        color:theme.primaryBackground
                                                    }}
                                                >
                                                    {card.title}
                                                </h2>
                                            </div>
                                            <div>
                                                {card.value==="profile" ? 
                                                    <Profile theme={theme} profileData={profileData} showModal={showModal}/>
                                                :card.value==="skills" ?
                                                    <Skills theme={theme} skillsData={skillsData}/>
                                                :card.value==="hobbies" ?
                                                    <Hobbies theme={theme} hobbiesData={hobbiesData}/>
                                                :<Experience theme={theme} experienceData={experienceData} showModal={showModal}/>
                                                }
                                            </div>

                                            {card.value==="profile" || card.value==="experience"?
                                                <div
                                                    className="profile-card-footer-title" 
                                                    style={{
                                                        zIndex:5,
                                                        backgroundColor:"#3578E5"
                                                    }}
                                                >
                                                    <IconButton
                                                        onClick={()=>showModal(card.value)}
                                                    >
                                                        <DoubleArrowIcon style={{fontSize:"15px" , color : theme.secondaryBackground}}/>
                                                    </IconButton>
                                                    
                                                </div>
                                            :null}

                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </Grid>
                    )}
                </Grid>
                <Grid item sm={5} style={{padding:"10px"}}>
                    <motion.div
                        variants={variants}
                        animate={modalType==="" ? 'close' : 'open'}
                        transition={{
                            duration:0.5
                        }}
                        style={{
                            borderRadius:"10px",
                            backgroundColor:theme.secondaryBackground , 
                            boxShadow: !theme.isDarkMode && "1px 1px 5px rgba(0,0,0,0.3)",
                            overflow:"hidden"
                        }}
                    >   
                        <div>
                            <div 
                                style={{ 
                                    backgroundColor:"#3578E5",
                                    display:"flex" , 
                                    flexDirection:"row" , 
                                    alignItems:"center" , 
                                    padding:"5px 10px"
                                }}
                            >
                                <div style={{flex:1 , marginLeft:"10px"}}>
                                    <h2
                                        style={{
                                            fontWeight:"bold", 
                                            color:theme.primaryBackground,
                                            margin:0
                                        }}
                                    >
                                        {modalType==="profile"? "Know more about me." 
                                        :modalType==="experience"? " My Work Experiences" 
                                        : null}
                                    </h2>
                                </div>
                                <div style={{flex:1 , textAlign:"right"}}>
                                    <IconButton onClick={()=>setModalType("")}>
                                        <HighlightOffIcon
                                            style={{color:theme.primaryBackground}}
                                        />
                                    </IconButton>
                                </div>
                            </div>

                            <div
                                style={{
                                    height:"440px",
                                    overflow:"auto",
                                    // padding:"10px 20px",
                                    background:theme.primaryBackground
                                }}
                            >
                                {modalType==="profile"?
                                    <ExpandProfile theme={theme}/>
                                :modalType==="experience"?
                                    <ExpandExperience theme={theme}/>
                                :null}

                            </div>
                        </div>
                    </motion.div>
                </Grid>
            </Grid>
        </AnimatePresence>
    )
}

export default AboutIndex