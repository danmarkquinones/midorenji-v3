import Main from './components/Main'
import {BrowserRouter as Router} from "react-router-dom";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main/>
      </Router>
    </div>
  );
}

export default App;
