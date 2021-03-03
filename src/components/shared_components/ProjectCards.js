import React , {useContext} from 'react'
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Grid, IconButton } from '@material-ui/core';

const ProjectCards = (props) => {

    const {project ,index, theme} = props
    
    return (
        <div 
            // data-aos="slide-left"
            className="card-indiv-div"
            style={{
                height:"auto",
                backgroundColor : theme.secondaryBackground,
                padding:"20px",
                boxShadow : theme.isDarkMode? null : "1px 1px 2px lightgray"
            }}
        >
            <div
                style={{
                    position:"relative"
                }}
            >
                <div
                    style={{
                        height:"200px",
                        borderRadius:"10px",
                        overflow:"hidden",
                        boxShadow: theme.isDarkMode? null : "0px 0px 2px lightgray"
                    }}
                >
                    <img 
                        style={{
                            height:"100%",
                            width:"100%",
                            objectPosition:project.position,
                            objectFit:"cover"
                        }} 
                        src={project.bg} alt={"background"}
                    />
                </div>
                <div
                    style={{
                        position:"absolute",
                        bottom:"-10px",
                        left:"10px"
                    }}
                >
                    <div 
                        style={{
                            height:"20px",
                            width:"20px",
                            borderRadius:"50%",
                            backgroundImage:!project.hasURL? "linear-gradient(to right, red , orange)":"linear-gradient(to right, green , lime)"
                        }}
                    >    
                    </div>
                </div>
            </div>
            <div
                style={{
                    color:theme.primaryTextColor,
                    marginLeft:"10px"
                }}
            >
                <p
                    style={{
                        fontSize:"20px",
                        fontWeight:"bold",
                        margin:"10px 0px 0px 0px"
                    }}
                >{project.name}</p>
                <div
                    style={{display:"flex" , flexDirection:"row" , alignItems:"center"}}
                >
                    <p style={{margin:"0px"}}>Languages</p>
                    <p style={{margin:"0px 5px"}}>:</p>
                    <p style={{margin:"0px"}}>{project.languages.join(" | ")}</p>
                </div>
                <div
                    style={{display:"flex" , flexDirection:"row" , alignItems:"center"}}
                >
                    <p style={{margin:"0px"}}>Role</p>
                    <p style={{margin:"0px 5px"}}>:</p>
                    <p style={{margin:"0px"}}>{project.role.join(" | ")}</p>
                </div>
                
            </div>

            <div>
                <div style={{textAlign:"right"}}>
                    <IconButton 
                        style={{padding:0 , backgroundColor:"transparent"}} 
                        disableRipple
                        disabled = {!project.hasURL}
                    >
                        <LinkIcon 
                            className="card-icons" 
                            style={{color:!project.hasURL?"#4f4f4f":theme.primaryTextColor}}
                        />
                    </IconButton>
                    <IconButton 
                        style={{padding:0 , 
                            backgroundColor:"transparent"
                        }} 
                        disableRipple
                        disabled = {!project.viewSrc}
                    >
                        <CodeIcon 
                            className="card-icons" 
                            style={{color:!project.viewSrc?"#4f4f4f":theme.primaryTextColor}}
                        />
                    </IconButton>
                    <IconButton 
                        style={{padding:0 , backgroundColor:"transparent"}} 
                        disableRipple
                        disabled = {!project.hasVideo}
                    >
                        <InfoOutlinedIcon 
                            className="card-icons" 
                            style={{color:!project.hasVideo?"#4f4f4f":theme.primaryTextColor}}
                        />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards