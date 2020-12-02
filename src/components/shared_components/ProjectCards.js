import React from 'react'
import { makeStyles } from '@material-ui/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import LanguageIcon from '@material-ui/icons/Language';
import CodeIcon from '@material-ui/icons/Code';
import { Card} from 'antd';
import { IconButton, Tooltip } from '@material-ui/core';


const useStyles = makeStyles({
    cards:{
        transform:'scale(1)',
        boxShadow:'1px 1px 3px gray',
        transition:'0.5s',
        marginTop:'16px',
        cursor:'pointer',
        overflowX:'hidden',
        "&:hover":{
            transform:'scale(1.05)',
            transition:'0.5s',
            boxShadow:'2px 2px 5px gray',
        },
        "& .ant-card-head":{
            color:"#fff",
            backgroundColor: ({templateColor}) => templateColor.color
        }
    },
    iconBtns :{
        color: "rgba(0, 0, 0, 0.85)",
        "&:hover":{
            color: ({templateColor}) => templateColor.color
        }
    },
    iconDisableBtns :{
        color: "lightgray",
        cursor:"not-allowed"
    }
});


const ProjectCards = (props) => {
    const {data , handleOpenVideo , handleVisit , templateColor} = props
    const classes = useStyles({templateColor});
    const {Meta} = Card

    return (
        <div className='card-div'>
            <Card
                // style={{background:"#f2f2f2"}}
                className={classes.cards}
                title={data.name}
                cover={
                <img
                    alt="example"
                    src={data.bg}
                    // height='150px'
                />
                }
                actions={[
                    <Tooltip title="Watch Demo" placement="top" arrow>
                        <IconButton
                            disabled={!data.hasVideo}
                            onClick={()=>handleOpenVideo(data)}
                            children={
                                <PlayCircleOutlineIcon 
                                    className={data.hasVideo?classes.iconBtns:classes.iconDisableBtns}  
                                />
                            }
                        />
                    </Tooltip>,
                    <Tooltip title="Go to Website" placement="top" arrow>
                        <IconButton
                            disabled={!data.hasURL}
                            onClick={()=>handleVisit("web",data)}
                            children={
                                <LanguageIcon 
                                    className={data.hasURL?classes.iconBtns:classes.iconDisableBtns}  
                                />
                            }
                        />
                    </Tooltip>,
                    <Tooltip title="View Source Code" placement="top" arrow>
                        <IconButton
                            disabled={!data.viewSrc}
                            onClick={()=>handleVisit("code",data)}
                            children={
                                <CodeIcon 
                                    className={data.viewSrc?classes.iconBtns:classes.iconDisableBtns} 
                                />
                            }
                        />
                    </Tooltip>
                ]}
            >
                <Meta
                    description={
                        <div style={{margin:'0px' , height:'70px', fontSize:'12px' , color: "rgba(0, 0, 0, 0.85)"}}>
                            <p><span style={{fontWeight:'bold'}}>Role : </span>{data.role.join(' | ')}</p>
                            <p><span style={{fontWeight:'bold'}}>Languages : </span>{data.languages.join(' | ')}</p>
                        </div>
                    }
                />
            </Card>
        </div>
    )
}

export default ProjectCards