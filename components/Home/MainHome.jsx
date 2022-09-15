import { Box, Flex } from '@chakra-ui/react'
import { Triangle } from '../../Assets/SVG/Triangle'

const MainHome = () => {
  return (
    <Box
      w={['70%']}
      m="auto"
      border={'1px solid black'}
      pt={['40px', '40px', '250px']}
    >
      <Triangle />
      <Flex justifyContent="space-between">
        <Box></Box>
        <Box
          p="30px 35px"
          boxShadow={'rgba(0, 0, 0, 0.5) 0px 5px 10px 0px'}
          bg="white"
          zIndex={2}
          borderRadius="10px"
          color="#6D83F2" 
          fontFamily={'"Montserrat", sans-serif'}      
        >
          <pre>
            1&nbsp;&nbsp;class <b>Person</b> {'{'}{' '}
          </pre>
          <pre>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {'{'}</pre>
          <pre>
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "
            <b>Navneet Kumar</b>";
          </pre>
          <pre>
            4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = "
            <b>CODING</b>", "<b>PROBLEM SOLVING</b>";
          </pre>
          <pre>
            5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = new
            Date().getFullYear() - 2001;
          </pre>
          <pre>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'}'} </pre>
          <pre>7&nbsp;&nbsp; {'}'} </pre>
        </Box>
      </Flex>
    </Box>
  )
}

export default MainHome
