import { useEffect } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { GiPlantSeed, GiHamburgerMenu } from "react-icons/gi";
import { ImBlog } from "react-icons/im";

import Link from "next/link";
import Theme from "./theme";
import { useRouter } from "next/router";

import {
  Box,
  Center,
  Flex,
  Text,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

export default function Header() {
  const sourceUrl = "https://github.com/Goaty-yagi/portfolio-with-next.js";
  const goToSource = () => {
    window.open(sourceUrl);
  };
  
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
  const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    > svg {
      transition: 200ms ease;
    }
    &:hover > svg {
      transform: rotate(50deg);
    }
  `;
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
            <MenuItem icon={<FaGithubAlt />} onClick={goToSource}>
              SOURCE
            </MenuItem>
            <Link
              href={router.pathname === "/post" ? {} : "/post"}
              scroll={false}
            >
              <a
                onClick={(event) =>
                  router.pathname === "/post" ? event.preventDefault() : null
                }
              >
                <MenuItem icon={<ImBlog />}>POST</MenuItem>
              </a>
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
        <Flex>
          <Box
            p="0.2rem 0.5rem"
            position={"relative"}
            borderRight="0.2rem solid darkorange;"
            transition={".5s"}
            _hover={{
              bg: "lightgray",
              color: "black",
            }}
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
          <Link
            href={router.pathname === "/post" ? {} : "/post"}
            scroll={false}
          >
            <a
              onClick={(event) =>
                router.pathname === "/post" ? event.preventDefault() : null
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
                    as={ImBlog}
                    position="relative"
                    mr="0.2rem"
                    display={"inline-block"}
                  />
                  POST
                </Center>
              </Box>
            </a>
          </Link>
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
        <Box
          as="logo"
          flexBasis={"20%"}
          fontFamily={"Times New Roman', Times, serif"}
          mr="1rem"
          h="20px"
        >
          <Link href={router.pathname === "/" ? {} : "/"} scroll={false}>
            <a
              onClick={(event) =>
                router.pathname === "/" ? event.preventDefault() : null
              }
            >
              <Flex fontSize={{ base: "1.1rem", lg: "1rem" }}>
                <LogoBox>
                  <Box
                    as={GiPlantSeed}
                    mr="0.2rem"
                    fontSize={"1.2rem"}
                    transition=".5s"
                  ></Box>
                  <Text fontFamily="logo">NOBUHIRO</Text>
                </LogoBox>
              </Flex>
            </a>
          </Link>
        </Box>
        <NavBar />
        <HamburgerMenu />
        <Theme />
      </Flex>
    </Flex>
  );
}
