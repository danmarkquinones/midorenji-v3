import React , {useState , useEffect} from "react"
import {motion} from 'framer-motion'

const ContactMe = (props) => {

    const {pageVariants, pageTransition} = props

    return(
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="page-container"
        >
            <div>
                <h1>Contact ME</h1>
            </div>
        </motion.div>
    )
}

export default ContactMe