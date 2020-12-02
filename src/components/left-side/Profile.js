import React from 'react'
import { makeStyles } from '@material-ui/styles';
import profilePic from '../../images/profile.jpg'
import {skillsHighlightsData , contactsData} from '../../helpers/data'
import { Row, Col ,Divider} from 'antd';
import { IconButton, Tooltip } from '@material-ui/core';

const useStyles = makeStyles({
    contactIcon: {
        color:"rgba(0,0,0,0.85)",
        fontSize: '25px !important',
        "&:hover": {
            color: ({templateColor}) => templateColor.color
        }
    },
});


const Profile = (props) => {
    const {headerUrl, setHeaderURL , templateColor , setTemplateColor} = props
    const [skills , setSkills] = React.useState(skillsHighlightsData)
    const classes = useStyles({templateColor});

    const handleChangeHeaderBG = (data) => {
        let skillsCopy = Object.assign(skills)
        skills.forEach(el=>{
            if(el.value === data.value){
                el.active=true
            }else{
                el.active=false
            }
        })
        setSkills(skillsCopy)
        setHeaderURL(`../${data.url}`)
        setTemplateColor({...templateColor , color:data.color})
    }

    const handleEmail = (name) => {
        if(name==="phone"){
            window.open('tel:123123123', '_self');
        }else if(name==="email"){
            // window.open('mailto:danmarkquinones@gmail.com?subject=test&body=hello');
            // ways to email me
        }else if(name==="facebook"){
            window.open('https://www.facebook.com/itzmedanmark')
        }else if(name==="github"){
            window.open('https://github.com/danmarkquinones')
        }else{
            //use Filesaver.js
        }
    }
        

    return(
        <div>
            <div className='profile-header' style={{borderBottom:`5px solid ${templateColor.color}`}}>
                <img src={headerUrl} style={{ width:'100%'}} alt='header'/>
                <div className='profile-pic-div' style={{border:`5px solid ${templateColor.color}`}}>
                    <img className='profile-pic' src={profilePic} style={{ width:'100%'}} alt='profile'/>
                </div>
            </div>
            <div className='profile-body'>
                <p className='profile-name'>Midorenji</p>
                <p style={{color:templateColor.color}} className='profile-title'>Front End Developer</p>
                <Divider orientation='left' >Skills Highlights</Divider>
                <Row style={{padding:'0px 20px'}}>  
                    {skills.map((el,i)=>
                        <Col key={i} span={6} onClick={()=>{handleChangeHeaderBG(el)}}>
                            <div className='skill-logo-col'>
                                <img style={{transform:el.active?'scale(1.2)':'scale(0.9)'}} src={`../${el.icon}`} alt={el.name}/>
                            </div>
                        </Col>
                    )}
                </Row>
                <Divider orientation='left' >Contacts</Divider>
                <div>
                    {contactsData.map((el,i)=>
                        <Tooltip key={i} title={el.tooltip} placement="top" arrow>
                            <IconButton
                                // className={classes.contactIcon}
                                onClick={()=>handleEmail(el.name)}
                                children={
                                    el.component(classes.contactIcon)
                                }
                            />
                        </Tooltip>
                    )}
                </div>
                {/* <a href="tel://+639065092731">Call Me</a> */}
                {/* <a href="../../images/angular.png" download> download</a> */}
            </div>
        </div>
    )
}

export default Profile