import React from 'react'
import {experienceData} from '../../helpers/data'
import { fadeInLeft } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import { Divider } from 'antd';


const styles = {
    fadeInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    }
}


const Projects = (props) => {

    const {templateColor} = props

    return(
        <StyleRoot>
            <div style={styles.fadeInLeft}>
                <div style={{textAlign:'center' , marginTop:'15px'}}>
                    <h3 style={{color:templateColor.color , fontWeight:'bold' , fontSize:'20px'}}>SO YOU WANT TO SEE MY EXPERIENCE. ✌️😁</h3>
                    <h4 style={{fontSize:'18px'}}><span>You can also download my CV by clicking this </span> <a href="" download>link</a> . </h4>
                </div>
                <div className = 'project-divs-height-scroll'>
                    {experienceData.map((el,i)=>
                        <div key={i} >
                            <Divider orientation='left' style={{color:templateColor.color}}>{el.companyName}</Divider>
                            <div className ='project-divs'>
                                <p>{el.job} ( <small>{el.date}</small> )</p>
                                
                                <ul>
                                    {el.responsibilities.map((res,index)=>
                                        <li key={index}>{res}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </StyleRoot>
    )
}

export default Projects