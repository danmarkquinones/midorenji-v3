import React , {useContext} from 'react'
import {motion} from 'framer-motion'
import './contentStyles.css'
import {projectData} from '../../helpers/data'
import Slider from 'react-slick'
import { ThemeContext } from "../context/themeContext";
import ReactPlayer from 'react-player'
import ProjectCards from '../shared_components/ProjectCards'
import { Modal, Button , Row, Col ,Divider} from 'antd';

const Projects = (props) => {

    const {pageVariants, pageTransition} = props
    const [theme] = useContext(ThemeContext)

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
    }

    const variants = {
        initial:{
            width:1,
            opacity:0
        },
        in:{
            width:"100%",
            opacity:1
        },
        out:{
            width:1,
            opacity:0
        }
    }

    return(
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={variants}
            transition={pageTransition}
            className="page-container"
        >
            <div 
                className="projects-main-div"
                style={{
                    backgroundColor: theme.isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
                }}
            >
                <div className="slider-div">
                    <Slider {...settings} >
                        {projectData.map((project,index)=>
                            <motion.div 
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{delay : (index+1)-0.9 , duration:1}}
                                key={index} 
                            >
                                    <div className="card-div">
                                        <ProjectCards project={project} theme={theme}/>
                                    </div>
                            </motion.div>
                        )}
                    </Slider>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects