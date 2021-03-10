import React , {useContext , useState} from 'react'
import {motion } from 'framer-motion'
import { ThemeContext } from "../context/themeContext";
import AboutIndex from './about-me-child-components/AboutIndex';

const AboutMe = (props) => {

    const {pageVariants, pageTransition} = props
    const [theme] = useContext(ThemeContext)

    const [modalType , setModalType] = useState("")

    const showModal = (type) => {
        setModalType("")
        setTimeout(()=>{
            if(modalType!==type){
                setModalType(type)
            }
        },500)
    };

    return(
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="page-container"
        >
            <div className="profile-container">
                <AboutIndex motion={motion} theme={theme} showModal={showModal} modalType={modalType} setModalType={setModalType}/>
            </div>
        </motion.div>
    )
}

export default AboutMe