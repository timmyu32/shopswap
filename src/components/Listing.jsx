import { 
    Text,
    Flex,
    Box,
    Image,
} from '@chakra-ui/react';

const Listing = () => {
  return (
    <Flex m={2} p={4}>
        <Box>
            <Image src={'https://media-photos.depop.com/b1/14970740/1433821955_e019f6de53e64759a7b7d19a2d6219bd/P0.jpg'}/>
            <Flex direction={'column'} textAlign={'left'} lineHeight={'105%'} pt={2}>
                <Text fontSize={'1.2rem'} fontWeight={500}>Title of Listing</Text>
                <Text fontSize={'1.2rem'} fontWeight={500}>Price</Text>
            </Flex>
            
        </Box>
    </Flex>
  )
}

export default Listing