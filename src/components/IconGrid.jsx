import { Grid, Box } from '@chakra-ui/react';
import ProfileItemIcon from './ProfileItemIcon';
const pictures = [
    {
        url: 'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg',
        alt: 'img not found'
    },
    {
        url: 'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg',
        alt: 'img not found'
    },
    {
        url: 'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg',
        alt: 'img not found'
    },
    {
        url: 'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg',
        alt: 'img not found'
    },
    {
        url: 'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg',
        alt: 'img not found'
    },
    {
        url: 'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg',
        alt: 'img not found'
    },
    {
        url: 'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg',
        alt: 'img not found'
    },
    {
        url: 'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg',
        alt: 'img not found'
    },
    {
        url: 'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg',
        alt: 'img not found'
    },
    {
        url: 'https://media-photos.depop.com/b0/1308492/1306985881_3803433e5b294bea9dadcd6d287fc1d4/P0.jpg',
        alt: 'img not found'
    },
]

const IconGrid = () => {
    return (
        <Box p={4}>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                {pictures.map((picture, index) => (
                <Box key={index} mb={2}>
                    <ProfileItemIcon src={picture.url}/>
                </Box>
                ))}
            </Grid>
        </Box>
        );
}

export default IconGrid