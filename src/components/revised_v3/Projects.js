import React , {useState , useEffect} from "react";
import { AnimatePresence, motion} from "framer-motion";
import ReactPlayer from "react-player";
import { projectData } from "../../helpers/data";
import Slider from "react-slick";
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';
import { infiniteBounceInOut } from "./framerMotionAnimations";

const Projects = (props) => {

    const [activeProject , setActiveProject] = useState(projectData[0])


    const handleChangeActiveProject = (project) => {
        setActiveProject("")
        setTimeout(()=>{
            setActiveProject(project)
        },500)
    }

    useEffect(() => {
        if(activeProject){
            console.log("did change")
        }
    }, [activeProject])

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
    }

    const opacityVariants = {
        initial:{opacity:0},
        animate:{opacity:1},
        exit:{opacity:0}
    }

    return (
        <div style={{width:"95%", height:"90%" ,display:"flex" , flexDirection:"column",  alignItems:"center" , justifyContent:"center" }}>

            <div style={{display:"flex" ,  height:"65%" , width:"100%" , alignItems:"center" , justifyContent:"center" }}>
                <motion.div
                    initial={{opacity:0 , x:-100}}
                    animate={{opacity:1 , x:0}}
                    transition={{delay:0.5}}
                    style={{height:"95%" , width:"60%" , overflow:"hidden" ,background:"black"}}
                >
                    {activeProject.hasVideo?
                        <ReactPlayer url={activeProject.videoLink} controls={true} style={{height:"100%" , width:"100%"}}/>
                    :!activeProject.hasVideo ? <img src={activeProject.bg} height="100%" width="100%" alt="bg"/>
                    :null}
                </motion.div>

                <motion.div 
                    initial={{opacity:0 , x:100}}
                    animate={{opacity:1 , x:0}}
                    transition={{delay:0.5}}
                    style={{height:"95%" , width:"40%" , padding:"0vh 1vw" , position:"relative"}}
                >
                    <AnimatePresence exitBeforeEnter>
                        {activeProject!==""? 
                            <div
                                style={{position:"relative" , height:"100%" ,overflow:"hidden"}}
                            >
                                <motion.div
                                    initial={{x:30 , y:30 , height:"0%" , width:"0%"}}
                                    animate={{x:0, y:0 , height:"50%" , width:"50%"}}
                                    exit={{x:-30 , y:-30, height:"0%" , width:"0%"}}
                                    style={{
                                        position:"absolute",
                                        top:"0%",
                                        left:"0%",
                                        background:"#2D3D66",
                                    }}
                                />
                                <motion.div
                                    initial={{x:-30 , y:-30 , height:"0%" , width:"0%"}}
                                    animate={{x:0, y:0 , height:"50%" , width:"50%"}}
                                    exit={{x:30 , y:30, height:"0%" , width:"0%"}}
                                    style={{
                                        position:"absolute",
                                        bottom:"0%",
                                        right:"0%",
                                        background:"#2D3D66",
                                    }}
                                />

                                <div
                                    style={{
                                        position:"absolute",
                                        top:"50%",
                                        left:"50%",
                                        height:"90%",
                                        width:"90%",
                                        transform:"translate(-50%,-50%)",
                                        background:"#fff",
                                        overflow:"hidden",
                                        display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center"
                                    }}
                                >
                                    <motion.div
                                        style={{ width :"80%"}}
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        exit={{opacity:0}}
                                    >
                                        <p className="active-project-header">{activeProject.name}</p>
                                        <p className="active-project-subheader"> Languages and Frameworks :</p>
                                        <p className="active-project-subheader-content">{activeProject.languages.join(" , ")}</p>
                                        <p className="active-project-subheader"> Available Platforms :</p>
                                        <p className="active-project-subheader-content">{activeProject.platform.join(" , ")}</p>
                                        <p className="active-project-subheader"> Role/s :</p>
                                        <p className="active-project-subheader-content">{activeProject.role.join(" , ")}</p>
                                        <div style={{marginTop:"1vh" , display:"flex" , justifyContent:"flex-end" , width:"100%"}}>
                                            <motion.div variants={infiniteBounceInOut} whileHover="hover">
                                                <LinkIcon className="active-project-icons"/>
                                            </motion.div>
                                            <motion.div variants={infiniteBounceInOut} whileHover="hover">
                                                <CodeIcon className="active-project-icons"/>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        :null}
                    </AnimatePresence>
                </motion.div>
                
            </div> 

            <motion.div 
                initial={{opacity:0 , y:100}}
                animate={{opacity:1 , y:0}}
                transition={{delay:0.5}}
                style={{height:"35%" , width:"100%" , padding:"1vw"}}
            >
                <Slider {...settings}>
                    {projectData.map((project , index)=>
                        <div key={index}>
                            <div
                                className="hvr-buzz-out"
                                onClick={()=>handleChangeActiveProject(project)}
                                style={{
                                    height:"30vh",
                                    width:"100%",
                                    padding:"2vh 1.3vw",
                                }}
                            >
                                <div
                                    className="project-card-div"
                                    style={{
                                        transform: activeProject.id===project.id ? "scale(1.08)" : "scale(1)",
                                        opacity:activeProject.id===project.id ? "1" : "0.5",
                                    }}
                                >
                                    <img src={project.bg} height="100%"  width="100%" style={{objectFit:"cover" ,objectPosition:project.position}}/>
                                    <div
                                        style={{
                                            position:"absolute",
                                            bottom:0,
                                            background:"#2D3D66",
                                            width:"100%",
                                            textAlign:"center",
                                            color:"#fff",
                                            padding:"0.5vh 0vw"
                                        }}
                                    >
                                        <p style={{margin:0}}>{project.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Slider>
            </motion.div>           
        </div>
    )
}

export default Projects