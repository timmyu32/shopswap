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
  import NestedMenu from "../components/NestedMenu";
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  
  const menu = [  {    title: "Shoes",    children: [      {        title: "Sneakers",        children: [],
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
];

  
  
  const CategorySearchPage = () => {
    return (
      <div>
          <Header/>
          <Flex minH={'100vh'} direction={'column'}>
            <Text m='0 auto'>Search Categories</Text>
            <InputGroup p={4}>
              <Input w='80%' m={2} m='0 auto' placeholder="Search...." bg='white' border='1px solid black' color='black'/>
              <InputRightAddon
                _hover={{ cursor: 'pointer'}}  
              >
                <Text>Search</Text>
              </InputRightAddon>            
            </InputGroup>
            <hr/>
            <NestedMenu menu={menu}/>  
            
    
          </Flex>
          <Footer/>
      </div>
    )
  }
  
  export default CategorySearchPage