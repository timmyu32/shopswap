import { 
    Flex,
    Image,
    Textarea,
    Grid,
    Select,
    Input,
    Box,
    Button,
    Stack,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    List,
    ListItem,
    ListIcon,
    useDisclosure,
} from '@chakra-ui/react';
import { BsChevronDoubleDown, BsChevronDoubleRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListingProfileHeader from '../components/ListingProfileHeader';


const DropdownMenu = ({ categories, onSelect, bg }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleClick = (category) => {
      if (category.children.length === 0) {
        onSelect(category);
      } else {
        setSelectedCategory(category);
      }
    };
  
    return (
      <List spacing={2} bg={bg}>
        {categories.map((category) => (
          <ListItem
            key={category.id}
            onClick={() => handleClick(category)}
            _hover={{ backgroundColor: 'gray.100' }}
          > 
            <Flex>
                
            {selectedCategory === category ? <BsChevronDoubleDown/> : <BsChevronDoubleRight/>}
            {/* <ListIcon icon={selectedCategory === category ? <BsChevronDoubleDown/> : <BsChevronDoubleRight/>} /> */}
            {category.title}
            </Flex>

          </ListItem>
        ))}
        {selectedCategory && (
            <Box pt={12}>
              <DropdownMenu bg='gray.200' categories={selectedCategory.children} onSelect={onSelect} />
            </Box>
        )}
      </List>
    );
  };






const SellItem = () => {
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [error, setError] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState([  {    title: "Shoes",    children: [      {        title: "Sneakers",        children: [],
},
{
  title: "Sandals",
  children: [],
},
{
  title: "Boots",
  children: [],
},
],
},
{
title: "Bottoms",
children: [
{
  title: "Jeans",
  children: [],
},
{
  title: "Pants",
  children: [],
},
{
  title: "Leggings",
  children: [],
},
{
  title: "Jean Shorts",
  children: [],
},
{
  title: "Sport Shorts",
  children: [],
},
{
  title: "Other Shorts",
  children: [],
},
],
},
{
title: "Shirts",
children: [
{
  title: "Button Down",
  children: [],
},
{
  title: "Tee Shirt",
  children: [],
},
{
  title: "Blouse",
  children: [],
},
{
  title: "Going Out Top",
  children: [],
},
{
  title: "Graphic Tees",
  children: [],
},
],
},
{
title: "Dresses",
children: [
{
  title: "Maxi",
  children: [],
},
{
  title: "Midi",
  children: [],
},
{
  title: "Mini",
  children: [],
},
{
  title: "Bodycon",
  children: [],
},
],
},
{
title: "Outerwear",
children: [
{
  title: "Coats",
  children: [],
},
{
  title: "Jackets",
  children: [],
},
{
  title: "Sweater",
  children: [],
},
],
},
{
title: "Lounge",
children: [
{
  title: "Sweatpants",
  children: [],
},
{
  title: "Sweatshirts",
  children: [],
},
{
  title: "Pajamas",
  children: [],
},
],
},
{
title: "Accessories",
children: [
{
  title: "Hat",
  children: [],
},
{
  title: "Bags",
  children: [],
},
{
  title: "Jewelry",
  children: [],
},
],
},
        ])

    const handleSelect = (category) => {
        setSelectedCategory(category);
        onClose();
      };

    const handleFileChange = (event) => {
        const photos = Array.from(event.target.files);
        if (photos.length >= 2 && photos.length <= 8) {
            setSelectedPhotos(photos);
            setError("");
        } else {
            setError("Please select between 2 and 8 high quality square photos.");
        }
    };

  return (
    <div>
        <Header/>
        <ListingProfileHeader/>
        {/* <Flex direction={'column'}>
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
            </Flex>
        </Flex> */}
        <Stack spacing={4}>
            <Box
                as="label"
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px solid gray"
                height="100px"
                width="100%"
                fontSize="sm"
            >
                <Input
                type="file"
                multiple
                onChange={handleFileChange}
                style={{ display: "none" }}
                />
                <Text>Select 2-8 high quality square photos</Text>
                <IconButton
                icon="add"
                size="sm"
                ml={2}
                variant="outline"
                aria-label="Add photos"
                />
            </Box>
            {error && <Text color="red">{error}</Text>}
            {selectedPhotos.length > 0 && (
                <Stack spacing={4} mb={6}>
                {selectedPhotos.map((photo, index) => (
                    <Box key={index} height="100px" width="100px">
                    <img
                        src={URL.createObjectURL(photo)}
                        alt={`Photo ${index + 1}`}
                        height="100%"
                        width="100%"
                    />
                    </Box>
                ))}
                </Stack>
            )}
        </Stack>
        <Flex direction={'column'} p={2}>
            <Flex flex={1} mb={2} mt={6}>
                <Textarea placeholder="Enter additional comments about what you're selling"/>
            </Flex>
            <Flex flex={1} direction={'column'}>
                <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                    <Text>Price</Text>
                    <Input type='number' w='30%'/>
                </Flex>
            </Flex>
            <Flex flex={1} direction={'column'}>
                <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                    <Text>Bought for</Text>
                    <Input type='number' w='30%' />
                </Flex>
            </Flex>
            <Flex flex={1} direction={'column'}>
                <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                    <Text>Condition</Text>
                    <Box>
                        <Select defaultValue={'New with tags'}>
                            <option value="New with tags">New with tags</option>
                            <option value="New without tags">New without tags</option>
                            <option value="Used - excellent condition">Used - excellent condition</option>
                            <option value="Used - good">Used - good</option>
                            <option value="Used - fair">Used - fair</option>
                        </Select>
                    </Box>
                </Flex>
            </Flex>
            <Flex flex={1} direction={'column'}>
                <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                    <Text>Brand</Text>
                    <Input placeholder='Brand' w='40%'/>
                </Flex>
            </Flex>
            <Flex flex={1} direction={'column'}>
                <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                    <Text>Size</Text>
                    <Input w='30%' />
                </Flex>
            </Flex>
            <Flex flex={1} direction={'column'}>
                <Flex justifyContent={'space-between'} borderBottom={'1px solid black'}>
                    <Text>Category</Text>
                    <>  
                        {!selectedCategory && <Text onClick={onOpen} p={2}>Select category</Text>}
                        
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                            <ModalHeader>Select category</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <DropdownMenu categories={categories} onSelect={handleSelect} />
                            </ModalBody>
                            </ModalContent>
                        </Modal>
                        {selectedCategory && (
                            <Text onClick={onOpen} p={2}>{selectedCategory.title}</Text>
                        )}
                    </>
                </Flex>
            </Flex>
            <Flex flex={1} direction={'column'}>
                <Button bg='#7FA9F0' color='white'>List Your Item</Button>
            </Flex>
            
        </Flex>
        <Footer/>
        
    </div>
  )
}

export default SellItem