import { Box } from '@chakra-ui/react';
import { AboutMe } from '../components/AboutMe/AboutMe';
import  MainHome from '../components/Home/MainHome'

export default function Home() {
  return (
    <Box w='100%' h="100vh" pos={'relative'}  >
      <Box p="15px 0px"></Box>
      <MainHome/>
      <AboutMe/>
    </Box>
  )
}
