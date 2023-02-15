import Header from "../components/Header";
import DiscoverItems from "../components/DiscoverItems";
import Footer from "../components/Footer";


const Discover = (props) => {
  return (
    <div>
        <Header/>
        <DiscoverItems mobile={props.mobile}/>
        <Footer/>
    </div>
  )
}

export default Discover