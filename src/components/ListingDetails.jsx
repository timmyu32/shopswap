import { 
    Box, 
    Flex,
    Text,
    Image,
    Grid,
    Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ListingDetails = () => {
  return (
    <Flex direction={'column'} p={6} >
        <Flex flex={1} mb={2}>
            <Text fontWeight={600}>This is a space for additional any comments. This is a space for additional any comments. This is a space for additional any comments.</Text>
        </Flex>
        <Flex flex={1}>
            <Button
            ml={4}
            mr={4}
            _hover={{ bg: '#4d5085' }} 
            bg="#7FA9F0"
            w='100%' 
            color='white' 
            fontWeight='500' >Message seller</Button>
            <Button
            ml={4}
            mr={4}
            _hover={{ bg: '#4d5085' }} 
                    bg="#7FA9F0"
                    w='100%' 
                    color='white' 
                    fontWeight='500' >Buy Now</Button>
        </Flex>
        <Flex flex={1} direction={'column'}>
            <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                <Text>Price</Text>
                <Text>$1000</Text>
            </Flex>
        </Flex>
        <Flex flex={1} direction={'column'}>
            <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                <Text>Boight for</Text>
                <Text>$2000</Text>
            </Flex>
        </Flex>
        <Flex flex={1} direction={'column'}>
            <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                <Text>Condition</Text>
                <Text>New With Tags</Text>
            </Flex>
        </Flex>
        <Flex flex={1} direction={'column'}>
            <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                <Text>Brand</Text>
                <Text>ClothesBrand</Text>
            </Flex>
        </Flex>
        <Flex flex={1} direction={'column'}>
            <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                <Text>Size</Text>
                <Text>12</Text>
            </Flex>
        </Flex>
        <Flex flex={1} direction={'column'}>
            <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                <Text>Category</Text>
                <Text>Womens/Dress/Maxi</Text>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default ListingDetails
