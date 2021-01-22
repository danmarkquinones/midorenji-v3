import React from "react"
import bg from '../../../images/skillsbg.png'

const Skills = (props) => {

    const {skillsData , theme} = props
    
    return(
        <div 
            style={{
                padding:"50px 0px 0px 0px" , 
                height:"240px" , 
                width:"100%",
                // backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${bg})`,
                backgroundImage:`url(${bg})`,
                backgroundSize:"cover"
            }}
        >
            <div style={{ width: "100%", height: "100%" ,position:"relative" , overflow:"hidden"}}>
                {skillsData.map((skill,index)=>
                    <div
                        key={index}
                        style={{
                            height:skill.value,
                            width:skill.value,
                            // backgroundColor:theme.secondaryBackground,
                            padding:"5px",
                            borderRadius:"50%",
                            position:"absolute",
                            top:skill.top,
                            left:skill.left,
                            transform: skill.text==="ReactJS" ?`translate(-50%,-50%)` : null,
                            textAlign:"center",
                            // overflow:"hidden",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                    >
                        <img 
                            style={{
                                height:skill.value,
                                // width:skill.value-10,
                                // borderRadius:"10px",
                                "-webkit-filter": `drop-shadow(0px 0px 2px #2f2f2f)`,
                                filter: `drop-shadow(0px 0px 2px #2f2f2f)`,
                                // backgroundColor:"#fff"
                            }}
                            src={skill.logo}
                            alt={skill.text}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Skills