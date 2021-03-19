import React , {useState} from "react";
import { motion} from "framer-motion";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import { profileData } from "../../helpers/data";
import { Grid , InputBase, InputLabel,Button} from "@material-ui/core";
import emailjs from 'emailjs-com';
import SendIcon from '@material-ui/icons/Send';

const ContactMe = (props) => {

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

    const headerVariants = {
        initial:{
            opacity:0,
            x:100
        },
        animate:{
            opacity:1,
            x:0
        }
    }
    const textVariants = {
        initial:{opacity:0},
        animate:{opacity:1}
    }

    return(
        <div style={{color:"#fff" , height:"100%" , width:"100%", position:"relative"}}>
            <motion.div variants={headerVariants} initial="initial" animate="animate" transition={{delay:0.5}}>
                <p className="headerText">Contact Me</p>
            </motion.div>
            <motion.p 
                className="contentText" 
                variants={textVariants} 
                initial="initial" 
                animate="animate" 
                transition={{delay:1 , duration:0.5}}
            >
                You can contact me via phone or email. you could also use this form below to directly email me.
            </motion.p>
            <motion.div
                style={{marginTop:"1vw"}}
                className="contentText" 
                variants={textVariants} 
                initial="initial" 
                animate="animate" 
                transition={{delay:1.5 , duration:0.5}}
            >
                <Grid container>
                    <Grid item sm={6}>
                        <div style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                            <EmailIcon style={{fontSize:"2vw"}}/>
                            <p className="contentText" style={{margin:"0vw 1vw"}}>{profileData.email}</p>
                        </div>
                    </Grid>
                    <Grid item sm={6}>
                        <div style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                            <PhoneAndroidIcon style={{fontSize:"2vw"}}/>
                            <p className="contentText" style={{margin:"0vw 1vw"}}>{profileData.contact}</p>
                        </div>
                    </Grid>
                </Grid>
            </motion.div>

            <motion.div 
                variants={textVariants} 
                initial="initial" 
                animate="animate" 
                transition={{delay:2 , duration:0.5}}
                style={{position:"absolute" , width:"100%" , bottom:0, right:0,}}
            >
                <form autoComplete="off" className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="to_email" value={profileData.email} />
                    <div 
                        className="custom-text-field"
                    >
                        <InputLabel 
                            style={{
                                fontWeight:"bold",
                                fontSize:"2vw",
                                width:"20%",
                                color: focusedForm==="from_email"?"#2D3D66": "#c4c4c4"
                            }}
                        >
                            Email : 
                        </InputLabel>
                        <InputBase 
                            autoFocus
                            variant="outlined"
                            name="from_email"
                            value={form.from_email}
                            fullWidth
                            onFocus={()=>handleFocus("from_email")}
                            onChange={(e)=>handleChange("from_email" , e.target.value)}
                            inputProps={{
                                style:{
                                    color:"#2D3D66",
                                    overflow:"auto",
                                    fontSize:"2vw",
                                }
                            }}
                        />
                    </div>

                    <div
                        className="custom-text-field"
                    >
                        <InputLabel 
                            style={{
                                fontWeight:"bold",
                                fontSize:"2vw",
                                width:"25%",
                                color: focusedForm==="subject"?"#2D3D66": "#c4c4c4"
                            }}
                        >
                            Subject : 
                        </InputLabel>
                        <InputBase
                            name="subject"
                            value={form.subject}
                            fullWidth
                            onFocus={()=>handleFocus("subject")}
                            onChange={(e)=>handleChange("subject" , e.target.value)}
                            inputProps={{
                                style:{
                                    color:"#2D3D66",
                                    overflow:"auto",
                                    fontSize:"2vw",
                                }
                            }}
                        />
                    </div>

                    <div
                        className="custom-text-area-field"
                    >
                        <InputLabel 
                            style={{
                                fontWeight:"bold",
                                fontSize:"2vw",
                                width:"100%",
                                color: focusedForm==="message"?"#2D3D66": "#c4c4c4"
                            }}
                        >Message : </InputLabel>

                        <InputBase 
                            multiline
                            fullWidth
                            name="message"
                            value={form.message}
                            inputProps={{
                                style:{
                                    color:"#2D3D66",
                                    height:"7vw",
                                    overflow:"auto",
                                    fontSize:"2vw",
                                    lineHeight:"2vw"
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
                                    color:emailSent.status==="success"? "lime" : emailSent.status==="error"? "tomato" : "#fff"
                                }}
                            >
                                {emailSent.message}
                            </span>:null
                        }
                        <div style={{textAlign:"right" , flex:1}}>
                            <Button 
                                className="submitBtn"
                                disabled={checkValidity()}
                                style={{
                                    border:checkValidity()?"0.2vw solid lightgray":".2vw solid #fff",
                                    color:"#fff",
                                    background:checkValidity()?"lightgray" : "#2D3D66"
                                }} 
                                variant="outlined" 
                                disableElevation 
                                type="submit"
                            >
                                    Submit <SendIcon style={{marginLeft:"2%" , fontSize:"1vw"}}/>
                            </Button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default ContactMe