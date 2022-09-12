import { Box, Flex, Text } from '@chakra-ui/react'
export const NavDesktop = ({ texts }) => {
  return (
    <Flex pos="fixed" width="100%" p="13px" boxShadow={'rgba(0, 0, 0, 0.2) 0px 2px 5px 2px'}>
      <Flex w="80%" m="auto">
        <Box></Box>
        <Flex ml="auto" gap="30px">
          {texts.map((Element, index) => (
            <Text key={index} color="#6D83F2" _hover={{color:'#383838', cursor:'pointer', transitionDuration:'2s'}}>{Element}</Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
