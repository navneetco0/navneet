import { Box, Button, Center, Flex, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { Send } from "../../Assets/SVG/Send"

export const Form = () => {
    const [form, setForm] = useState({
        email:'',
        name:'',
        message:''
    });

    const handleform = (e)=>{
       setForm({...form, [e.target.id]:e.target.value});
    }
    const handleSubmit = ()=>{
        
    }

  return (
    <form action="" onChange={handleform}>
      <Flex w="100%" gap="2%" flexDir={['column', 'row']}>
        <Box w={['100%', '49%']} mb="20px">
          <label>Email</label>
          <Input id="email" mt={'10px'} placeholder="example@gmail.com" />
        </Box>
        <Box w={['100%', '49%']} mb="20px">
          <label>Name</label>
          <Input id="name" mt="10px" placeholder="John Doe" />
        </Box>
      </Flex>
      <Box mb="20px">
        <label>Message</label>
        <Textarea id="message" mt="10px" placeholder="Hey there!" h={'200PX'} />
      </Box>
      <Button
        ml="auto"
        color="white"
        bg="#2424FF"
        colorScheme={'messenger'}
        display="block"
        onClick={()=>handleSubmit()}
      >
        <Center>
          <Box h="14px">
            <Send />
          </Box>
          Submit
        </Center>
      </Button>
    </form>
  )
}
