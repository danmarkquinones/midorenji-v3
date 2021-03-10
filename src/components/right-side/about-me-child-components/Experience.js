import { IconButton, Grid } from "@material-ui/core"
import React from "react"
import bg from '../../../images/experiencebg.png'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Experience = (props) => {

    const {theme , experienceData , showModal} = props
    
    return(
        <div 
            style={{
                padding:"50px 0px 0px 0px" , 
                height:"240px" , 
                width:"100%",
                backgroundImage:`url(${bg})`,
                backgroundSize:"cover",
                backgroundPosition:"bottom"
            }}
        >
            <div style={{ width: "100%", height: "100%" }}>
                {experienceData.filter((el,i)=>i===0).map((exp,index)=>
                    <Grid container>
                        <Grid item sm={6} className="exp-left-side">
                            <div
                                style={{
                                    color:theme.primaryTextColor,
                                }}
                            >
                                <h2
                                    style={{
                                        // color:theme.primaryTextColor,
                                        color:"#f43b62",
                                        fontWeight:"bold",
                                    }}
                                >{exp.companyName}</h2>

                                <p >{exp.date}</p>
                                <p style={{fontWeight:600}}>{exp.job}</p>
                                <IconButton
                                    onClick={()=>showModal("experience")}
                                    style={{
                                        background: "rgb(244,59,98)",
                                        background: "linear-gradient(-315deg, rgba(244,59,98,1) 0%, rgba(53,120,229,1) 50%, rgba(0,212,255,1) 100%)",
                                        marginTop:"10px" , height:"35px" , width:"35px"
                                    }}
                                >
                                    <DoubleArrowIcon style={{fontSize:"15px" , color : theme.secondaryBackground}}/>
                                </IconButton>
                            </div>
                        </Grid>
                        <Grid item sm={6} style={{textAlign:"center"}}>
                            <div 
                                className="exp-right-side"
                                style={{
                                    backgroundColor:theme.secondaryBackground,
                                    border : `5px solid ${theme.secondaryBackground}`
                                }}
                            >
                                <img src={exp.logo} alt="logo"/>
                            </div>
                        </Grid>
                    </Grid>
                )}
            </div>
        </div>
    )
}

export default Experience