import React , {useState , useEffect} from "react";
// import {HashRouter as Router} from "react-router-dom";
// import {BrowserRouter as Router} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Main from './components/revised_v3/Main'
import 'antd/dist/antd.css';


function App() {
 
  return (
    <div className="App">
      {/* <Router basename={"/"}> */}
          <Main/>
      {/* </Router> */}
    </div>
  );
}

export default App;
