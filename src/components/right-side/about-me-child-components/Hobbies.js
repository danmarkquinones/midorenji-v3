import React , {useState , useEffect} from "react"
import { Grid } from "@material-ui/core"
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const Hobbies = (props) => {


    const {theme , hobbiesData} = props

    return(
        <div 
            style={{
                padding:"50px 10px 0px 10px" , 
                height:"240px" , 
                width:"100%",
            }}
        >
            <div>
                {hobbiesData.map((hobby,index)=>
                    <Grid 
                        container
                        style={{
                            padding:"5px",
                            backgroundColor:theme.primaryBackground,
                            marginBottom:"10px",
                            borderRadius:"10px"
                        }}
                    >
                        <Grid item sm={4} style={{padding:"2px"}}>
                            <div
                                style={{
                                    height:"70px",
                                    width:"70px",
                                    borderRadius:"10px",
                                    overflow:"hidden",
                                    // marginTop:"10px"
                                }}
                            >
                                <img alt="hobby" src={hobby.bg} style={{height:"70px" , width:"70px"}}/>
                            </div>
                            
                        </Grid>
                        <Grid item sm={8}>
                            <div
                                style={{padding:"5px 0px"}}
                            >
                                <h4
                                    style={{fontWeight:"bold" , margin:0 , color:theme.primaryTextColor}} 
                                >
                                    {/* {hobby.name} */}
                                </h4>
                                {hobby.activity.map((act,i)=>
                                    <div style={{display:"flex",flexDirection:"row" , alignItems:"flex-start" , justifyContent:"flex-end"}}>
                                        <div>
                                            <p
                                            style={{margin:0 , fontSize:"12px" , fontWeight:600, color:theme.primaryTextColor}}
                                            >
                                                {/* <RadioButtonCheckedIcon style={{fontSize:"12px"}}/> */}
                                                {act}
                                            </p>
                                        </div>
                                        <div>
                                            <RadioButtonCheckedIcon style={{fontSize:"12px" , marginLeft:"5px" , color:"#3578E5"}}/>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Grid>
                    </Grid>
                )}
            </div>
        </div>
    )
}

export default Hobbies