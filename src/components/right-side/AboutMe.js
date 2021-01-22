import React , {useContext , useState} from 'react'
import {motion } from 'framer-motion'
import { ThemeContext } from "../context/themeContext";
import AboutIndex from './about-me-child-components/AboutIndex';
import AboutModalComponents from '../shared_components/AboutModalComponents';

const AboutMe = (props) => {

    const {pageVariants, pageTransition} = props
    const [theme] = useContext(ThemeContext)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalType , setModalType] = useState("")

    const showModal = (type) => {
        setModalType(type)
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
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
                <AboutIndex motion={motion} theme={theme} showModal={showModal}/>
                <div style={{position:"absolute" , left:"0%" }}>
                    <AboutModalComponents type={modalType} isModalVisible={isModalVisible} handleCancel={handleCancel}/>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMe