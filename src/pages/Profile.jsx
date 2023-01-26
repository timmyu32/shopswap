import { Grid, Box } from '@chakra-ui/react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileHeader from "../components/ProfileHeader";
import ProfileItemIcon from "../components/ProfileItemIcon";
import IconGrid from '../components/IconGrid';

const Profile = () => {
  return (
    <div>
        <Header/>
        <ProfileHeader/>
        <IconGrid/>

        <Footer/>
        
    </div>
  )
}

export default Profile