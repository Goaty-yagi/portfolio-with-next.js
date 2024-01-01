import { useEffect } from "react";
import { GiHamburgerMenu, GiVintageRobot } from "react-icons/gi";
import { BsLayersHalf } from 'react-icons/bs'
import { ImBlog } from "react-icons/im";

import Link from "next/link";
import Theme from "./theme";
import { useRouter } from "next/router";
import {
  Box,
  Center,
  Flex,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import Logo from "./logo";

export default function Header() {
  
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });

  const configs = [
    {
      name:'POST',
      path:"/posts",
      icon:ImBlog
    },
    {
      name:'PROJECT',
      path:"/projects",
      icon:GiVintageRobot
    },
    {
      name:'ANIMATION',
      path:"/animations",
      icon:BsLayersHalf
    }
  ]
  function HamburgerMenu() {
    return (
      <Show breakpoint="(max-width: 750px)">
        <Menu>
          <MenuButton
            position={"absolute"}
            right="0"
            top="0"
            as={IconButton}
            aria-label="Options"
            icon={<GiHamburgerMenu />}
            variant="outline"
          ></MenuButton>
          <MenuList>
            {configs.map((e, index) => (
              <Link
              key={index}
              href={router.pathname === e.path ? {} : e.path}
              scroll={false}
            >
              <a
                onClick={(event) =>
                  router.pathname === e.path ? event.preventDefault() : null
                }
              >
                <MenuItem icon={<e.icon />}>{e.name}</MenuItem>
              </a>
            </Link>
            ))}
          </MenuList>
        </Menu>
      </Show>
    );
  }
  function NavBar() {
    return (
      <Show breakpoint="(min-width: 751px)">
        <Flex>
          {configs.map((e, index) => (
            <Link
            key={index}
            href={router.pathname === e.path ? {} : e.path}
            scroll={false}
          >
            <a
              onClick={(event) =>
                router.pathname === e.path ? event.preventDefault() : null
              }
            >
              <Box
                p="0.2rem 0.5rem"
                position={"relative"}
                borderRight="0.2rem solid darkorange;"
                transition={".5s"}
                _hover={{
                  bg: "lightgray",
                  color: "black",
                }}
              >
                <Center>
                  <Box
                    as={e.icon}
                    position="relative"
                    mr="0.2rem"
                    display={"inline-block"}
                  />
                  {e.name}
                </Center>
              </Box>
            </a>
          </Link>            
          ))}
        </Flex>
      </Show>
    );
  }
  return (
    <Flex as="header" w="100%" justifyContent={"center"}>
      <Flex
        as="nav"
        w={{ base: "100vw", md: "650px" }}
        justifyContent={{ base: "flex-start", lg: "center" }}
        alignItems="center"
        position={"relative"}
        h="30px"
        m="1rem"
        mt="2rem"
      >
        <Logo />
        <NavBar />
        <HamburgerMenu />
        <Theme />
      </Flex>
    </Flex>
  );
}
