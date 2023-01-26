import Discover from "./pages/Discover";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Discover/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/signup' exact element={<Signup/>}/>
          <Route path='/profile/:user' exact element={<Profile/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
