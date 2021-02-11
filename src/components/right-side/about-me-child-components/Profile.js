import { Grid , Button } from "@material-ui/core";
import React from "react";
import dp from "../../../images/display.jpg"
import bg from "../../../images/profile.png"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Profile = (props) => {
    const {theme ,profileData , showModal} = props
    return(
        <div
            style={{
                // backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) , url(${bg})`,
                backgroundImage:`url(${bg})`,
                height:"240px",
                backgroundSize:"center",
                // backgroundPosition:"bottom"
            }}
        >
            <Grid container style={{padding:"10px 0px"}}>
                <Grid item sm={4}>
                    <div className="about-me-left-grid">
                        <div 
                            className="profile-dp-cont"
                            style={{
                                border: `5px solid ${theme.secondaryBackground}`
                            }}
                        >
                            <img src={dp} alt="DP" />
                        </div>
                        <div 
                            className="profile-dp-bg" 
                            style={{backgroundColor: "#3578E5"}}>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={8}>
                    <div className="about-me-right-grid" style={{marginLeft:"40px"}}>
                        <div
                            style={{
                                backgroundColor:theme.secondaryBackground,
                                // backgroundColor: theme.isDarkMode?`rgba(0,0,0,0.9)`: `rgba(250,250,250,0.8)`,
                                // border:`1px dashed ${theme.primaryTextColor}`,
                                borderRadius:"5%",
                                padding:"5px 10px"
                            }}
                        >
                            <h4 style={{color:theme.primaryTextColor}}>{profileData.codename}</h4>
                            <p style={{fontSize:13,color:theme.primaryTextColor , fontWeight:500}}>
                                {profileData.intro}
                            </p>
                        </div>
                        
                        <div 
                            style={{
                                position:"absolute",
                                zIndex:5,
                                bottom:15,
                                right:10
                            }}
                        >
                            <Button
                                variant="contained"
                                size="small"
                                disableElevation
                                style={{
                                    backgroundColor:"#3578E5",
                                    color:theme.secondaryBackground,
                                    borderRadius:"100px",
                                }}
                                onClick={()=>showModal("profile")}
                            >
                                <div
                                    style={{display:"flex" , alignItems:"center" , fontSize:"10px" ,color:"#fff"}}
                                >
                                    <span style={{lineHeight:"20px"}}>READ MORE</span> 
                                    <DoubleArrowIcon style={{marginLeft:"3px" , marginBottom:"1px", fontSize:"10px"}}/>
                                </div>
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile