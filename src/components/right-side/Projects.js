import React from 'react'
import {motion} from 'framer-motion'
import './contentStyles.css'
import {projectData} from '../../helpers/data'
import Slider from 'react-slick'

import ReactPlayer from 'react-player'
import ProjectCards from '../shared_components/ProjectCards'
import { Modal, Button , Row, Col ,Divider} from 'antd';

const Projects = (props) => {

    const {pageVariants, pageTransition} = props

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
    }

    return(
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="page-container"
        >
            <div className="projects-main-div">
                <div className="slider-div">
                    <Slider {...settings} >
                        {projectData.map((project,index)=>
                            <div key={index} >
                                    <div className="card-div">
                                        <ProjectCards project={project}/>
                                    </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects