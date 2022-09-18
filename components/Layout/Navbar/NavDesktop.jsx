import { Box, Flex, Text } from '@chakra-ui/react'
import { scrollnav } from '../../../Hooks/scrollnav'
export default function NavDesktop ({ texts }) {

  return (
    <Flex pos="fixed" width="100%" top="0" p="13px" boxShadow={'rgba(0, 0, 0, 0.2) 0px 2px 5px 2px'} bg="#f8f8f8" zIndex="3">
      <Flex w="80%" m="auto">
        <Box></Box>
        <Flex ml="auto" gap="30px">
          {texts.map((Element, index) => (
            <Text key={index} onClick={()=>scrollnav(Element)} color="#2424FF" _hover={{color:'#383838', cursor:'pointer', transitionDuration:'2s'}}>{Element}</Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
