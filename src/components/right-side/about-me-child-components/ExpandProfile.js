import { Grid } from "@material-ui/core";
import React from "react";
import { profileData } from "../../../helpers/data";

const LineDivLayout = (props) => {
    const {label , value , theme} = props

    return (
        <div
            style={{borderRadius:"20px" , border:"2px solid #3578E5" , overflow:"hidden" , margin:"5px"}}
        >
            <Grid container >
                {/* <Grid item md={4}>
                    <div style={{background:"#3578E5" , textAlign:"center" , padding:"10px 0px"}}>
                        <p style={{margin:0 , color:theme.primaryBackground , fontWeight:"600"}}>{label}</p>
                    </div>
                </Grid> */}
                <Grid item md={12}>
                    <div style={{padding:"10px 0px" , textAlign:"center" , fontWeight:"600" , color:theme.primaryTextColor}}>
                        <p style={{margin:0}}>{value}</p>
                        <p>{value}</p>
                    </div>
                </Grid>
            </Grid>
            
        </div>
    )
}
const ExpandProfile = (props) => {
    const {theme} = props
    return(
        <div>
            <div
                style={{borderRadius:"20px" , border:"2px solid #3578E5" , overflow:"hidden" , margin:"5px"}}
            >
                <div style={{padding:"10px 0px" , textAlign:"center" , fontWeight:"600" , color:theme.primaryTextColor}}>
                    <p style={{margin:0}}>{profileData.nickName}</p>
                    <p style={{margin:0}}>{profileData.fullName}</p>
                    <p style={{margin:0}}>{profileData.position}</p>
                </div>
            </div>

            <div
                style={{borderRadius:"20px" , border:"2px solid #3578E5" , overflow:"hidden" , margin:"5px"}}
            >
                <div style={{padding:"10px 0px" , textAlign:"center" , fontWeight:"600" , color:theme.primaryTextColor}}>
                    <p style={{margin:0}}>{profileData.contact}</p>
                    <p style={{margin:0}}>{profileData.email}</p>
                    <p style={{margin:0}}>{profileData.location}</p>
                </div>

            </div>

            <div
                style={{borderRadius:"20px" , border:"2px solid #3578E5" , overflow:"hidden" , margin:"5px"}}
            >
                <div style={{padding:"10px 0px" , textAlign:"center" , fontWeight:"600" , color:theme.primaryTextColor}}>
                    <p style={{margin:0}}>{profileData.college}</p>
                    <p style={{margin:0}}>{profileData.course}</p>
                </div>

            </div>
        </div>
    )
}

export default ExpandProfile