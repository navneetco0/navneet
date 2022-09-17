import { Flex, Text } from '@chakra-ui/react'
import { useScrollnav } from '../../../Hooks/useScrollnav'

export default function NavTablet  ({ texts })  {
  return (
    <Flex
      pos="fixed"
      bottom="0"
      left="0"
      w="100%"
      p="13px"
      justifyContent={'space-around'}
      boxShadow={'rgba(0, 0, 0, 0.2) 0px 2px 5px 2px'}
      zIndex="3"
      bg="white"
    >
      {texts.map((Element, index) => (
        <Text key={index} onClick={()=>useScrollnav(Element)} color="#6D83F2" _hover={{color:'#383838', cursor:'pointer', transitionDuration:'2s'}}>{Element}</Text>
      ))}
    </Flex>
  )
}
