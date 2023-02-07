import { 
    Box, 
    Flex,
    Text,
    InputGroup,
    InputRightAddon,
    Button,
    Input,
} from '@chakra-ui/react';
// import { useRecoilState } from 'recoil';
import { useRef, useState } from 'react';
// import axios from 'axios';
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
// import { userAtom } from '../recoil/userAtoms';


const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const history = useNavigate();

//   const [_, setUser] = useRecoilState(userAtom);

  const [showPassword, setShowPassword] = useState(false);
  const [isDataLoading, setDataLoading] = useState(false);
  const [err201, seterr201] = useState(false);
  const [errNetwork, seterrNetwork] = useState(false);


  const handleClick = () => {
    // dispatch(loginStart())
    //   setDataLoading(true);
         
    //   axios.post('https://retainlysms-backend.herokuapp.com' + "/api/login", {
    //       email: emailRef.current.value.trim(),
    //       password: passwordRef.current.value.trim(),
    //   }).then(res => {
    //     seterr201(false);
    //     setUser(res.data.user)
    //     setDataLoading(false);
    //     history('/dashboard/reviews')
    //   }).catch(err => {
    //     seterr201(true);
    //     setDataLoading(false);
    //   });

  }


  return (
    <Box>
        <Box w='80%' margin='0 auto' mt='15vh'>
          <Flex direction='column' color='#293051'>
              <Text mb={4} color="#7FA9F0" textAlign='center' fontSize="2rem" fontWeight="900">Shop Swapp</Text>
              <Text textAlign='center' fontWeight='600' fontSize='1.5rem'>Sign in</Text>
              {err201 && 
                <Box p={4} textAlign='center'>
                  <Text color='red.300'>Something went wrong. Check your inputs and try again.</Text>  
                </Box>
              }
              
              <Box mb={4}>
                <Flex justifyContent='space-between'>
                  <Text>Email</Text>
                </Flex>
                <Input ref={emailRef}/>
              </Box>

              <Box mb={4}>
                <Flex justifyContent='space-between'>
                  <Text>Password</Text>
                  <Text>Forgot username?</Text>
                </Flex>
                <InputGroup>
                  <Input 
                    ref={passwordRef}                   
                    type={showPassword?'':'password'} 
                  />
                  <InputRightAddon
                    _hover={{ cursor: 'pointer'}}  
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FaRegEye/>
                  </InputRightAddon>              
                </InputGroup>
              </Box>
              <Box>
                <Link to='/profile/user1234'>
                    <Button 
                    isLoading={isDataLoading}
                    _hover={{ bg: '#4d5085' }} 
                    bg="#7FA9F0"
                    w='100%' 
                    color='white' 
                    fontWeight='500' 
                    fontSize='1.1rem'
                        onClick={() =>handleClick()}
                    >
                    SIGN IN
                    </Button>
                </Link>
                
                <Link to='/signup' >
                  <Text textAlign='center' margin='0 auto' w='100%'>Don't have an account yet? Sign up</Text>
                </Link>
              </Box>
          </Flex>
        </Box>
    </Box>
  )
}

export default Login