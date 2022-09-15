import { Text } from "@chakra-ui/react"

export const Heading = ({text})=>{
    return (
        <Text color="#6D83F2" textAlign={'center'} fontSize="27px" fontWeight={900}>{text}</Text>
    )
}