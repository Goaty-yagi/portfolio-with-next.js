import { useEffect } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { GiHamburgerMenu, GiVintageRobot } from "react-icons/gi";
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
  const sourceUrl = "https://github.com/Bing-Violet";
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
              Github
            </MenuItem>
            <Link
              href={router.pathname === "/posts" ? {} : "/posts"}
              scroll={false}
            >
              <a
                onClick={(event) =>
                  router.pathname === "/posts" ? event.preventDefault() : null
                }
              >
                <MenuItem icon={<ImBlog />}>BLOG POSTS</MenuItem>
              </a>
            </Link>
            <Link
              href={router.pathname === "/projects" ? {} : "/projects"}
              scroll={false}
            >
              <a
                onClick={(event) =>
                  router.pathname === "/projects" ? event.preventDefault() : null
                }
              >
                <MenuItem icon={<GiVintageRobot />}>PROJECTS</MenuItem>
              </a>
            </Link>
            {/* <div className={styles.navMenu} onClick={goToSource}>
          <div className={styles.darkHover}>
            <FaGithubAlt className={styles.menuLogo} />
            SOURCE
          </div>
        </div>
        <Link href={"/posts"} >
          <div className={styles.navMenu}>
            <div className={styles.darkHover}>
              <ImBlog className={styles.menuLogo} />
              posts
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
              GITHUB
            </Center>
          </Box>
          <Link
            href={router.pathname === "/posts" ? {} : "/posts"}
            scroll={false}
          >
            <a
              onClick={(event) =>
                router.pathname === "/posts" ? event.preventDefault() : null
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
                  BLOG POSTS
                </Center>
              </Box>
            </a>
          </Link>
          <Link
            href={router.pathname === "/projects" ? {} : "/projects"}
            scroll={false}
          >
            <a
              onClick={(event) =>
                router.pathname === "/projects" ? event.preventDefault() : null
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
                    as={GiVintageRobot}
                    position="relative"
                    mr="0.2rem"
                    display={"inline-block"}
                  />
                  PROJECTS
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
        <Logo />
        <NavBar />
        <HamburgerMenu />
        <Theme />
      </Flex>
    </Flex>
  );
}
