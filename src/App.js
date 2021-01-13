import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Main from './components/Main'
import {BrowserRouter as Router} from "react-router-dom";
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <Router basename={"/midorenji-v3"}>
        <Main/>
      </Router>
    </div>
  );
}

export default App;
