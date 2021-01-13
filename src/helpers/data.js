import reactjs from '../images/reactjs.gif'
import angularjs from '../images/angularjs.gif'
import vuejs from '../images/vuejs.gif'
import javascript from '../images/javascript.gif'

import reactjsplain from '../images/reactjsplain.gif'
import angularplain from '../images/angularplain.gif'
import vueplain from '../images/vueplain.gif'
import jsplain from '../images/jsplain.gif'
//icons
import reactIcon from '../images/react.png'
import angularIcon from '../images/angular.png'
import vueIcon from '../images/vue.png'
import jsIcon from '../images/js.png'
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

export const skillsHighlightsData = [
    {
        value : 'reactjs',
        name : 'ReactJS',
        url : reactjsplain,
        icon : reactIcon,
        // color : '#61dafc',
        color : '#0270b8',
        active : true,
    },
    {
        value : 'angularjs',
        name : 'Angular',
        url : angularplain,
        icon : angularIcon,
        // color : '#e23237',
        color : '#b52e31',
        active : false,
    },
    {
        value : 'vuejs',
        name : 'VueJS',
        url : vueplain,
        icon : vueIcon,
        color : '#41b883',
        active : false,
    },
    {
        value : 'javascript',
        name : 'Javascript',
        url : jsplain,
        icon : jsIcon,
        // color : '#f0db4e',
        color : '#fed401',
        active : false,
    }
]

export const profileData = {
    fname : 'Danmark',
    lname : 'Quiñones',
    fullName : 'Danmark P. Quiñones',
    nickName : 'Dan',
    age : 24 , 
    location : 'Manila , Philippines',
    contact : '+63 906 509 2731',
    motto: 'Never judge someone based on a season.',
    email : 'danmarkquinones@gmail.com',
    skillsFE : ['React','React Native','Javascript','Angular','Vue','CSS'],
    skillsBE : ['PHP/Laravel','MySQL','Python'],
    designingLib : ['Material UI','Ant Design','Bootstrap'],
    hobbies:['Drawing' , 'Handcrafts' , 'Playing Online Games' , 'Watching Anime'],
    intro :"YOSH!! Welcome to my page 👋😁. I’m Danmark, but people call me “Dan.” I’m a professional Front End developer, and I specialize in creating React applications that just work across all platforms and browsers. I care about building interfaces that are usable and pleasant for the most number of people possible."
}

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
        responsibilities:[
            "Teach Mathematics, statistics, and other basic subjects.",
            "Encode grades of the students and make reports as per parent request.",
            "Prepare worksheets and answer keys for teaching materials.",
            "Give educational assessment base on their scores.",
            "Assist the admin in making schedules for classes and teachers."
        ]
    }
]