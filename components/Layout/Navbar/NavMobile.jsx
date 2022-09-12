import { Button, Center, Circle, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Menu } from "../../../Assets/SVG/Menu"

export const NavMobile = ({texts})=>{
    const [expand, setExpand] = useState(false)
    return (
        <Center pos="fixed"  bottom="40px" right="10%" cursor={'pointer'}>
            <Circle w="80px" h="80px" bg="#6D83F2"  _hover={{transition:'transform 0.5s', transform:'scale(1.1)', boxShadow:'rgba(255, 255, 255, 1) 0 0 2px 2px'}} _active={{transform:'scale(0.9)'}} onClick={()=>setExpand(!expand)}>
               <Menu/>
            </Circle>
            {expand&&<Flex pos="absolute" bottom={'90px'} flexDir="column" gap='10px'>
                {texts.map((Element, index)=> <Button key={index} colorScheme="blue">{Element}</Button>)}
            </Flex>}
        </Center>
    )
}