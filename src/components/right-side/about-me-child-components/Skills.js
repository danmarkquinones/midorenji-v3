import { Grid } from "@material-ui/core"
import React from "react"

const Skills = (props) => {

    const {skillsData , theme} = props
    
    return(
        <div 
            style={{
                padding:"40px 15px 0px 15px" , 
                height:"240px" , 
                width:"100%",
                backgroundSize:"cover"
            }}
        >
            <Grid container>
            {skillsData.map((skill,index)=>
                    <Grid
                        item
                        sm={4}
                        key={index}
                        style={{
                            padding:"5px 7px",
                            textAlign:"center",
                        }}
                    >
                        <div
                            className="skill-div"
                            style={{
                                backgroundColor:theme.primaryBackground,
                                padding:"5px",
                                borderRadius:"10px",
                                overflow:"hidden",
                                position:"relative"
                            }}
                        >
                            <img 
                                className="skill-img"
                                style={{
                                    height:"45px",
                                    // width:"45px",
                                    objectFit:"cover"
                                }}
                                src={skill.logo}
                                alt={skill.text}
                            />
                            <div
                                className="skill-label"
                            >
                                <p
                                    style={{color:"#fff",margin:0, fontSize:"12px" , fontWeight:600}}
                                >{skill.text}</p>
                            </div>
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default Skills