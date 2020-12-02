import React from 'react'
import { Row, Col ,Divider} from 'antd';
import {profileData} from '../../helpers/data'
import { fadeInLeft } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    }
}

const AboutMe = (props) => {

    const {templateColor} = props

    return(
        <StyleRoot>
            <div style={styles.fadeInLeft} >
                <div style={{textAlign:'center' , marginTop:'15px'}}>
                    <h3 style={{color:templateColor.color , fontWeight:'bold' , fontSize:'20px'}}>YOSH!!! WELCOME TO MY PAGE 👋😁</h3>
                    <h4 style={{fontSize:'18px'}}>I'm {profileData.fullName} , you can call me {profileData.nickName}. </h4>
                </div>

                <Divider orientation='left' style={{color:templateColor.color}}>Profile</Divider>
                <div className='about-divs'>
                    <Row>
                        <Col span={12}><p><span className='pf-key'>Email : </span><span>{profileData.email}</span></p></Col>
                        <Col span={12}><p><span className='pf-key'>Contact Number : </span><span>{profileData.contact}</span></p></Col>
                        <Col span={12}><p><span className='pf-key'>Location : </span><span>{profileData.location}</span></p></Col>
                        <Col span={12}><p><span className='pf-key'>Age : </span><span>{profileData.age}</span></p></Col>
                        {/* <Col span={24}><p><span className='pf-key'>Motto : </span><span>{profileData.motto}</span></p></Col> */}
                    </Row>
                </div>
                <Divider orientation='left' style={{color:templateColor.color}}>Skills</Divider>
                <div className='about-divs'>
                    <Row>
                        <Col span={24}><p><span className='pf-key'>Front End : </span><span>{profileData.skillsFE.join(' | ')}</span></p></Col>
                        <Col span={24}><p><span className='pf-key'>Back End : </span><span>{profileData.skillsBE.join(' | ')}</span></p></Col>
                        <Col span={24}><p><span className='pf-key'>Others : </span><span>{profileData.designingLib.join(' | ')}</span></p></Col>
                    </Row>
                </div>
                <Divider orientation='left' style={{color:templateColor.color}}>Hobbies</Divider>
                <div className='about-divs'>
                    <Row>
                        <Col span={24}><p><span>{profileData.hobbies.join(' | ')}</span></p></Col>
                    </Row>
                </div>
            </div>
        </StyleRoot>
    )
}

export default AboutMe