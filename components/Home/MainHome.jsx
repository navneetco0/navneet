import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import { GitHub } from '../../Assets/SVG/GitHub'
import { Linkedin } from '../../Assets/SVG/Linkedin'
import { Triangle } from '../../Assets/SVG/Triangle'
import { Heading } from '../Heading';
import { Things } from "./Things";

const MainHome = () => {
  return (
    <Box
      id="home"
      w={['90%', '95%', '95%', '80%']}
      m="auto"
      pt={['40px', '40px', '210px']}
    >
      <Triangle />
      <Flex
        flexDir={['column', 'column', 'row']}
        justifyContent="space-between"
        mb="100px"
      >
        <Box textAlign={['center', 'center', 'left']} zIndex={2}>
          <Text
            className="code"
            color="#383838"
            fontSize={'16px'}
            lineHeight="24px"
          >
            Hello, I'm
          </Text>
          <Text
            className="code"
            color="#383838"
            fontSize={'45px'}
            fontWeight="900"
          >
            NAVNEET KUMAR
          </Text>
          <Text className="code" color="#383838" fontSize="20px">
            A FULL-STACK WEB DEVELOPER
          </Text>
          <Button
            display={'block'}
            m={['20px auto', '20px auto', '20px auto 20px 0px']}
            w="fit-content"
            colorScheme={'messenger'}
            mt="20px"
            onClick={()=>window.open("https://drive.google.com/file/d/1S3aDW8lrid0zPRXgSu-k88eMrxDRVtrk/view?usp=sharing","_blank")}
            _hover={{ transition: 'transform 0.5s', transform: 'scale(1.05)' }}
            _active={{ transition: 'transform 0.5s', transform: 'scale(1)' }}
          >
            View Resume
          </Button>
          <Flex
            gap="20px"
            m={['20px auto', '20px auto', '20px auto 20px 0px']}
            w="fit-content"
          >
            <Box
            onClick={()=>window.open("https://github.com/navneetco0","_blank")}
              color={'#6d83f2'}
              _hover={{
                color: '#383838',
                cursor: 'pointer',
                transitionDuration: '2s',
              }}
            >
              <GitHub />
            </Box>
            <Box
            onClick={()=>window.open("https://www.linkedin.com/in/navneet-kumar-818654248/","_blank")}
              color={'#6d83f2'}
              _hover={{
                color: '#383838',
                cursor: 'pointer',
                transitionDuration: '2s',
              }}
            >
              <Linkedin />
            </Box>
          </Flex>
        </Box>
        <Box
          p={['10px', '30px 35px']}
          overflow="hidden"
          boxShadow={'rgba(0, 0, 0, 0.5) 0px 5px 10px 0px'}
          zIndex={2}
          borderRadius="10px"
          color="#6D83F2"
          fontSize={'0.8em'}
          lineHeight="30px"
          bg="#f8f8f8"
          height={'fit-content'}
        >
          <pre className="code">
            1&nbsp;&nbsp;class <b>Person</b> {'{'}{' '}
          </pre>
          <pre className="code">
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {'{'}
          </pre>
          <pre className="code">
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
            <b>Navneet Kumar</b>&quot;;
          </pre>
          <pre className="code">
            4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = &quot;
            <b>CODING</b>&quot;, &quot;<b>PROBLEM SOLVING</b>&quot;;
          </pre>
          <pre className="code">
            5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = new
            Date().getFullYear() - 2001;
          </pre>
          <pre className="code">6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'}'} </pre>
          <pre className="code">7&nbsp;&nbsp; {'}'} </pre>
        </Box>
      </Flex>
      <Heading text={"Things I love"}/>
      <Things/>
    </Box>
  )
}

export default MainHome
