import React , {useState} from "react";
import { Button, Grid } from '@material-ui/core';
import Profile from './Profile';
import Skills from './Skills';
import {profileData , skillsData , hobbiesData , experienceData} from "../../../helpers/data";
import Hobbies from "./Hobbies";
import { AnimatePresence } from "framer-motion";
import Experience from "./Experience";

const AboutIndex = (props) => {

    const {theme , motion , showModal} = props
    const [profileCards , setProfileCards] = useState([
        {value:"about" , title:"About Me" , gridRow : 8 , expanded:false, height : "240px"},
        {value:"skills" , title:"Skills" , gridRow : 4 ,expanded:false, height : "240px"},
        {value:"hobbies" , title:"Hobbies" , gridRow : 4 ,expanded:false, height : "240px"},
        {value:"experience" , title:"Experiences" , gridRow : 8 ,expanded:false, height : "240px"},
    ]) 

    return(
        <AnimatePresence>
            <Grid container style={{width:"55%"}}>
                {profileCards.map((card,index)=>
                    <Grid key={index} item sm={card.gridRow}>
                        <div style={{padding:"10px"}}>
                            <motion.div
                                initial={{opacity:0}}
                                animate={{opacity:1 }}
                                exit={{opacity:0}}
                                transition={{ 
                                    delay : (index+1)-0.5 , 
                                    duration:1
                                }}
                            >
                                <div
                                    className="profile-card-div"
                                    style={{
                                        backgroundColor:theme.secondaryBackground , 
                                        boxShadow: !theme.isDarkMode && "1px 1px 5px rgba(0,0,0,0.3)",
                                        height:card.height
                                    }}
                                >
                                    <div
                                        style={{
                                            // backgroundColor:"#3578E5",
                                            // padding:card.value==="hobbies" || card.value==="skills" ? "0px" : "2px 10px",
                                        }}
                                    >
                                        <div
                                            className="profile-card-header-title" 
                                            style={{
                                                zIndex:5,
                                                // backgroundColor:theme.secondaryTextColor
                                                // backgroundColor: theme.isDarkMode ? "pink": "#3578E5"
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
                                            {/* {card.component()} */}
                                            {card.value==="about" ? 
                                                <Profile theme={theme} profileData={profileData} showModal={showModal}/>
                                            :card.value==="skills" ?
                                                <Skills theme={theme} skillsData={skillsData}/>
                                            :card.value==="hobbies" ?
                                                <Hobbies theme={theme} hobbiesData={hobbiesData}/>
                                            :<Experience theme={theme} experienceData={experienceData} showModal={showModal}/>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Grid>
                )}
            </Grid>
        </AnimatePresence>
    )
}

export default AboutIndex