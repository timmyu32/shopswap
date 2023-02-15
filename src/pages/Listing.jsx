import Header from "../components/Header";
import Footer from "../components/Footer";
import ListingProfileHeader from '../components/ListingProfileHeader';
import ListingImages from '../components/ListingImages';
import ListingDetails from '../components/ListingDetails';
import { 
  Box, 
  Flex,
  Text,
  Image,
} from '@chakra-ui/react';


const Listing = (props) => {
  return (
    <Flex direction='column'>
        {props.mobile?
        <>
        <Header/>
        <ListingProfileHeader/>
        <ListingImages mobile={props.mobile}/>
        <ListingDetails/>
        <Footer/>
        </>
        :
        <>
          <Header/>
          <Flex felx={1}>
            <Flex flex={1}>
              <ListingImages mobile={props.mobile}/>
            </Flex>
            <Flex flex={1} direction={'column'} mt={'2rem'}>
              <ListingProfileHeader mobile={props.mobile}/>
              <ListingDetails/>
            </Flex>
          </Flex>
          <Footer/>
        </>
        }
        
    </Flex>
  )
}

export default Listing