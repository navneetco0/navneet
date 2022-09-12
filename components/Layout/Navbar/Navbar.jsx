import { Flex, Hide, Show } from "@chakra-ui/react"
import { NavDesktop } from "./NavDesktop"
import { NavMobile } from "./NavMobile"
import { NavTablet } from "./NavTablet";

export const Navbar = ()=>{
    const texts = ['home', 'about me', 'skills', 'projects', 'contact'];
    return (
        <>
          <Show above="768px">
             <NavDesktop texts={texts}/>
          </Show>
          <Show below="768px">
            <Hide below="480px">
              <NavTablet texts={texts}/>
            </Hide>
          </Show>
          <Show breakpoint="(max-width: 480px)">
             <NavMobile texts={texts}/>
          </Show>
        </>
    )
}