import React , {useState} from 'react'
import { projectData } from '../../helpers/data'

const ProjectsV2 = () => {

    const [active , setActive] = useState("")
    const handleClick = (i) => {
        setActive(i)
    }

    return (
        <div
            style={{
                display:"flex",
                alignItems:"center"
            }}
        >
            {projectData.map((project,i)=>
                <div 
                    key={i}
                    style={{
                        margin:"10px",
                        border:"1px solid black",
                        height:`${Math.floor(Math.random() * (75-1) + 1)}vh`,
                        width:active===i? "100vh" : "0vw"
                    }}
                    onClick={()=>handleClick(i)}
                >
                    <p>{project.name}</p>
                </div>
            )}
        </div>
    )
}

export default ProjectsV2
