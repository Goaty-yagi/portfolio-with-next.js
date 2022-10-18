import { useRouter } from "next/router";
import { workDataArray } from "../../components/project";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BreadcrumbCompo from "../../components/breadcrumb";
import Image from "next/image";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [workData, setData] = useState();
  const path = {
    type: "projects",
    name: router.query.slug,
  };
  const tabs = ["project-type", "stack", "post-url"];
  // const workData = workDataArray.find((each) => each.title === slug);
  const goToSource = (src) => {
    window.open(src);
  };
  useEffect(() => {
    setData(workDataArray.find((each) => each.title === slug));
  }, []);
  return (
    <>
      <Flex p={{ base: "0 0.5rem", lg: "0" }} flexDirection={"column"}>
        {workData && (
          <>
            <BreadcrumbCompo path={path}></BreadcrumbCompo>
            <Heading>{workData.title}</Heading>
            <Text>{workData.productDescription}</Text>

            <Flex mt="1rem" flexDirection={"column"}>
              {tabs.map((each, index) => (
                <Flex key={index} mt="0.5rem">
                  <Box
                    bg="rgba(251, 192, 147,0.7)"
                    color="#FF8C32"
                    fontWeight={"bold"}
                    display={"inline"}
                    p="0 0.3rem"
                    textShadow={"0.5px 0.5px black"}
                    borderRadius={"0.2rem"}
                  >
                    {each.toUpperCase()}
                  </Box>
                  <Text
                    ml="0.5rem"
                    transition={".3s"}
                    _hover={{
                      bg: each === "post-url" ? "rgba(200,200,200,.7)" : "",
                    }}
                    onClick={
                      each === "post-url"
                        ? () => {
                            goToSource(workData[each]);
                          }
                        : () => {}
                    }
                  >
                    {Array.isArray(workData[each])
                      ? workData[each].join(", ").toUpperCase()
                      : workData[each]}
                  </Text>
                </Flex>
              ))}
              <UnorderedList mt="1rem" ml="2rem">
                {workData.features.map((each, index) => (
                  <Box as={ListItem} key={index}>
                    {each}
                  </Box>
                ))}
              </UnorderedList>
            </Flex>
            <Flex mt="2rem" flexDirection={"column"}>
              {workData.img.map((each, index) => (
                <Box
                  key={index}
                  mt="1.5rem"
                  position={"relative"}
                  w="100%"
                  h={{ base: "200px", sm: "280px", md: "300px", lg: "350px" }}
                >
                  <Box
                    as={Image}
                    borderRadius={"0.5rem"}
                    src={each}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                </Box>
              ))}
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
}
