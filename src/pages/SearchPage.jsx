import { 
  Box, 
  Flex,
  Text,
  Image,
  InputGroup,
  InputRightAddon,
  Skeleton,
  Grid,
  Input
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";

const users = [
  {
    username: 'user2234',
    name: 'ShopSwapp User2234',
    profilePicture: 'https://media-photos.depop.com/b0/21403951/1266230658_d2ee4012e0a241bd9d630317f156605c/U1.jpg',
  },
  {
    username: 'user1245',
    name: 'ShopSwapp User1245',
    profilePicture: 'https://media-photos.depop.com/b0/34717656/1299388820_09440dd1b1af43f480eac883a89369a2/U1.jpg',
  },
  {
    username: 'user8796',
    name: 'ShopSwapp User8796',
    profilePicture: 'https://media-photos.depop.com/b0/11009073/943903541_448c52ab6b8e465d9a669d9ae8ee7744/U1.jpg',
  },
  {
    username: 'user3684',
    name: 'ShopSwapp User3684',
    profilePicture: 'https://media-photos.depop.com/b0/7870147/967717831_8eded051a8c14685a96d1b56f2791378/U1.jpg',
  },
  {
    username: 'user2234',
    name: 'ShopSwapp User2234',
    profilePicture: 'https://media-photos.depop.com/b0/21403951/1266230658_d2ee4012e0a241bd9d630317f156605c/U1.jpg',
  },
  {
    username: 'user1245',
    name: 'ShopSwapp User1245',
    profilePicture: 'https://media-photos.depop.com/b0/34717656/1299388820_09440dd1b1af43f480eac883a89369a2/U1.jpg',
  },
  {
    username: 'user8796',
    name: 'ShopSwapp User8796',
    profilePicture: 'https://media-photos.depop.com/b0/11009073/943903541_448c52ab6b8e465d9a669d9ae8ee7744/U1.jpg',
  },
  {
    username: 'user3684',
    name: 'ShopSwapp User3684',
    profilePicture: 'https://media-photos.depop.com/b0/7870147/967717831_8eded051a8c14685a96d1b56f2791378/U1.jpg',
  },
  {
    username: 'user2234',
    name: 'ShopSwapp User2234',
    profilePicture: 'https://media-photos.depop.com/b0/21403951/1266230658_d2ee4012e0a241bd9d630317f156605c/U1.jpg',
  },
  {
    username: 'user1245',
    name: 'ShopSwapp User1245',
    profilePicture: 'https://media-photos.depop.com/b0/34717656/1299388820_09440dd1b1af43f480eac883a89369a2/U1.jpg',
  },
  {
    username: 'user8796',
    name: 'ShopSwapp User8796',
    profilePicture: 'https://media-photos.depop.com/b0/11009073/943903541_448c52ab6b8e465d9a669d9ae8ee7744/U1.jpg',
  },
  {
    username: 'user3684',
    name: 'ShopSwapp User3684',
    profilePicture: 'https://media-photos.depop.com/b0/7870147/967717831_8eded051a8c14685a96d1b56f2791378/U1.jpg',
  },
  {
    username: 'user2234',
    name: 'ShopSwapp User2234',
    profilePicture: 'https://media-photos.depop.com/b0/21403951/1266230658_d2ee4012e0a241bd9d630317f156605c/U1.jpg',
  },
  {
    username: 'user1245',
    name: 'ShopSwapp User1245',
    profilePicture: 'https://media-photos.depop.com/b0/34717656/1299388820_09440dd1b1af43f480eac883a89369a2/U1.jpg',
  },
  {
    username: 'user8796',
    name: 'ShopSwapp User8796',
    profilePicture: 'https://media-photos.depop.com/b0/11009073/943903541_448c52ab6b8e465d9a669d9ae8ee7744/U1.jpg',
  },
  {
    username: 'user3684',
    name: 'ShopSwapp User3684',
    profilePicture: 'https://media-photos.depop.com/b0/7870147/967717831_8eded051a8c14685a96d1b56f2791378/U1.jpg',
  },
]


const SearchPage = (props) => {
  return (
    <div>
        <Header/>
        <Flex minH={'100vh'} direction={'column'}>
          <Text m='0 auto' fontWeight={900} fontSize='1.5rem'>Search for ShopSwapp users</Text>
          <InputGroup p={4}>
            <Input w='80%' m={2} m='0 auto' placeholder="Search...." bg='white' border='1px solid black' color='black'/>
            <InputRightAddon
              bg='#7FA9F0'
              color='white'
              _hover={{ cursor: 'pointer'}}  
            >
              <Text color='white'>Search</Text>
            </InputRightAddon>            
          </InputGroup>
          <hr/>

          {users.map((elem, index) => {
                          return (
                          // <Skeleton isLoaded={dataLoaded}>
                          <Link to={`/profile/${elem.username}`} >
                            <Flex flex={1} maxH={'4rem'} p={2} mb={2}  bg={index%2==0?'gray.200':""}>
                              <Flex flex={1} height={'min-content'} >
                                <Image borderRadius={'50%'} w={'3rem'} h={'3rem'} src={elem.profilePicture}/>
                              </Flex>
                              <Flex flex={4}  height={'min-content'} direction={'column'} >
                                <Text fontWeight={'700'}>{elem.name}</Text>
                                <Text>@{elem.username}</Text>
                              </Flex>
                            </Flex>
                            </Link>
                          // </Skeleton>
                          )
                        })}  
          






        </Flex>
        <Footer/>
    </div>
  )
}

export default SearchPage