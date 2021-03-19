import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Main from './components/Main'
import {HashRouter as Router} from "react-router-dom";
import 'antd/dist/antd.css';
import {ThemeContextProvider} from './components/context/themeContext'
import {isMobile} from 'react-device-detect';
import LandingPage from "./components/revised_v3/LandingPage";


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Router basename={""}>
          {isMobile?
            <h2>Not AVAILABLE</h2>
            // :<Main/>
            :<LandingPage/>
          }
        </Router>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
