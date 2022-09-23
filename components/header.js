import { useState, useEffect } from "react";
import styles from "/styles/components/nav.module.scss";
import { FaHome, FaGithubAlt } from "react-icons/fa";
import {
  GiFishbone,
  GiPlantSeed,
  GiVintageRobot,
  GiHamburgerMenu,
} from "react-icons/gi";
import { ImBlog } from "react-icons/im";
import { motion } from "framer-motion";

import Link from "next/link";
import Theme from "./theme";
import { useRouter } from "next/router";

import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Tag,
  Button,
  Container,
  Show,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

export default function Header() {
  const sourceUrl = "https://github.com/Goaty-yagi/portfolio-with-next.js";
  const [isOpen, setIsOpen] = useState(false);
  const openBuger = styles.open;
  const closeBurger = styles.close;
  const [menuClass, setMenuClass] = useState();
  const goToSource = () => {
    window.open(sourceUrl);
  };
  function isOpnehandler() {
    setIsOpen(!isOpen);
    setMenuClass(!isOpen ? openBuger : "");
  }
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setIsOpen(false);
      setMenuClass("");
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });
  function HamburgerMenu() {
    return (
      <Show breakpoint="(max-width: 750px)" >
        <Menu >
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
            <MenuItem icon={<FaGithubAlt />} onClick={goToSource}>
              SOURCE
            </MenuItem>
            <Link href={"/post"}>
              <MenuItem icon={<ImBlog />}>POST</MenuItem>
            </Link>
            {/* <div className={styles.navMenu} onClick={goToSource}>
          <div className={styles.darkHover}>
            <FaGithubAlt className={styles.menuLogo} />
            SOURCE
          </div>
        </div>
        <Link href={"/post"} >
          <div className={styles.navMenu}>
            <div className={styles.darkHover}>
              <ImBlog className={styles.menuLogo} />
              POST
            </div>
          </div>
        </Link> */}
          </MenuList>
        </Menu>
      </Show>
    );
  }
  function NavBar() {
    return (
      <Show breakpoint="(min-width: 751px)">
        <Flex >
          <Box
            p="0.2rem 0.5rem"
            position={"relative"}
            borderRight="0.2rem solid darkorange;"
            transition={".5s"}
            onClick={goToSource}
          >
            <Center>
              <Box
                as={FaGithubAlt}
                position="relative"
                mr="0.2rem"
                display={"inline-block"}
              />
              SOURCE
            </Center>
          </Box>
          <Link href={"/post"}>
            <Box
              p="0.2rem 0.5rem"
              position={"relative"}
              borderRight="0.2rem solid darkorange;"
              transition={".5s"}
            >
              <Center>
                <Box
                  as={ImBlog}
                  position="relative"
                  mr="0.2rem"
                  display={"inline-block"}
                />
                POST
              </Center>
            </Box>
          </Link>
        </Flex>
      </Show>
    );
  }
  return (
    <Flex as="header" w="100%" justifyContent={"center"}>
      <Flex
        as="nav"
        w={{base:"100vw",md:"650px"}}
        justifyContent={{base:"flex-start", lg:"center"}}
        alignItems="center"
        position={"relative"}
        h="30px"
        m="1rem"
        mt="2rem"
      >
        <Box
          as="logo"
          flexBasis={"20%"}
          fontFamily={"Times New Roman', Times, serif"}
          mr="1rem"
          h="20px"
        >
          <Link href="/">
            <Flex 
              fontSize={{base:"1.1rem", lg:"1rem"}}>
              <Box
                as={GiPlantSeed}
                mr="0.2rem"
                fontSize={"1.2rem"}
                transition=".5s"
                _hover={{ transform: "rotate(-70deg)", transition: ".5s" }}
              ></Box>
              <Text
              fontFamily='logo'>
                NOBUHIRO
              </Text>
            </Flex>
          </Link>
        </Box>
        <NavBar />
        
        <HamburgerMenu />
        <Theme />
        
      </Flex>
    </Flex>
  );
}
