import './App.css';
import Discover from "./pages/Discover";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Discover/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
