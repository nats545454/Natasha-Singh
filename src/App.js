import "./App.css";
import Homee from "./pages/Homee";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
			  	<Route exact path="/" element={<Homee/>}/>
          <Route exact path="/SignUp" element={<SignUp/>} />
			  </Routes>
    </Router>
    </div>
  );
}

export default App;