import { 
    Flex,
    Image,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProfileItemIcon = (props) => {
  return (
    <Flex>
        <Link to='/item/12345'>
            <Image src={props.src}/>
            <Text fontWeight={700}>$40</Text>
        </Link>
    </Flex>
  )
}

export default ProfileItemIcon
