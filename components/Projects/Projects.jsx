import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { Express } from '../../Assets/SVG/Express'
import { MongoDb } from '../../Assets/SVG/MongoDb'
import { NodeJs } from '../../Assets/SVG/NodeJs'
import { React } from '../../Assets/SVG/React'
import { ReactQuery } from '../../Assets/SVG/ReactQuery'
import { Redux } from '../../Assets/SVG/Redux'
import { Heading } from '../Heading'
import { GitHub } from '../../Assets/SVG/GitHub'
import Image from 'next/image'
import { AspectRatio } from '@chakra-ui/react'

export const Projects = () => {
  const projects = [
    {
      title: 'Weather app',
      description:
        'a web application for weather app where users can view atmospheric pressure, weather conditions, relative humidity, wind speed and direction, 48 hours weather forecast, and 7-days forecast.',
      type: 'this is a solo project built in 4 days',
      live: 'https://weatherappunq.netlify.app/',
      git: 'https://github.com/navneetco0/weatherapp.git',
      techstack: [
        { icon: <React />, text: 'react' },
        { icon: <Redux />, text: 'redux' },
        { icon: <ReactQuery />, text: 'react-query' },
      ],
      image: '/weatherapp.png',
    },
    {
      title: 'Uber Eats - clone',
      description:
        'Uber Eats is an online food ordering and delivery platform. Users can read menus, reviews and ratings, order, and pay for food',
      type: 'this was a collaborative project built in 6 days',
      responsibility:
        'My area of responsibility in this project was to build the Home page, Login and Signup Page, and the API.',
      live: 'https://ubereats-clone.herokuapp.com/',
      git: 'https://github.com/navneetco0/ubereats-clone.git',
      techstack: [
        { icon: <MongoDb />, text: 'mongodb' },
        { icon: <Express />, text: 'express' },
        { icon: <React />, text: 'react' },
        { icon: <NodeJs />, text: 'nodejs' },
        { icon: <Redux />, text: 'redux' },
      ],
      image: '/ubereats.png',
    },
    {
      title: 'Specmaker - clone',
      description:
        'Specmaker is an e-commerce web application of eyeglasses and contact lenses',
      type: 'this was a collaborative project built in 6 days',
      live: 'https://specmaker.netlify.app/',
      git: 'https://github.com/navneetco0/specmaker.git',
      responsibility:
        'My area of responsibility in this project was to build the Home page, Login and Signup Page, product page, and the API.',
      techstack: [
        { icon: <React />, text: 'react' },
        { icon: <Redux />, text: 'redux' },
        { icon: <ReactQuery />, text: 'react-query' },
      ],
      image: '/specmakers.png',
    },
  ]
  return (
    <Box id="projects" w={['90%','90%','80%']} m="auto" pt="100px">
      <Heading text={'Projects'} />
      {projects.map((Element, index) => (
        <Flex
        bg={['white', 'transparent']}
          key={index}
          m="50px 0px"
          pos="relative"
          h={['initial', 'fit-content', 'fit-content', '400px']}
          alignItems={'center'}
          flexDir={[
            'column-reverse',
            'column-reverse',
            'column-reverse',
            'row',
          ]}
          borderRadius="10px"
          pt="10px"
          // _hover={{bg:'blue'}}
        >
          <Flex
            alignItems={'end'}
            justifyContent="flex-end"
            pos={'absolute'}
            bg="white"
            w={["100%","100%","100%","60%"]}
            h={["initial","500px","400px"]}
            borderRadius={'10px'}
            boxShadow={["","rgba(0, 0, 0, 0.5) 0px 0px 4px 0px"]}
            // _groupHover={{bg:'blue', transform:'scale(1.5)'}}
          >
            <Flex gap="10px" p="10px" color={'#2727ff'}>
              {Element.techstack.map((element, i) => (
                <Box
                  key={i}
                  height={'16px'}
                  _hover={{ color: '#383838', transitionDuration: '2s' }}
                >
                  {element.icon}
                </Box>
              ))}
            </Flex>
          </Flex>
          <Flex
            justifyContent={'space-between'}
            flexDir={'column'}
            zIndex="2"
            color="#383838"
            w={["100%", "100%", "100%","50%"]}
            borderRadius={'10px'}
            p="20px"
            h={['auto','400px']}
            // _groupHover={{bg:"blue", color:'white'}}
          >
            <Box>
              <Text mt={["0px", "50px", "50px", "0px"]} mb="15px" fontSize={'36px'} fontWeight="700">
                {Element.title}
              </Text>
              <Text fontSize={'18px'}>{Element.description}</Text>
              <Text m="10px 0px" fontSize={'18px'}>
                {Element.type}
              </Text>
              {Element.responsibility && (
                <Text fontSize={'18px'}>{Element.responsibility}</Text>
              )}
            </Box>
            <Flex gap="20px">
              <Button
                onClick={() => window.open(Element.live, '_blank')}
                bg="#2727ff"
                color="white"
                colorScheme={'messenger'}
              >
                Live
              </Button>
              <Box
                onClick={() => window.open(Element.git, '_blank')}
                h="35px"
                w="35px"
                color="#2727ff"
                cursor={'pointer'}
                _hover={{ color: 'Blue' }}
                _active={{ color: 'blue.600' }}
              >
                <GitHub />
              </Box>
            </Flex>
          </Flex>
          <AspectRatio
            w={["90%","90%","90%","50%"]}
            zIndex={'2'}
            borderRadius="8px"
            pos="relative"
            overflow={'hidden'}
            ratio={'1920 / 1100'}
            mb={['0px', '-50px', '-50px','0px']}
            // p="5px"
          >
            <Image width="1920px" height={'1080px'} src={Element.image} alt="" />
          </AspectRatio>
        </Flex>
      ))}
    </Box>
  )
}
