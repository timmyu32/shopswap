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

const mql = window.matchMedia('(max-width: 480px)');

let mobileView = mql.matches;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Discover mobile={mobileView}/>}/>
          <Route path='/login' exact element={<Login mobile={mobileView}/>}/>
          <Route path='/signup' exact element={<Signup mobile={mobileView}/>}/>
          <Route path='/profile/:user' exact element={<Profile mobile={mobileView}/>}/>
          <Route path='/item/:itemID' exact element={<Listing mobile={mobileView}/>}/>
          <Route path='/sell' exact element={<SellItem mobile={mobileView}/>}/>
          <Route path='/about-us' exact element={<AboutUs mobile={mobileView}/>}/>
          <Route path='/search/user' exact element={<SearchPage mobile={mobileView}/>}/>
          <Route path='/search/category' exact element={<CategorySearchPage mobile={mobileView}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
