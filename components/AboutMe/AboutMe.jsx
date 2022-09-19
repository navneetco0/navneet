import { Box, Circle, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { Heading } from '../Heading'

export const AboutMe = () => {
  const quotes = [
    'I always think worst cases.',
    'I try to work on myself instead of following another.',
    "I always say to myself, I've to work on myself.",
  ]
  return (
    <Box id="aboutme" position={'relative'} overflow="hidden" pt="100px">
      <Heading text={'About Me'} />
      <Box
        position={'absolute'}
        w={['180%', '120%']}
        left={['-40%', '-5%']}
        h={['1600px', '700px', '500px']}
        transform={'rotate(-3deg)'}
        bg="#2424FF"
        top="210px"
        // zIndex={'-1'}
      ></Box>
      <Flex
        w={['90%', '95%', '95%', '80%']}
        m="200px auto 100px"
        gap="10%"
        flexDirection={['column', 'column', 'row']}
        justifyContent={['center', 'center', 'space-between']}
        alignItems={['center', 'center', 'space-between']}
        zIndex="2"
      >
        <Circle
          border={'5px solid white'}
          overflow="hidden"
          size="225px"
          mb={['40px', '40px', '0px']}
          zIndex="2"
        >
          <Image
            width="225px"
            height="225px"
            src={'/avatar.jpeg'}
            alt="Navneet Kumar"
          />
        </Circle>
        <Box fontSize={'16px'} color="white" zIndex="2">
          <Text>
            My name is Navneet Kumar, I am a MERN stack graduate from Masai
            School, Bengaluru. I&apos;m a MERN Stack Development enthusiast. I
            realize within my first year in college, I am interested in pursuing
            tech skill where I could learn web development? My long-term goal
            goes on through small steps.
          </Text>
          <Text mt="15px">
            first I will master this field and I want to see myself as one of
            the best web developer. I built a lot of web applications and worked
            on 3 major collaborative projects in Masai School and Learned a of
            things like: communication, time-management, and teamwork. After
            months of rigorous training, here I am looking for an opportunity as
            a full-stack web developer.
          </Text>
        </Box>
      </Flex>
      <Flex mt="30px" justifyContent={'space-evenly'} flexWrap="wrap" gap="20px" color="#2424FF" mb={'20px'}>
        {quotes.map((Element, index) => (
          <Flex flexDir={'column'} justifyContent="space-between" gap="15px" p="20px" key={index}  bg="#f8f8f8" boxShadow={'rgba(0, 0, 0, 0.5) 0px 5px 10px 0px'} borderRadius="10px" zIndex="2">
            <Text fontSize={'16px'}>&quot;{Element}&quot;</Text>
            <Text fontFamily={'montserrat'} fontSize="12px" textAlign={'right'}>-Navneet Kumar</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  )
}
