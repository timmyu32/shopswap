import { 
    Box, 
    Flex,
    Text,
    Image,
    Grid,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ListingDetails = () => {
  return (
    <Flex direction={'column'} p={2}>
        <Flex flex={1} mb={2}>
            <Text fontWeight={600}>This is a space for additional any comments. This is a space for additional any comments. This is a space for additional any comments.</Text>
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
