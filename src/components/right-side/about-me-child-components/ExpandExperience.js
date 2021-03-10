import { Grid } from "@material-ui/core";
import React from "react";
import { experienceData } from "../../../helpers/data";
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const ExpandExperience = (props) => {
    const {theme} =props

    return(
        <div >
            {experienceData.map((work,index)=>
                <div key={index} style={{color: theme.primaryTextColor, background: theme.secondaryBackground , padding:"30px 20px" , marginBottom:"10px"}}>
                    <Grid container>
                        <Grid item md={7}>
                            <p style={{margin:0 , color:"#3578E5", fontWeight:"600" , fontSize:"20px"}}>{work.companyName}</p>
                            <p style={{margin:0}}>{work.job}</p>
                            <p style={{margin:0 , fontSize:"12px" , color:"gray"}}>{work.date}</p>
                        </Grid>
                        <Grid item md={5}>
                            <div style={{display:"flex" ,alignItems:"center" , justifyContent:"center" , overflow:"hidden" }}>
                                <img style={{ height:"75px" , objectFit:"cover"}} src={work.logo} alt="logo"/>
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{marginTop:"20px"}}>
                        <p style={{color:"#3578E5", fontWeight:"600"}}>Works and Responsibilities</p>
                        {work.responsibilities.map((res,i)=>
                            <div style={{display:"flex" , flexDirection:"row" , alignItems:"flex-start"}}>
                                <div style={{marginTop:"2px"}}>
                                    <RadioButtonCheckedIcon style={{fontSize:"12px" , marginLeft:"5px" , color:"#3578E5"}} />
                                </div>
                                <div style={{marginLeft:"10px"}}>
                                    {res}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExpandExperience