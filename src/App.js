import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Main from './components/Main'
import {BrowserRouter as Router} from "react-router-dom";
import 'antd/dist/antd.css';
import {ThemeContextProvider} from './components/context/themeContext'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Router basename={"/midorenji-v3"}>
          <Main/>
        </Router>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
