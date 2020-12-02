import React from 'react'
import {projectData} from '../../helpers/data'
import ReactPlayer from 'react-player'
import ProjectCards from '../shared_components/ProjectCards'
import { Modal, Button , Row, Col ,Divider} from 'antd';
import { fadeInLeft } from 'react-animations'
import Radium, {StyleRoot} from 'radium';


const styles = {
    fadeInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    cards:{
        transform:'scale(1)',
        transition:'0.5s',
        marginTop:'16px',
        '&:hover':{
            transform:'scale(1.2)',
            transition:'0.5s'
        }
    }
}


const Projects = (props) => {

    const {templateColor} = props

    const [videoModal , setVideoModal] = React.useState({
        open : false ,
        data : ''
    })

    const handleOpenVideo = (data) => {
        setVideoModal({...videoModal , open : true , data : data})
    }

    const handleCloseVideo = () => {
        setVideoModal({...videoModal , open : false , data : ''})
    }

    const handleVisit = (name , data) => {
        if(name==='code'){
            window.open(data.srcCode, "_blank")
        }else{
            window.open(data.url, "_blank")
        }
    }


    return(
        <StyleRoot>
            <div style={styles.fadeInLeft}>
                <div style={{textAlign:'center' , marginTop:'15px'}}>
                    <h3 style={{color:templateColor.color , fontWeight:'bold' , fontSize:'20px'}}>FEEL FREE TO VIEW MY WORKS 😉👍</h3>
                    <h4 style={{fontSize:'18px'}}><span>But remember not all source code are for public.</span> </h4>
                </div>

                <div className = 'project-divs-height-scroll'>

                    <Divider orientation='left' style={{color:templateColor.color}}>Company Projects</Divider>

                    <Row container gutter={16} className ='project-divs'>
                        {projectData.filter(el=>el.type==='cp').map((el,i)=>
                            <Col item span={12} key={i}>
                                <ProjectCards 
                                    data={el} 
                                    handleOpenVideo={handleOpenVideo}
                                    handleVisit={handleVisit}
                                    templateColor={templateColor}
                                />
                            </Col>
                        )}
                    </Row>

                    <Divider orientation='left' style={{color:templateColor.color}}>Other Projects</Divider>

                    <Row container gutter={16} className ='project-divs'>
                        {projectData.filter(el=>el.type==='other').map((el,i)=>
                            <Col item span={12} key={i} style={{marginTop:'16px'}}>
                                <ProjectCards 
                                    data={el} 
                                    handleOpenVideo={handleOpenVideo} 
                                    handleVisit={handleVisit}
                                    templateColor={templateColor}
                                />
                            </Col>
                        )}
                    </Row>
                </div>

                <Modal
                    visible={videoModal.open}
                    title={videoModal.data.name}
                    className='projectModal'
                    onCancel={handleCloseVideo}
                    footer={[
                        <Button key="visit" onClick={()=>handleVisit("web",videoModal.data)}> Go to Website </Button>,
                        <Button key="view" disabled={!videoModal.data.viewSrc} onClick={()=>handleVisit("code",videoModal.data)}> View Source Code </Button>
                    ]}
                    >
                    <div style = {{height : '300px'}}>
                        <ReactPlayer url={videoModal.data.videoLink} controls height='100%' width='100%'/>
                    </div>
                    
                </Modal>
            </div>
        </StyleRoot>
    )
}

export default Projects