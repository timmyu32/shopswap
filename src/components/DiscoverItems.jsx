import { 
    Text,
    Flex,
} from '@chakra-ui/react';
import Listing from './Listing';


const DiscoverItems = () => {
  return (
    <Flex direction={'column'} flex={1}>
        <Text margin='0 auto' fontSize={'2rem'} fontWeight={800}>New Items</Text>
        <Flex direction={'row'} w={'100%'}  flex={1} wrap='wrap'>
            <Flex flex={1}  maxWidth={'24vw'} minWidth={'24vw'}>
                <Listing/>
            </Flex>
            <Flex flex={1} maxWidth={'24vw'} minWidth={'24vw'}>
                <Listing/>
            </Flex>
            <Flex flex={1} maxWidth={'24vw'} minWidth={'24vw'}>
                <Listing/>
            </Flex>
            <Flex flex={1} maxWidth={'24vw'} minWidth={'24vw'}>
                <Listing/>
            </Flex>
            <Flex flex={1} maxWidth={'24vw'} minWidth={'24vw'}>
                <Listing/>
            </Flex>
            <Flex flex={1} maxWidth={'24vw'} minWidth={'24vw'}>
                <Listing/>
            </Flex>
            <Flex flex={1} maxWidth={'24vw'} minWidth={'24vw'}>
                <Listing/>
            </Flex>

        </Flex>
    </Flex>
  )
}

export default DiscoverItems