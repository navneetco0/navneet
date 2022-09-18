import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Show,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { Send } from '../../Assets/SVG/Send'
import { Touch } from '../../Assets/SVG/Touch'
import { Heading } from '../Heading'

export const Contact = () => {
  return (
    <Box id="contact" w={['95%', '90%', '80%']} m="0 auto 60px" >
      <Heading text={'Contact'} />
      <Flex
        mt="80px"
        height={'fit-content'}
        alignItems="center"
        position={'relative'}
      >
        <Show above="987px">
          <Center
            flexDir={'column'}
            color="white"
            bg="#2424FF"
            borderRadius={'10px 0px 0px 10px'}
            p="8%"
          >
            <Box h="100px">
              <Touch />
            </Box>
            <Text fontSize={'20px'} fontWeight="700">
              Thank You
            </Text>
            <Text fontSize={'16px'}>Do You Have Any Queries?</Text>
          </Center>
        </Show>
        <Show below="987px">
          <Box borderRadius={'20px'} top="-20px" position={'absolute'} w="100%" bg="#2424FF" h={['500px','440px']}></Box>
        </Show>
        <Box
          zIndex={2}
          // flexGrow={["0","1"]}
          w={['calc(100% - 40px)']}
          boxShadow={'rgba(0, 0, 0, 0.5) 0px 5px 10px 0px'}
          p="30px"
          borderRadius={'10px'}
          bg="white"
          m="auto"
          overflow={'hidden'}
        >
          <form action="">
            <Flex w="100%" gap="2%" flexDir={['column', 'row']}>
              <Box w={["100%","49%"]} mb="20px">
                <label>Email</label>
                <Input mt={'10px'} placeholder="example@gmail.com" />
              </Box>
              <Box w={["100%","49%"]} mb="20px">
                <label>Name</label>
                <Input mt="10px" placeholder="John Doe" />
              </Box>
            </Flex>
            <Box mb="20px">
              <label>Message</label>
              <Textarea mt="10px" placeholder="Hey there!" h={'200PX'} />
            </Box>
            <Button
              ml="auto"
              color="white"
              bg="#2424FF"
              colorScheme={'messenger'}
              display="block"
            >
              <Center>
                <Box h="14px">
                  <Send />
                </Box>
                Submit
              </Center>
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}
