import { 
    Box, 
    Flex,
    Center,
    Text,
    Button,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg='#ededed'>
      <hr />
      <Flex p={1} ml={6} mr={6} pb={6} justifyContent='space-between' pt={12}>  
        <Flex direction='column'>
        <Text fontSize="3xl" fontWeight="bold" color='#F27D93' mb={6}>
          ShopSwap
        </Text>
          <Text color='black' mb={6} fontWeight="500">Blah Blah Blah</Text>
          <Button bg='#F27D93'  color='white'>Call To Action</Button>
        </Flex>

        <Flex color='black' fontSize='0.8em' lineHeight="200%"  >

          <Flex direction='column' m={4}>
            <Text fontWeight='900'>Services</Text>
            <Text fontWeight='500'>Buying</Text>
            <Text fontWeight="500">Selling</Text>
          </Flex>
          <Flex direction='column' m={4}>
            <Text fontWeight='900'>Account</Text>
            <Text fontWeight="500">Sign up</Text>
            <Text fontWeight="500">Login</Text>
            <Text fontWeight="500">Forgot Password</Text>
            <Text fontWeight="500">Reset Password</Text>
          </Flex>

        </Flex>
      </Flex>
    </Box>
    
  )
}

export default Footer