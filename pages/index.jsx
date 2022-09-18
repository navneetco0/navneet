import { Box } from '@chakra-ui/react';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Contact } from '../components/Contact/Contact';
import  MainHome from '../components/Home/MainHome'
import { Projects } from '../components/Projects/Projects';
import { Skills } from '../components/Skills/Skills';

export default function Home() {
  return (
    <Box w='100%' minH="100vh" pos={'relative'}  >
      <Box p="15px 0px"></Box>
      <MainHome/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </Box>
  )
}
