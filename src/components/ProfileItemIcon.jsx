import { 
    Flex,
    Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProfileItemIcon = (props) => {
  return (
    <Flex>
        <Link to='/item/12345'>
            <Image src={props.src}/>
        </Link>
    </Flex>
  )
}

export default ProfileItemIcon
