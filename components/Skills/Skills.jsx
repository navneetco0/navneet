import { Box, Center, Circle, Flex, Grid, Square, Text } from '@chakra-ui/react'
import { CSS } from '../../Assets/SVG/CSS'
import { Express } from '../../Assets/SVG/Express'
import { Git } from '../../Assets/SVG/Git'
import { HTML } from '../../Assets/SVG/HTML'
import { Javascript } from '../../Assets/SVG/Javascript'
import { MongoDb } from '../../Assets/SVG/MongoDb'
import { NextJs } from '../../Assets/SVG/NextJs'
import { NodeJs } from '../../Assets/SVG/NodeJs'
import { React } from '../../Assets/SVG/React'
import { ReactQuery } from '../../Assets/SVG/ReactQuery'
import { Redux } from '../../Assets/SVG/Redux'
import { Heading } from '../Heading'

export const Skills = () => {
  const skills = [
    { icon: <MongoDb />, text: 'MongoDb' },
    { icon: <Express />, text: 'express' },
    { icon: <React />, text: 'React' },
    { icon: <NodeJs />, text: 'NodeJs' },
    { icon: <HTML />, text: 'HTML' },
    { icon: <CSS />, text: 'CSS' },
    { icon: <Javascript />, text: 'JavaScript' },
    { icon: <NextJs />, text: 'NextJs' },
    { icon: <React />, text: 'React Native' },
    { icon: <Redux />, text: 'Redux' },
    { icon: <ReactQuery />, text: 'React Query' },
    { icon: <Git />, text: 'Github' },
  ]
  return (
    <Box id="skills" pt="100px" >
      <Heading text={'Skills'} />
      <Grid
        color="#2424FF"
        templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)', 'repeat(6, 1fr)']}
        gap="20px"
        mt="40px"
      >
        {skills.map((Element, index) => (
          <Center flexDirection={'column'} key={index}>
            <Square flexDir={'column'} _hover={{bg:"#2424FF", color:"white", transitionDuration:'2s', borderRadius:'10px'}} p="5px" size="110px">
              <Box maxW="120px" h="40px">
                {Element.icon}
              </Box>
              <Text fontSize="16px" fontWeight={'500'}>
                {Element.text}
              </Text>
            </Square>
          </Center>
        ))}
      </Grid>
    </Box>
  )
}
