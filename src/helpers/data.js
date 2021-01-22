import {FacebookOutlined , GithubOutlined , MailOutlined , PhoneOutlined ,DownloadOutlined} from '@ant-design/icons';
//mp4
import baliktanaw from '../videos/baliktanaw.mp4'
import figura from '../videos/figura.mp4'
import fsrj from '../videos/fsrj.mp4'
import portfolio from '../videos/portfolio.mp4'
//bg
import tmcardbg from '../images/tmcardbg.PNG'
import mmcardbg from '../images/mmcardbg.PNG'; 
import rrcardbg from '../images/rrcardbg.PNG'
import fsrjcardbg from '../images/fsrjcardbg.PNG';
import figuracardbg from '../images/figuracardbg.PNG';
import baliktanawcardbg from '../images/baliktanawcardbg.PNG';
import jspracticecardbg from '../images/jspracticecardbg.PNG';
import underdevbg from'../images/underdev.jpg';
//exp
import mediameter from '../images/mwlogopurple.png';
import accenture from '../images/accenture.png';
import msa from '../images/msa.png'

//logos
import reactLogo from '../images/react.png';
import jsLogo from '../images/js.png';
import angularLogo from '../images/angular.png';
import tsLogo from '../images/ts.png';
import framermotionLogo from '../images/framermotion.png';
import pythonLogo from '../images/python.png';
import nodeLogo from '../images/node.png';
import mysqlLogo from '../images/mysql.png';
import laravelLogo from '../images/laravel.png';

export const skillsData = [
    {
        text : 'ReactJS',
        color : '#0270b8',
        value : 65,
        top: "50%",
        left: "50%",
        logo: reactLogo
    },
    {
        text : 'Angular',
        color : '#b52e31',
        value : 45,
        top: "5%",
        left: "50%",
        logo: angularLogo
    },
    {
        text : 'Javascript',
        color : '#fed401',
        value : 55,
        top: "0%",
        left: "12%",
        logo: jsLogo
    },
    {
        text : 'Typecript',
        color : '#fed401',
        value : 35,
        top: "40%",
        left: "7%",
        logo: tsLogo
    },
    {
        text : 'PHP/Laravel',
        color : '#8e6111',
        value : 45,
        top: "70%",
        left: "10%",
        logo: laravelLogo
    },
    {
        text : 'MySQL',
        color : '#fbc760',
        value : 45,
        top: "-5%",
        left: "75%",
        logo: mysqlLogo
    },
    {
        text : 'Python',
        color : '#4c071d',
        value : 30,
        top: "75%",
        left: "40%",
        logo: pythonLogo
    },
    {
        text : 'NodeJS',
        color : '#ed74d4',
        value : 55,
        top: "65%",
        left: "65%",
        logo: nodeLogo
    },
    {
        text : 'Framer Motion',
        color : '#2d0527',
        value : 40,
        top: "30%",
        left: "75%",
        logo: framermotionLogo
    }
]

export const profileData = {
    fname : 'Danmark',
    lname : 'Quiñones',
    codename : 'Midorenji',
    fullName : 'Danmark P. Quiñones',
    nickName : 'Dan',
    age : 24 , 
    location : 'Manila , Philippines',
    contact : '+63 906 509 2731',
    motto: 'Never judge someone based on a season.',
    email : 'danmarkquinones@gmail.com',
    skillsFundamental:['HTML' , 'CSS' , 'Javascript'],
    skillsMobile:['Expo' , 'React Native'],
    skillsFE : ['React','Angular'],
    skillsBE : ['PHP/Laravel','MySQL','Python'],
    designingLibraries : ['Bootstrap','Material UI','Ant Design','Framer Motion'],
    hobbies:['Drawing' , 'Handcrafts' , 'Playing Online Games' , 'Watching Anime'],
    intro :"YOSH!! Welcome to my page 👋😁. I’m  Dan, a professional Front End developer, and I specialize in creating React applications that just work across all platforms and browsers. I care about building interfaces that are usable and pleasant for the most number of people possible."
}

