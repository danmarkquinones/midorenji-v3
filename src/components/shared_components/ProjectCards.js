import React from 'react'
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { IconButton } from '@material-ui/core';

const ProjectCards = (props) => {

    const {project} = props

    return (
        <div className="card-indiv-div">

            <div className="card-indiv-header">
                <div className="active-indicator" style={{backgroundColor:!project.hasURL?"orange":"lime"}}></div>
                <h2>{project.name}</h2>
            </div>

            <div className="card-indiv-body" >
                <img src={project.bg} alt={"background"}/>
            </div>

            <div className="card-indiv-footer">
                <div className="card-indiv-icons-div">
                    <IconButton 
                        style={{padding:0 , backgroundColor:"transparent"}} 
                        disableRipple
                        disabled = {!project.hasURL}
                    >
                        <LinkIcon className="card-icons" style={{color:!project.hasURL?"#3f3f3f":"#1f1f1f"}}/>
                    </IconButton>
                    <IconButton 
                        style={{padding:0 , 
                            backgroundColor:"transparent"
                        }} 
                        disableRipple
                        disabled = {!project.viewSrc}
                    >
                        <CodeIcon className="card-icons" style={{color:!project.viewSrc?"#3f3f3f":"#1f1f1f"}}/>
                    </IconButton>
                    <IconButton 
                        style={{padding:0 , backgroundColor:"transparent"}} 
                        disableRipple
                        disabled = {!project.hasVideo}
                    >
                        <InfoOutlinedIcon className="card-icons" style={{color:!project.hasVideo?"#3f3f3f":"#1f1f1f"}}/>
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default ProjectCards