import React from 'react';
import '../styles/MainStyles.css'
import { Row, Col  } from 'antd';
import {Switch,Route,Redirect} from "react-router-dom";
import Routes from './Routes'
import AboutMe from './right-side/AboutMe';
import Projects from './right-side/Projects';
import Works from './right-side/Works';
import Profile from './left-side/Profile';
import reactjs from '../images/reactjsplain.gif'



const Main = (props) => {
    
    const [headerUrl,setHeaderURL] = React.useState(reactjs)
    const [templateColor , setTemplateColor] = React.useState({
        color:'#0270b8',
        backGroundColor :''
    })

    return(
        <div 
            className='main-div' 
            style={{
                backgroundImage:`url(${headerUrl})` , 
                // background:`linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${headerUrl}))`,
                backgroundPosition:'center'
            }}
        >
            <div className='pf-main-body'>
                <Row>
                    <Col span={24} className='pf-body-portion'>
                        <Routes headerUrl={headerUrl} templateColor={templateColor}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} className='pf-body-portion-left'>
                        <Profile headerUrl={headerUrl} setHeaderURL={setHeaderURL} templateColor={templateColor} setTemplateColor={setTemplateColor}/>
                    </Col>
                    <Col span={16}>
                        <div className='pf-body-portion-right'>
                            <Switch>
                                <Route exact path="/"> 
                                    <Redirect to="/midorenji-v3/profile" />
                                </Route>
                                <Route exact path="/midorenji-v3/profile">
                                    <AboutMe templateColor={templateColor}/>
                                </Route>
                                <Route path="/midorenji-v3/projects">
                                    <Projects templateColor={templateColor}/>
                                </Route>
                                <Route path="/midorenji-v3/experience">
                                    <Works templateColor={templateColor}/>
                                </Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Main