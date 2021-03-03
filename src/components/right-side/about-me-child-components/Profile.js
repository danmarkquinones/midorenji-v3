import { Grid , Button } from "@material-ui/core";
import React from "react";
import dp from "../../../images/display.jpg"
import bg from "../../../images/experiencebg.png"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Profile = (props) => {
    const {theme ,profileData , showModal} = props
    return(
        <div
            style={{
                backgroundImage:`url(${bg})`,
                backgroundSize:"cover",
                backgroundPosition:"bottom",
                transform:"rotateY(180deg)"
            }}
        >
            <Grid container style={{padding:"10px 0px" , transform:"rotateY(-180deg)"}}>
                <Grid item sm={6}>
                    <div className="about-me-left-grid">
                        <div 
                            className="profile-dp-cont"
                            style={{
                                border: `5px solid ${theme.secondaryBackground}`
                            }}
                        >
                            <img src={dp} alt="DP" />
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6}>
                    <div className="about-me-right-grid" style={{marginLeft:"40px"}}>
                        <div
                            style={{
                                padding:"50px 10px",
                                textAlign:"right",
                                color:theme.primaryTextColor
                            }}
                        >
                            <p style={{margin:0 , fontSize:"30px"}}>NEVER</p>
                            <p style={{margin:0 , fontSize:"50px" , margin : "15px 0px", lineHeight:"0px", fontWeight:"bold" , color:"#f43b62"}}>STOP</p>
                            <p style={{margin:0 , fontSize:"30px"}}>LEARNING</p>
                            {/* <p style={{color:theme.primaryBackground}}>{profileData.codename}</p> */}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile