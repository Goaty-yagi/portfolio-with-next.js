import {
    Box,
    Flex,
    Text,
  } from "@chakra-ui/react";
import { GiPlantSeed } from "react-icons/gi";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Logo() {
    const router = useRouter()
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
    return (
        <Box
          as="logo"
          flexBasis={"20%"}
          position={"absolute"}
          left="0"
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
                  <Text fontFamily="logo">Bing</Text>
                </LogoBox>
              </Flex>
            </a>
          </Link>
        </Box>
    )
}
