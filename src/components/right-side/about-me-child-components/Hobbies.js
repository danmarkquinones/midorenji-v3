import { colors } from "@material-ui/core";
import React , {useState , useEffect} from "react"
import ReactWordcloud from 'react-wordcloud';
import bg from '../../../images/hobbiesbg.png'

const Hobbies = (props) => {

    const {theme , hobbiesData} = props
    const [textColors , setTextColors] = useState([])

    useEffect(()=>{
        const lightModeColors = ["#1E824C" , "#0F4880" , "#9932CC" , "#2A2A2A" , "#302407" , "#802200" , "#8B0000"]

        const darkModeColors = ["#00FA9A" , "#00F8FB" , "#DCC6E0" , "#DADFE1" , "#FFD700" , "#EB9532" , "#FF6347"]

        if(theme.isDarkMode){
            setTextColors([...darkModeColors])
        }else{
            setTextColors([...lightModeColors])
        }
    },[theme])

    return(
        <div 
            style={{
                padding:"40px 0px 0px 0px" , 
                height:"240px" , 
                width:"100%",
                backgroundImage:`url(${bg})`,
                backgroundSize:"cover",
                backgroundPosition:"center"
            }}
        >
            <div style={{ width: "100%", height: "100%" , position:"relative"}}>
                {hobbiesData.map((hobby,index)=>
                    <div
                        key={index}
                        style={{
                            position:"absolute",
                            // backgroundColor:theme.isDarkMode? hobby.dc : hobby.lc,
                            top:hobby.top,
                            left:hobby.left,
                            textAlign:"center",
                            // border:`2px solid ${theme.primaryBackground}`,
                            padding:"0px 10px",
                            // borderRadius:"50px"
                        }}
                    >
                        <p 
                            style={{
                                fontFamily:"impact",
                                fontWeight:"bold",
                                letterSpacing:"1px",
                                fontSize:hobby.value+15,
                                // color:theme.primaryBackground
                                color:theme.isDarkMode? hobby.dc : hobby.lc,
                                "-webkit-text-stroke": `1px ${theme.primaryBackground}`
                            }}
                        >{hobby.text}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Hobbies