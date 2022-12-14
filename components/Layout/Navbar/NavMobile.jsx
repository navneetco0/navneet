import { Button, Center, Circle, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Menu } from "../../../Assets/SVG/Menu"
import { scrollnav } from "../../../Hooks/scrollnav"

export default function NavMobile ({texts}){
    const [expand, setExpand] = useState(false)
    return (
        <Center pos="fixed"  bottom="40px" right="10%" cursor={'pointer'}  zIndex="3">
            <Circle w="80px" h="80px" bg="#2424FF"  _hover={{transition:'transform 0.5s', transform:'scale(1.1)', boxShadow:'rgba(255, 255, 255, 1) 0 0 2px 2px'}} _active={{transform:'scale(0.9)'}} onClick={()=>setExpand(!expand)}>
               <Menu/>
            </Circle>
            {expand&&<Flex pos="absolute" bottom={'90px'} flexDir="column" gap='10px'>
                {texts.map((Element, index)=> <Button bg="#2424FF" onClick={()=>scrollnav(Element)} key={index} colorScheme="blue">{Element}</Button>)}
            </Flex>}
        </Center>
    )
}