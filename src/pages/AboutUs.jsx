import { 
    Box, 
    Flex,
    Text,
    Image,
    Grid,
} from '@chakra-ui/react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <Flex direction='column'>
        <Header/>
        <Flex direction='column' p={4}>
            <Text textAlign={'center'} fontSize={'2rem'} fontWeight={'800'}>About Us</Text>
            <Flex>
                <Flex direction='column' flex={1} alignItems={'center'} p={6} minW={'350px'}> 
                    <Image maxWidth={'40%'}src="./assets/images/IMG_5304.JPG"/>
                    <Text m='0 auto' fontWeight={'600'}>Mikayla Crowley</Text>
                    <Text>Hello I am Mikayla and I am a Biomedical Engineering senior at Boston University. I am also a part of the field hockey team and a typical outfit of the day for me is leggings and a sweatshirt. I hate shopping but I always want cute clothes for going out on weekends or fancy dinners. I have also been extremely conservative with the way I spend my money so I am always looking for deals. I am so excited to share Shop Swapp with all of you so you can find some deals too!</Text>
                </Flex>
            </Flex>
            <Flex>
                <Flex direction='column' flex={1} alignItems={'center'} p={6} minW={'350px'}>
                    <Image maxWidth={'40%'} src="./assets/images/IMG_5303.JPG"/>
                    <Text m='0 auto' fontWeight={'600'}>Katie Hill</Text>
                    <Text> Hello, I am Katie! I am a senior at Boston University. I'm a Biomedical Engineer major and am a member of the Alpha Phi Chapter at Boston University. I love to wear new clothes and dresses for upcoming events. However, I struggle with the clutter of all of these clothes in my closet. Although fast fashion is an easy way to get the newest fads, thrifting has become a hobby of mine. Transforming one of my favorite hobbies to be more sustainable is very important as our climate is currently in jeopardy. I want to make thrifting more mainstream so we can all continue to shop while saving the planet! </Text>

                </Flex>
            </Flex>
            <Text textAlign={'center'} fontSize={'2rem'} fontWeight={'800'}>Our Story</Text>
            <Flex p={6}>
                <Text>Mikayla and Katie were asked to the same formal in the fall of 2021 and they both had different problems with finding a dress. Katie was struggling to decide between 4 dresses and Mikayla was struggling to find an option. With two hours until the formal, there was no time for Mikayla to buy a new dress.  In this scenario Mikayla knew who to contact: Katie. After scrummaging through Katie’s closet, Mikayla stumbled upon a big box of clothes Katie was planning to sell. Mikayla then found the perfect dress and offered to buy it off of Katie right then and there. Katie and Mikayla then happily danced their night away in their dresses.</Text>
            </Flex>
            <Flex p={6}>
                <Text>Our website is designed to fix this exact problem. We want to connect students within the same campus to buy and sell clothes to each other without the hassle of shipping or thrifting in store.  This is an affordable and sustainable option for someone wanting to find the perfect dress or new party top just steps away from their dorm.</Text>
            </Flex>

            

        </Flex>
        <Footer/>
    </Flex>
  )
}

export default AboutUs