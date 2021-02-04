import React , {useState , useContext} from "react"
import {motion} from 'framer-motion'
import { ThemeContext } from "../context/themeContext";
import { Grid } from "@material-ui/core";

const ContactMe = (props) => {

    const {pageVariants, pageTransition} = props
    const [theme] = useContext(ThemeContext)

    return(
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="page-container"
        >
            <div
                style={{
                    padding:"20px",
                }}
            >
                <div>
                    <Grid container>
                        <Grid item sm={6}>
                            <div
                                style={{
                                    backgroundColor: theme.secondaryBackground,
                                    borderRadius:"10px",
                                    padding:"10px"
                                }}
                            >
                                <h1>Contact ME</h1>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                
            </div>
        </motion.div>
    )
}

export default ContactMe