export const hobbiesData = [
    {text:"Drawing" , value : 7 , top:"17%" , left:"0%" ,lc: "#1E824C" , dc : "#00FA9A"},
    {text:"Sketching" , value : 5 , top:"60%" , left:"5%" ,lc: "#0F4880" , dc : "#00F8FB"},
    {text:"Handcrafts" , value : 7 , top:"16%" , left:"42%" ,lc: "#9932CC" , dc : "#DCC6E0"},
    {text:"Dancing" , value : 4 , top:"60%" , left:"55%" ,lc: "#2A2A2A" , dc : "#DADFE1"},
    {text:"Playing Games" , value : 9 , top:"45%" , left:"10%" ,lc: "#302407" , dc : "#FFD700"},
    {text:"Watching Anime" , value : 8 , top:"0%" , left:"5%" ,lc: "#802200" , dc : "#EB9532"},
    {text:"Movie Marathon" , value : 6 , top:"31%" , left:"0%" ,lc: "#8B0000" , dc : "#FF6347"},
    {text:"Web Layout" , value : 5 , top:"73%" , left:"25%" ,lc: "#1D1905" , dc : "#00D4D4"},
    {text:"Youtube" , value : 8 , top:"83%" , left:"10%" ,lc: "#360036" , dc : "#C9F227"},
    {text:"Travel" , value : 0 , top:"73%" , left:"0%" ,lc: "#114C2A" , dc : "#FF00FF"},
    {text:"FoodTrip" , value : 3 , top:"85%" , left:"60%" ,lc: "#E00000" , dc : "#E7903C"},
]

export const projectData = [
    {
        name: 'Topic Modelling',
        videoLink : '',
        srcCode :'',
        type : 'cp',
        hasMobile : true,
        viewSrc : false,
        hasVideo : false,
        hasURL : false,
        languages : ['React' , 'Ant Design' , 'Material UI'],
        role : ['Front End'],
        url:'',
        bg:tmcardbg,
    },
    {
        name: 'Media Meter V3',
        videoLink : 'https://www.youtube.com/watch?v=fs2HneOJDdI',
        srcCode :'',
        type : 'cp',
        hasMobile : true,
        viewSrc : false,
        hasVideo : true,
        hasURL : true,
        languages : ['React' , 'React Native' , 'Material UI'],
        role : ['Front End (Web and Mobile App)'],
        url:'https://media-meter.net/mm-client/',
        bg:mmcardbg
    },
    {
        name: 'PokeMania',
        videoLink : '',
        srcCode :'',
        type : 'other',
        hasMobile : false,
        viewSrc : false,
        hasVideo : false,
        hasURL : false,
        languages : ['React Native' , 'Firebase' ],
        role : ['Front End' , 'Back End'],
        url:'',
        bg:underdevbg
    },
    // {
    //     name: 'ANGULAR PROJECT',
    //     videoLink : '',
    //     srcCode :'',
    //     type : 'other',
    //     hasMobile : false,
    //     viewSrc : false,
    //     hasVideo : false,
    //     hasURL : false,
    //     languages : ['Angular' , 'Firebase' ],
    //     role : ['Front End' , 'Back End'],
    //     url:'',
    //     bg:underdevbg
    // },
    {
        name: 'PostLux',
        videoLink : '',
        srcCode :'',
        type : 'other',
        hasMobile : false,
        viewSrc : false,
        hasVideo : false,
        hasURL : false,
        languages : ['VueJS' , 'NuxtJS', 'Ant Design'],
        role : ['Front End'],
        url:'',
        bg:underdevbg
    },
    {
        name: 'RAGING REINDEER',
        videoLink : '',
        srcCode :'https://github.com/danmarkquinones/ragingreindeer',
        type : 'other',
        hasMobile : false,
        viewSrc : true,
        hasVideo : false,
        hasURL : true,
        languages : ['HTML' , 'CSS' , 'Adobe Photoshop'],
        role : ['Front End'],
        url:'https://danmarkquinones.github.io/ragingreindeer/',
        bg:rrcardbg
    },
    {
        name: 'FSRJ',
        videoLink : fsrj,
        srcCode :'https://github.com/danmarkquinones/fsrj',
        type : 'other',
        hasMobile : false,
        viewSrc : true,
        hasVideo : true,
        hasURL : true,
        languages : ['Laravel' , 'MySQL' , 'Javascript'],
        role : ['Front End' , 'Back End'],
        url:'https://fsrjconstruction.000webhostapp.com/',
        bg:fsrjcardbg
    },
    {
        name: 'FIGURA',
        videoLink : figura,
        srcCode :'',
        type : 'other',
        hasMobile : false,
        viewSrc : false,
        hasVideo : true,
        hasURL : true,
        languages : ['PHP' , 'MySQL' , 'Javascript'],
        role : ['Front End' , 'Back End'],
        url:'https://figura-toys.000webhostapp.com/figura/app/views/index.php',
        bg:figuracardbg
    },
    {
        name: 'BALIKTANAW',
        videoLink : baliktanaw,
        srcCode :'https://github.com/danmarkquinones/baliktanaw',
        type : 'other',
        hasMobile : false,
        viewSrc : true,
        hasVideo : true,
        hasURL : true,
        languages : ['HTML' , 'CSS' , 'Javascript'],
        role : ['Front End'],
        url:'https://danmarkquinones.github.io/baliktanaw/',
        bg:baliktanawcardbg
    },
    {
        name: 'JS Practice',
        videoLink : '',
        srcCode :'https://github.com/danmarkquinones/practice',
        type : 'other',
        hasMobile : false,
        viewSrc : true,
        hasVideo : true,
        hasURL : true,
        languages : ['JQuery'],
        role : ['Front End'],
        url:'https://danmarkquinones.github.io/practice/',
        bg:jspracticecardbg
    }, 
]

