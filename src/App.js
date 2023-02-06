import Discover from "./pages/Discover";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import SearchPage from './pages/SearchPage';
import CategorySearchPage from "./pages/CategorySearchPage";
import Listing from "./pages/Listing";
import SellItem from "./pages/SellItem"
import AboutUs from "./pages/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Discover/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/signup' exact element={<Signup/>}/>
          <Route path='/profile/:user' exact element={<Profile/>}/>
          <Route path='/item/:itemID' exact element={<Listing/>}/>
          <Route path='/sell' exact element={<SellItem/>}/>
          <Route path='/about-us' exact element={<AboutUs/>}/>
          <Route path='/search/user' exact element={<SearchPage/>}/>
          <Route path='/search/category' exact element={<CategorySearchPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
