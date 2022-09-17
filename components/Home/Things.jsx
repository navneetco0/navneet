import { Box, Center, Circle, Flex, Text } from '@chakra-ui/react'
import { Code } from '../../Assets/SVG/Code'
import { Javascript } from '../../Assets/SVG/Javascript'
import { Languages } from '../../Assets/SVG/Languages'

export const Things = () => {
  const things = [
    {
      icon: <Code />,
      heading: 'FrontEnd',
      description:
        "I'm more front end focused and love to work with ReactJs, NextJs, ReactNative as well as pure HTML, CSS.",
    },
    {
      icon: <Javascript />,
      heading: 'Javascript',
      description:
        "I just extremely love javascript, I can't even express how much I love javascript with just a few lines.",
    },
    {
      icon: <Languages />,
      heading: 'New Languages',
      description: 'I Love to Learn New Languages and tools.',
    },
  ]
  return (
    <Flex mt="30px" justifyContent={'space-evenly'} flexWrap="wrap" gap="20px">
      {things.map((Element, index) => (
        <Box
          flexDir={'column'}
          p={['10px', '20px']}
          key={index}
          textAlign={'center'}
          maxWidth="300px"
          h="300px"
          bg="#f8f8f8"
          boxShadow={'rgba(0, 0, 0, 0.5) 0px 5px 10px 0px'}
          borderRadius="10px"
          zIndex="2"
          _hover={{bg:"#6d83f2", transform:'scale(1.1)', transition:'transform 1s'}}
          data-group
        >
          <Circle bg="#6d83f2" m={'auto'} size="100px" _groupHover={{bg:'white'}}>
            <Box h="40px" color={'white'} _groupHover={{color:'#6d83f2'}}>
              {Element.icon}
            </Box>
          </Circle>
          <Text
            fontFamily={'montserrat'}
            fontSize="21px"
            color="#6d83f2"
            m="20px 0px"
            _groupHover={{color:'white'}}
          >
            {Element.heading}
          </Text>
          <Text fontSize={'14px'}>{Element.description}</Text>
        </Box>
      ))}
    </Flex>
  )
}