export const contactsData = [
    {
        name:'github',
        tooltip:'danmarkquinones@github.io',
        component : (style)=>{
            return(
                <GithubOutlined className={style}/>
            )
        }
    },
    {
        name:'email',
        tooltip:'danmarkquinones@gmail.com',
        component : (style)=>{
            return(
                <MailOutlined className={style}/>
            )
        }
    },
    {
        name:'facebook',
        tooltip:'danmarkquinones@gmail.com',
        component : (style)=>{
            return(
                <FacebookOutlined className={style}/>
            )
        }
    },
    {
        name:'phone',
        tooltip:'+63 906 509 2731',
        component : (style)=>{
            return(
                <PhoneOutlined className={style}/>
            )
        }
    },
    {
        name:'cv',
        tooltip:'Download CV',
        component : (style)=>{
            return(
                <DownloadOutlined className={style}/>
            )
        }
    },
]

export const experienceData = [
    {
        companyName:'Media Meter',
        job:'Front End App Developer',
        date:'Jan 2020 - Present',
        logo:mediameter,
        responsibilities:[
            "Building an app using React.js , Vue.js , Material Designs/UI and Javascript.",
            "Creates a modular and re-usable script using Javascript and React.",
            "Scraping Websites or Data Mining.",
            "Designing a modern user interface and building a great user experience to the app.",
            "Integrates API using Axios for connecting to database.",
            "Integrates third-party app such as payment portals (e.g. Paypal and RCBC)"
        ]
    },
    {
        companyName:'Accenture',
        job:'Associate Software Engineer',
        date:'March 2019 - Jan 2020',
        logo:accenture,
        responsibilities:[
            "Performing enhancements of client's web and app applications using HTML , CSS , Javascript for front end and PLSQL for some back ends.",
            "Analyzing legacy codes and business process to fix app's bugs and issues.",
            "[05/06/2019 - Present] - Deployed to a project.",
            "Passed the Angular 7 and NodeJS assessments and was able to create a working app integrated to MEAN Stack.",
            "[03/22/2019 - 05/05/2019] - Angular 7 and NodeJS training with assessments."
        ]
    },
    {
        companyName:'MSA Ortigas',
        job:'Academic Consultant in Mathematics',
        date:'May 2017 - June 2018',
        logo:msa,
        responsibilities:[
            "Teach Mathematics, statistics, and other basic subjects.",
            "Encode grades of the students and make reports as per parent request.",
            "Prepare worksheets and answer keys for teaching materials.",
            "Give educational assessment base on their scores.",
            "Assist the admin in making schedules for classes and teachers."
        ]
    }
]