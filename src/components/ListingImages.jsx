import { 
    Box, 
    Flex,
    Text,
    Image,
    Grid,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ListingImages = (props) => {
    const imgs = [
        'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg',
        'https://media-photos.depop.com/b1/21403951/1435697134_c5748a50190b42d2bbeb1d276a367e6f/P0.jpg',
        'https://media-photos.depop.com/b1/21403951/1435697145_bc69f1124e2e45c2ad3b0d967cc579b4/P0.jpg',
        'https://media-photos.depop.com/b1/21403951/1435697097_da915da358b846e89c497cf0395dde9e/P0.jpg',
    ]

    const [selectedImg, setSelectedImg] = useState(imgs[0])




  return (
    <Flex direction={'column'}>
        <Flex flex={1} mb={2}>
            <Image src={selectedImg} maxWidth={props.mobile?"":'30rem'} maxHeight={props.mobile?"":'30rem'} margin='0 auto'/>    
        </Flex> 
        <Flex>

            <Box p={props.mobile?0:4}>
                <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                    {imgs.map((picture, index) => (
                    <Box key={index} mb={2}>
                        <Image src={picture} onClick={()=>setSelectedImg(imgs[index])}/>
                    </Box>
                    ))}
                </Grid>
            </Box>
        </Flex>
        
    </Flex>
  )
}

export default ListingImages
