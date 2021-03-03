import React , {useState , useContext} from "react"
import {AnimatePresence, motion} from 'framer-motion'
import { ThemeContext } from "../context/themeContext";
import { Button, Grid, InputBase, InputLabel, } from "@material-ui/core";
import emailjs from 'emailjs-com';
import {profileData} from '../../helpers/data';
import bg from '../../images/experiencebg.png';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SendIcon from '@material-ui/icons/Send';

const ContactMe = (props) => {

    const {pageVariants, pageTransition } = props
    const [theme] = useContext(ThemeContext)
    const [emailSent,setEmailSent] = useState({status:"" ,  message:""})
    const [focusedForm , setFocusedForm] = useState("")
    const [form,setForm] = useState({
        from_email:"",
        subject:"",
        message:""
    })

    const sendEmail = (e) => {
        e.preventDefault();
        setEmailSent({...emailSent , status:"loading" , message:`Sending Email to ${profileData.email}`})
        emailjs.sendForm('service_wyghi7g', 'template_7ee315d', e.target, 'user_ZQzcZGdXeXUzLonDFo9jD')
          .then((result) => {
            setEmailSent({...emailSent , status:"success", message:`Email successfuly sent to ${profileData.email}`})
            setTimeout(()=>{
                setEmailSent({...emailSent , status:"", message:""})
            },3000)
          }, (error) => {
            setEmailSent({...emailSent , status:"failed" , message:`Server Error.. Please try again later`})
            setTimeout(()=>{
                setEmailSent({...emailSent , status:"", message:""})
            },3000)
          });
      }

    const handleFocus = (name) => {
        setFocusedForm(name)
    }

    const handleChange = (name , value) => {
        setForm({...form, [name] : value})
    }

    const checkValidity = () => {
        if(form.from_email==="" || form.subject==="" || form.message===""){
            return true
        }else{
            return false
        }
    }

    return(
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="page-container"
        >
            <AnimatePresence>
                <div className="profile-container">
                    <Grid container style={{padding:"20px"}}>
                        <Grid item sm={12} md={7}>
                            <div
                                style={{
                                    backgroundColor: theme.secondaryBackground,
                                    borderRadius:"10px",
                                    overflow:"hidden",
                                    boxShadow: !theme.isDarkMode && "1px 1px 5px rgba(0,0,0,0.3)",
                                }}
                            >
                                <Grid container>
                                    <Grid item sm={4} 
                                        style={{
                                            // backgroundColor:"#3578E5",
                                            backgroundColor:"#605aa6",
                                            backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.45)),url(${bg})`,
                                            backgroundSize:"cover",
                                            backgroundPosition:"right"
                                        }}
                                    >
                                        <div
                                            style={{display:"flex", flexDirection:"column", marginTop:"15px", padding:"10px" , color:"#fff" ,  }}
                                        >
                                            <div style={{ justifyContent:"flex-end" }}>
                                                <p style={{margin:0,fontWeight:"bold" , fontSize:20}}>Contact Information</p>
                                                <p style={{margin:0}}>Feel free to call me or email me.</p>
                                            </div>

                                            <div style={{marginTop:"50px"}}>
                                                <div style={{display:"flex" , flexDirection:"row" , alignItems:"center" , marginBottom:"20px"}}>
                                                    <PhoneAndroidIcon style={{marginRight : "10px"}}/> 
                                                    <span>{profileData.contact}</span>
                                                </div>
                                                <div style={{display:"flex" , flexDirection:"row" , alignItems:"center"}}>
                                                    <MailIcon style={{marginRight : "10px"}}/> 
                                                    <span>{profileData.email}</span>
                                                </div>
                                            </div>
                                                
                                            <div style={{flex:1 , justifyContent:"flex-end"}}>
                                                <p style={{marginTop: "50px"}}>You can also use this form to the right to directly send me an email.</p>
                                            </div>
                                            
                                        </div>
                                    </Grid>
                                    <Grid item sm={12} md={8}>
                                        <motion.div 
                                            initial={{opacity:0}}
                                            animate={{opacity:1}}
                                            exit={{opacity:0}}
                                            transition={{
                                                delay : 1,
                                                duration:1
                                            }}
                                            style={{padding:"10px 20px"}}
                                        >

                                            <form autoComplete="off" className="contact-form" onSubmit={sendEmail}>
                                                <input type="hidden" name="to_email" value={profileData.email} />

                                                <div 
                                                    className="customTextField"
                                                    style={{
                                                        backgroundColor:theme.primaryBackground
                                                    }}
                                                >
                                                    <InputLabel 
                                                        style={{
                                                            fontWeight:"bold",
                                                            width:"80px",
                                                            color: focusedForm==="from_email"?"#3578E5": theme.primaryTextColor
                                                        }}
                                                    >
                                                        Email : 
                                                    </InputLabel>
                                                    <InputBase 
                                                        autoFocus
                                                        variant="outlined"
                                                        style={{
                                                            color:theme.primaryTextColor
                                                        }}
                                                        name="from_email"
                                                        value={form.from_email}
                                                        fullWidth
                                                        onFocus={()=>handleFocus("from_email")}
                                                        onChange={(e)=>handleChange("from_email" , e.target.value)}
                                                    />
                                                </div>

                                                <div
                                                    className="customTextField"
                                                    style={{
                                                        backgroundColor:theme.primaryBackground
                                                    }}
                                                >
                                                    <InputLabel 
                                                        style={{
                                                            fontWeight:"bold",
                                                            width:"100px",
                                                            color:focusedForm==="subject"?"#3578E5":theme.primaryTextColor
                                                        }}
                                                    >
                                                        Subject : 
                                                    </InputLabel>
                                                    <InputBase
                                                        style={{
                                                            color:theme.primaryTextColor
                                                        }}
                                                        name="subject"
                                                        value={form.subject}
                                                        fullWidth
                                                        onFocus={()=>handleFocus("subject")}
                                                        onChange={(e)=>handleChange("subject" , e.target.value)}
                                                    />
                                                </div>

                                                <div
                                                    className="customTextAreaField"
                                                    style={{
                                                        backgroundColor:theme.primaryBackground
                                                    }}
                                                >
                                                    <InputLabel 
                                                        style={{
                                                            marginTop:"10px",
                                                            fontWeight:"bold",
                                                            color:focusedForm==="message"?"#3578E5":theme.primaryTextColor
                                                        }}
                                                    >Message : </InputLabel>

                                                    <InputBase 
                                                        multiline
                                                        fullWidth
                                                        name="message"
                                                        value={form.message}
                                                        inputProps={{
                                                            style:{
                                                                color:theme.primaryTextColor,
                                                                height:"200px",
                                                                overflow:"auto"
                                                            }
                                                        }}
                                                        onFocus={()=>handleFocus("message")}
                                                        onChange={(e)=>handleChange("message" , e.target.value)}
                                                    />
                                                </div>

                                                <div style={{display:"flex" , flexDirection:"row" , alignItems:"center"}}>
                                                    {emailSent.status!==""?
                                                        <span 
                                                            style={{
                                                                padding:"0px 20px", 
                                                                color:emailSent.status==="success"? "lime" : emailSent.status==="error"? "tomato" : "#3578E5"
                                                            }}
                                                        >
                                                            {emailSent.message}
                                                        </span>:null
                                                    }
                                                    <div style={{textAlign:"right" , marginTop:"10px" , flex:1}}>
                                                        <Button 
                                                            disabled={checkValidity()}
                                                            style={{
                                                                backgroundColor:checkValidity()?"gray":"#3578E5",
                                                                color:"#fff",
                                                                border:"none"
                                                            }} 
                                                            variant="outlined" 
                                                            disableElevation 
                                                            type="submit"
                                                        >
                                                                Submit <SendIcon style={{marginLeft:"5px" , fontSize:15}}/>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </form>
                                        </motion.div>
                                    </Grid>
                                </Grid>
                                
                            </div>
                        </Grid>
                    </Grid>
                </div>    
            </AnimatePresence>                                 
        </motion.div>
    )
}

export default ContactMe