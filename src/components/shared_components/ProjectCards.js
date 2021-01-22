import React , {useContext} from 'react'
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { IconButton } from '@material-ui/core';

const ProjectCards = (props) => {

    const {project , theme} = props
    
    return (
        <div 
            className="card-indiv-div"
            style={{
                // backgroundColor : theme.secondaryBackground
            }}
        >
            <div 
                className="card-indiv-header"
                style={{
                    backgroundColor : theme.secondaryBackground,
                    boxShadow : !theme.isDarkMode && "0px 0px 5px gray"
                }}
            >
                <div 
                    className="active-indicator" 
                    style={{
                        border : `2px solid ${theme.primaryTextColor}`,
                        backgroundColor:!project.hasURL?"orange":"lime"
                    }}
                >    
                </div>
                <h2
                    style={{
                        color : theme.primaryTextColor
                    }}
                >
                    {project.name}
                </h2>
            </div>

            <div className="card-indiv-body" >
                <img 
                    style={{
                        border: `10px solid ${theme.secondaryBackground}`
                    }} 
                    src={project.bg} alt={"background"}
                />
            </div>

            <div 
                className="card-indiv-footer"
                style={{
                    backgroundColor : theme.secondaryBackground,
                    boxShadow : !theme.isDarkMode && "0px 0px 5px gray"
                }}
            >
                <div className="card-indiv-icons-div">
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