import { 
    Box, 
    Flex,
    Text,
    Image,
    Grid,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ListingImages = () => {
  return (
    <Flex direction={'column'}>
        <Flex flex={1} mb={2}>
            <Image src='https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg'/>    
        </Flex> 
        <Flex>

            <Box>
                <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                    {[1,2,3,4].map((picture, index) => (
                    <Box key={index} mb={2}>
                        <Image src={'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg'}/>
                    </Box>
                    ))}
                </Grid>
            </Box>

            {/* <Flex flex={1}>
                <Image src=''/>
            </Flex>
            <Flex flex={1}>
                <Image src='https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg'/>
            </Flex>
            <Flex flex={1}>
                <Image src='https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg'/>
            </Flex>
            <Flex flex={1}>
                <Image src='https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg'/>
            </Flex> */}


        </Flex>
        
    </Flex>
  )
}

export default ListingImages
