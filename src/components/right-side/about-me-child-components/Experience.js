import { Button, Grid } from "@material-ui/core"
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
                                    color:theme.primaryTextColor
                                }}
                            >
                                <h2
                                    style={{
                                        color:theme.primaryTextColor,
                                        fontWeight:"bold",
                                    }}
                                >{exp.companyName}</h2>

                                <p >{exp.date}</p>
                                <p style={{fontWeight:600}}>{exp.job}</p>
                            </div>
                            <div style={{marginTop : "15px"}}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    disableElevation
                                    style={{
                                        border:"none",
                                        backgroundColor:"#3578E5",
                                        color:"#fff",
                                        borderRadius:"100px",
                                    }}
                                    onClick={()=>showModal("experience")}
                                >
                                    <div
                                        style={{display:"flex" , alignItems:"center" , fontSize:"10px" ,color:"#fff"}}
                                    >
                                        <span style={{lineHeight:"20px"}}>READ MORE</span> 
                                        <DoubleArrowIcon style={{marginLeft:"3px" , marginBottom:"2px", fontSize:"10px"}}/>
                                    </div>
                                </Button>
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