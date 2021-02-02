import React , {useContext , useState} from 'react'
import {motion } from 'framer-motion'
import { ThemeContext } from "../context/themeContext";
import AboutIndex from './about-me-child-components/AboutIndex';
import AboutModalComponents from '../shared_components/AboutModalComponents';

const AboutMe = (props) => {

    const {pageVariants, pageTransition} = props
    const [theme] = useContext(ThemeContext)

    const [modalType , setModalType] = useState("")

    const showModal = (type) => {
        setModalType("")
        setTimeout(()=>{
            setModalType(type)
        },500)
    };

    return(
        <motion.div
            initial="initial"
            animate="in"
            exit={{
                // rotate:360,
                // scale:0,
                opacity:0,
                x:1000,
                // y:1000
            }}
            variants={pageVariants}
            transition={pageTransition}
            className="page-container"
        >
            <div className="profile-container">
                <AboutIndex motion={motion} theme={theme} showModal={showModal} modalType={modalType} setModalType={setModalType}/>
                {/* <div style={{position:"absolute" , left:"0%" }}>
                    <AboutModalComponents type={modalType} isModalVisible={isModalVisible} handleCancel={handleCancel}/>
                </div> */}
            </div>
        </motion.div>
    )
}

export default AboutMe