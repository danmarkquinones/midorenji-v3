import React, { useState } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { motion} from "framer-motion";
import me from "../../images/me.png";
import { Button , Grid } from "@material-ui/core";
import { experienceData , profileData } from "../../helpers/data";

const AboutMe = (props) => {

    const [step , setStep] = useState(0)
    const headerVariants = {
        initial:{
            opacity:0,
            x:100
        },
        animate:{
            opacity:1,
            x:0
        }
    }
    const textVariants = {
        initial:{opacity:0},
        animate:{opacity:1}
    }

    return(
        <div style={{color:"#fff"}}>
            <img src={me} alt="me" style={{height:"100%" , position:"absolute" , left:0 , opacity:0.1}}/>
            {step===0?
                <div>
                    <motion.div variants={headerVariants} initial="initial" animate="animate">
                        <p className="headerText">Who am I ?</p>
                    </motion.div>
                    <div style={{marginTop:"10px"}}>
                        <motion.p 
                            className="contentText" 
                            variants={textVariants} 
                            initial="initial" 
                            animate="animate" 
                            transition={{delay:0.5 , duration:0.5}}
                        >
                            I’m  Danmark Quinones, you can call me Dan. I am professional Front End developer , UI/UX Designer and a liitle Back End developer in my heart. I specialize in creating React applications that just work across all platforms and browsers. I care about building interfaces that are usable and pleasant for the most number of people possible.
                        </motion.p>
                        <motion.p 
                            className="contentText" 
                            style={{marginTop:"25px"}} 
                            variants={textVariants} 
                            initial="initial" 
                            animate="animate" 
                            transition={{delay:1 , duration:0.5}}
                        >
                            Graduate of Bachelor of Science in Mathematics at Polytechnic University of the Philippines. Teaching math for a year had me realize that something is missing and my passion for arts is fading. So I decided to change my career where I can use my degree and pursue my passion at the same time. Thats how I become an App Developer.
                        </motion.p>
                    </div>
                </div>
            :step===1?
                <div>
                    <div>
                        <motion.div variants={headerVariants} initial="initial" animate="animate">
                            <p className="headerText">My skill set</p>
                        </motion.div>
                        <div style={{marginTop:"10px"}}>
                            <motion.div 
                                className="contentText"
                                variants={textVariants} 
                                initial="initial" 
                                animate="animate" 
                                transition={{delay:0.5 , duration:0.2}}
                                style={{display:"flex"}}
                            >
                                <div style={{ width:"22%"}}><span >Front End : </span> </div>
                                <span>{profileData.skillsFE.join(" , ")}</span>
                            </motion.div>
                            <motion.div 
                                className="contentText"
                                variants={textVariants} 
                                initial="initial" 
                                animate="animate" 
                                transition={{delay:0.7 , duration:0.2}}
                                style={{display:"flex"}}
                            >
                                <div style={{ width:"22%"}}><span >UI/UX : </span> </div>
                                <span>{profileData.skillsUI.join(" , ")}</span>
                            </motion.div>
                            <motion.div 
                                className="contentText"
                                variants={textVariants} 
                                initial="initial" 
                                animate="animate" 
                                transition={{delay:0.9 , duration:0.2}}
                                style={{display:"flex"}}
                            >
                                <div style={{ width:"22%"}}><span >Back end : </span> </div>
                                <span>{profileData.skillsBE.join(" , ")}</span>
                            </motion.div>
                            <motion.div 
                                className="contentText"
                                variants={textVariants} 
                                initial="initial" 
                                animate="animate" 
                                transition={{delay:1.1 , duration:0.2}}
                                style={{display:"flex"}}
                            >
                                <div style={{ width:"22%"}}><span >Version Control : </span> </div>
                                <span>GIT</span>
                            </motion.div>
                            <motion.div 
                                className="contentText"
                                variants={textVariants} 
                                initial="initial" 
                                animate="animate" 
                                transition={{delay:1.3 , duration:0.2}}
                                style={{display:"flex"}}
                            >
                                <div style={{ width:"22%"}}><span >Others : </span> </div>
                                <span>{profileData.designingLibraries.join(" , ")}</span>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <motion.div variants={headerVariants} initial="initial" animate="animate" transition={{delay:1.3 , duration:0.5}}>
                            <p className="headerText">My Hobbies</p>
                        </motion.div>
                        <div style={{marginTop:"10px"}}>
                            <motion.p 
                                className="contentText"
                                variants={textVariants} 
                                initial="initial" 
                                animate="animate" 
                                transition={{delay:1.8 , duration:0.5}}
                            >
                                Aside from eating I like everything related to arts. I used to make portraits using color pencils. I'm also an awkward dancer and likes to sing, eventhough notes doesnt like me back. But most especially I love doing movie marathon during my chill times.
                            </motion.p>
                        </div>
                    </div>
                </div>
            :<div>
                <motion.div variants={headerVariants} initial="initial" animate="animate">
                    <p className="headerText">Companies I work with</p>
                </motion.div>
                
                <div style={{height:"50vh" , display:"flex" , alignItems:"center"}}>
                    <Grid container >
                        {experienceData.map((data,i)=>
                            <Grid item sm={6} md={4} key={i} style={{padding:"1%"}}>
                                <motion.div 
                                    initial="initial" animate="animate"
                                    variants={textVariants}
                                    transition={{delay:data.delay}}
                                    className="card-project-div"
                                >
                                    <img src={data.logo} style={{ height:"90%",width:data.companyName==="MSA"?"80%":"auto", textAlign:"center"}}/>
                                    <div className="card-text-content">
                                        <p className="company-name">{data.companyName}</p>
                                        <p>{data.job}</p>
                                        <p>{data.date}</p>
                                    </div>
                                </motion.div>
                            </Grid>
                        )}
                    </Grid>
                </div>

                <div style={{marginTop:"10px"}}>
                    <motion.p 
                        className="contentText"
                        variants={headerVariants} 
                        initial="initial" 
                        animate="animate" 
                        transition={{delay:2}}
                    >
                        You can view or download my CV for more details about my roles and responsibilities in my previous employer.
                    </motion.p>
                </div>
            </div>
            }

            <div style={{position:"absolute" , bottom:"5%" , display:"flex" , width:"85%"}}>
                {step!==0?
                    <div style={{position:"absolute" , left:0 , bottom:0}}>
                        <Button
                            onClick={()=>setStep(step-1)}
                            className="stepBtn"
                            style={{display:"flex" , alignItems:"center"}}
                        >
                            <ArrowBackIosIcon className="backward-icon"/>
                            {step===1?"Who am I ?":"Skills & Hobbies"}
                        </Button>
                    </div>
                :null}
                {step!==2?
                    <div style={{position:"absolute" , right:0 , bottom:0}}>
                        <Button
                            onClick={()=>setStep(step+1)}
                            className="stepBtn"
                            style={{display:"flex" , alignItems:"center"}}
                        >
                            {step===0?"Skills & Hobbies":"My Experience"}
                            <ArrowForwardIosIcon className="forward-icon"/>
                        </Button>
                    </div>
                :null}
            </div>
        </div>
    )
}

export default AboutMe