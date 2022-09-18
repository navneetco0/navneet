import { Text } from "@chakra-ui/react"

export const Heading = ({text})=>{
    return (
        <Text mt="100px" color="#2424FF" textAlign={'center'} fontSize="27px" fontWeight={900}>{text}</Text>
    )
}