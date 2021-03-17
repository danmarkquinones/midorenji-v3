import React , {useContext} from 'react'
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Grid, IconButton } from '@material-ui/core';
import { Divider } from 'antd';

const ProjectCards = (props) => {

    const {project ,index, theme} = props
    
    return (
        <div 
            className="card-indiv-div"
            style={{
                height:"auto",
                backgroundColor : theme.secondaryBackground,
                // background: "linear-gradient(-315deg, rgba(244,59,98,1) 0%, rgba(53,120,229,1) 50%, rgba(0,212,255,1) 100%)",
                padding:"10px",
                boxShadow : theme.isDarkMode? null : "2px 2px 6px #8f8f8f"
            }}
        >
            <div
                style={{
                    position:"relative",
                    overflow:"hidden"
                }}
            >
                <div
                    style={{
                        borderRadius:"10px",
                        boxShadow: theme.isDarkMode? null : "0px 0px 2px lightgray",
                        overflow:"hidden",
                    }}
                >   
                    <div
                        style={{
                            height:"200px",
                            borderRadius:"10px",
                            overflow:"hidden",
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
                            bottom:"-20px",
                            right:"-20px",
                        }}
                    >
                        <div 
                            className="project-card-info-container" 
                            style={{
                                backgroundColor:theme.secondaryBackground
                                // background: "linear-gradient(-315deg, rgba(244,59,98,1) 0%, rgba(53,120,229,1) 50%, rgba(0,212,255,1) 100%)"
                            }}
                        >
                            <div className="project-card-info-details" style={{color:theme.primaryTextColor}}>
                                <p style={{fontSize:"20px" , fontWeight:"bold" , color:"#f43b62"}}>{project.name}</p>
                                <Divider style={{margin:"5px 0px"}}/>
                                <p style={{fontWeight:"600"}}>Languages : </p>
                                <p style={{marginLeft:"20px"}}>{project.languages.join(" | ")}</p>
                                <p style={{fontWeight:"600"}}>Role : </p>
                                <p style={{marginLeft:"20px"}}>{project.role.join(" | ")}</p>
                                <Divider style={{margin:"5px 0px"}}/>
                                <div>
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
                    </div>
                </div>
            </div>

            <div
                style={{
                    position:"absolute",
                    bottom:"7px",
                    right:"7px",
                }}
            >
                <div 
                    className="online-status-icon"
                    style={{
                        backgroundImage:!project.hasURL? "linear-gradient(to right, red , orange)":"linear-gradient(to right, green , lime)"
                    }}
                >    
                </div>
            </div>
        </div>
    )
}

export default ProjectCards