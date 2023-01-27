import Header from "../components/Header";
import Footer from "../components/Footer";
import ListingProfileHeader from '../components/ListingProfileHeader';
import ListingImages from '../components/ListingImages';
import ListingDetails from '../components/ListingDetails';

const Listing = () => {
  return (
    <div>
        <Header/>
        <ListingProfileHeader/>
        <ListingImages/>
        <ListingDetails/>


        <Footer/>
        
    </div>
  )
}

export default Listing