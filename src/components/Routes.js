import React from "react";
import {NavLink } from "react-router-dom";
import { Row, Col , Divider } from 'antd';
import { Tabs } from 'antd';
import {Route,Redirect} from "react-router-dom";

export default function Routes(props) {

    const {templateColor} = props
    React.useEffect(()=>{

    },[])

    return (
        <div className='routes-div' centered={true} >
            {/* <Tabs>
                <Tabs.TabPane tab={<Link to="/midorenji">WHO AM I?</Link>} key="midorenji">
                </Tabs.TabPane>
                <Tabs.TabPane tab={<Link to="/projects">MY PROJECTS</Link>} key="projects">
                </Tabs.TabPane>
                <Tabs.TabPane tab={<Link to="/experience">MY EXPERIENCES</Link>} key="experience">
                </Tabs.TabPane>
            </Tabs> */}
            <Row>
                <Col span={8} className='navs-col'>
                    <NavLink className='navs'  to="/midorenji" activeStyle={{color:templateColor.color}} >WHO AM I?</NavLink>
                </Col>
                <Col span={8} className='navs-col'>
                    <NavLink className='navs'  to="/projects" activeStyle={{color:templateColor.color}}>MY PROJECTS</NavLink>
                </Col>
                <Col span={8} className='navs-col'>
                    <NavLink className='navs'  to="/experience" activeStyle={{color:templateColor.color}}>MY EXPERIENCES</NavLink>
                </Col>
            </Row>
        </div>
    );
}

