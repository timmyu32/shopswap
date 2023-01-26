import { 
    Box, 
    Flex,
    Text,
    Image,
} from '@chakra-ui/react';
import { BsFillBagCheckFill } from 'react-icons/bs'

const ProfileHeader = () => {
  return (
    <Flex id='container' direction={'column'} mt={-8} p={2}> 
        <Flex>
            <Flex flex={1} p={2}>
                <Image borderRadius={'505'} src={'https://media-photos.depop.com/b0/1308492/930895694_509b6ad7e1614709a99460748e5a7d96/U1.jpg'}/>
            </Flex>
            <Flex flex={2} direction='column' p={2}>
                <Text fontWeight={700}>User1234</Text>
                <Text color='gray'>@shopswappuser</Text>
                <Text fontWeight={500} mb={4}>star rating (29)</Text>
                <Flex>
                    <Box mt={1}>
                        <BsFillBagCheckFill/>
                    </Box>
                    <Text>&nbsp;37 sold</Text>
                </Flex>
            </Flex>
        </Flex>

        <Flex p={2}>
            <Text>
                This is where the user's bio will appear.
            </Text>
        </Flex>
       
      <hr />
    </Flex>
  )
}

export default ProfileHeader
