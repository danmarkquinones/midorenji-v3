import React , {useState , useEffect} from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./LandingPage";
import {Route, Switch, Redirect ,useLocation, useHistory} from "react-router-dom";
import { loaderAnimation } from "./framerMotionAnimations";
import {withRouter} from 'react-router'
import { Button } from "@material-ui/core";

const Loader = () => (

    <motion.div
        key="/loading"
        exit={{opacity:0 ,  transition:{ease:"easeInOut"}}}
        style={{background:"#2D3D66" , overflow:"hidden", height:"100vh" , width:"100vw"}}
    >
        <div style={{ height:"100%" , width:"100%" ,display:"flex" , alignItems:"center" , overflow:"hidden", justifyContent:"center"}}>
        <motion.div
          variants={loaderAnimation}
          animate="animationOne"
          exit={{x:-250,y:-200 , scale:5}}
          style={{
            height:"20vh",
            width:"20vh",
            background:"#fff" , 
            borderRadius:"50%",
            margin:"0vh 2.5vh"
          }}
        />
        <motion.div
          variants={loaderAnimation}
          animate="animationTwo"
          exit={{scale:5}}
          style={{
            height:"20vh",
            width:"20vh",
            background:"#fff" , 
            borderRadius:"50%",
            margin:"0vh 2.5vh"
          }}
        />
        <motion.div
          variants={loaderAnimation}
          animate="animationThree"
          exit={{x:250,y:200, scale:5}}
          style={{
            height:"20vh",
            width:"20vh",
            background:"#fff" , 
            borderRadius:"50%",
            margin:"0vh 2.5vh"
          }}
        />
        </div>
    </motion.div>
  )

const Main = (props) => {
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        setTimeout(()=>{
            history.push("/profile")
        },3000)
    }, [])

    return(
        <AnimatePresence 
            exitBeforeEnter
        >
            <Switch 
                location={location} 
                key={location.pathname}
            >
                <Route exact path="/">
                    <motion.div exit={{opacity:0}}>
                        <Redirect to="/loading"/>
                    </motion.div>
                </Route>
                <Route path="/loading">
                    <Loader/>
                </Route>
                <Route path="/profile">
                    <LandingPage/>
                </Route>
            </Switch>
        </AnimatePresence>
    )
}

export default withRouter(Main)