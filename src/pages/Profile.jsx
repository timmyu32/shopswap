import { Grid, Box } from '@chakra-ui/react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileHeader from "../components/ProfileHeader";
import ProfileItemIcon from "../components/ProfileItemIcon";
import IconGrid from '../components/IconGrid';

const Profile = (props) => {
  return (
    <div>
        <Header/>
        <ProfileHeader mobile={props.mobile}/>
        <hr/>
        <IconGrid mobile={props.mobile}/>

        <Footer/>
        
    </div>
  )
}

export default Profile