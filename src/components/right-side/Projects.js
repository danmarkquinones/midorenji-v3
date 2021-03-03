import React , {useContext} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import './contentStyles.css'
import {projectData} from '../../helpers/data'
import Slider from 'react-slick'
import { ThemeContext } from "../context/themeContext";
import ReactPlayer from 'react-player'
import ProjectCards from '../shared_components/ProjectCards'
import { Grid } from '@material-ui/core';

const Projects = (props) => {

    const {pageVariants, pageTransition} = props
    const [theme] = useContext(ThemeContext)

    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 1000,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    // }

    return(
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="page-container"
        >
            <div 
                className="projects-main-div"
                style={{
                    display:"flex",
                }}
            >
                <AnimatePresence>
                    <div className="slider-div">
                        {/* <Slider {...settings} >
                            {projectData.map((project,index)=>
                                <motion.div 
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    exit={{opacity:0}}
                                    transition={{delay : (index+1) , duration:1}}
                                    key={index} 
                                >
                                        <div className="card-div">
                                            <ProjectCards project={project} index={index} theme={theme}/>
                                        </div>
                                </motion.div>
                            )}
                        </Slider> */}
                        <Grid container>
                            {projectData.map((project,index)=>
                                <Grid item sm={12} md={4} key={index} style={{margin:"40px 0px"}}>
                                    <motion.div 
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        exit={{opacity:0}}
                                        transition={{
                                            delay : [0,1,2].includes(index)? 1 
                                                    : [3,4,5].includes(index) ? 2 
                                                    :3, 
                                            duration:1
                                        }}
                                    >
                                            <div className="card-div">
                                                <ProjectCards project={project} index={index} theme={theme}/>
                                            </div>
                                    </motion.div>
                                </Grid>
                            )}
                        </Grid>
                    </div>
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default Projects