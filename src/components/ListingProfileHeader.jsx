import { 
    Box, 
    Flex,
    Text,
    Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ListingProfileHeader = (props) => {
  return (
    <Flex id='container' direction={'column'} mt={-8} p={2}> 
        <Flex>
            <Flex flex={1} p={2} >
                <Link to="/profile/user1234">
                    <Image borderRadius={'50%'} src={'https://media-photos.depop.com/b0/1308492/930895694_509b6ad7e1614709a99460748e5a7d96/U1.jpg'}/>
                </Link>
            </Flex>
            <Flex flex={9} direction='column' p={2} textAlign={'left'} mt={1}>
                <Link to="/profile/user1234">
                    <Text fontWeight={700}>User1234</Text>
                    {props.mobile ?
                    <></>
                    :
                    <Text fontWeight={500} color='gray.500'>@user_1234</Text>
                    }
                 </Link>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default ListingProfileHeader
