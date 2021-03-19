import React, { useState } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { motion} from "framer-motion";
import me from "../../images/me.png";
import { Button , Grid } from "@material-ui/core";
import { experienceData } from "../../helpers/data";

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
                            I graduated Bachelor of Science in Mathematics at Polytechnic University of the Philippines. During my college year I already know that math is not for me, so after teaching Math for a year, I decided to shift my career where I can use my degree and pursue my passion in arts.Thats how I become an App Developer.
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
                            <motion.p 
                                className="contentText"
                                variants={textVariants} 
                                initial="initial" 
                                animate="animate" 
                                transition={{delay:0.5 , duration:0.2}}
                            >
                                Front End :
                            </motion.p>
                            <motion.p 
                                className="contentText"
                                variants={textVariants} 
                                initial="initial" 
                                animate="animate" 
                                transition={{delay:0.7 , duration:0.2}}
                            >
                                UI/UX :
                            </motion.p>
                            <motion.p 
                                className="contentText"
                                variants={textVariants} 
                                initial="initial" 
                                animate="animate" 
                                transition={{delay:0.9 , duration:0.2}}
                            >
                                Back End :
                            </motion.p>
                            <motion.p 
                                className="contentText"
                                variants={textVariants} 
                                initial="initial" 
                                animate="animate" 
                                transition={{delay:1.1 , duration:0.2}}
                            >
                                Others :
                            </motion.p>
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
                                Well, actually aside from eating I do like everything related to arts. I use to do portraits using color pencil. I am also an awkward dancer and likes to sing, eventhough the notes doesnt like me back. But most especially I like doing movie marathon during my chill times.
                            </motion.p>
                        </div>
                    </div>
                </div>
            :<div>
                <motion.div variants={headerVariants} initial="initial" animate="animate">
                    <p className="headerText">Companies I work with</p>
                </motion.div>
                
                <div style={{height:"50vh"}}>
                    <Grid container style={{paddingTop:"20px"}}>
                        {experienceData.map((data,i)=>
                            <Grid item sm={6} md={4} key={i} style={{padding:"1%"}}>
                                <div className="card-project-div">
                                    <img src={data.logo} style={{ height:"90%",width:data.companyName==="MSA"?"80%":"auto", textAlign:"center"}}/>
                                    <div className="card-text-content">
                                        <p className="company-name">{data.companyName}</p>
                                        <p>{data.job}</p>
                                        <p>{data.date}</p>
                                    </div>
                                </div>
                            </Grid>
                        )}
                    </Grid>
                </div>

                <div style={{marginTop:"10px"}}>
                    <motion.p 
                        className="contentText"
                        variants={textVariants} 
                        initial="initial" 
                        animate="animate" 
                        transition={{delay:0.5 , duration:0.5}}
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