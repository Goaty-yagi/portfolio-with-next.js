import {
  FcSelfServiceKiosk,
  FcFilingCabinet,
  FcServices,
  FcPlus,
  FcSupport,
} from "react-icons/fc";
import { Flex, Box, Tag, Heading, useColorMode } from "@chakra-ui/react";

export default function Skills() {
  const { colorMode } = useColorMode();
  const skills = [
    {
      category: "Front-End",
      icon: FcSelfServiceKiosk,
      tagStyle: { dark: "teal", light: "orange" },
      stacks: [
        "next.js",
        "react.js",
        "vue.js",
        "vite",
        "redux",
        "chakra-ui",
        "framer-motion",
        "three.js",
        "typescript",
        "javascript",
        "accessibility",
        "html",
        "css",
      ],
    },
    {
      category: "Back-End",
      icon: FcFilingCabinet,
      tagStyle: { dark: "pink", light: "blue" },
      stacks: ["python", "c-language", "django", "django rest framework", "postgreSQL"],
    },
    {
      category: "DevOps",
      icon: FcServices,
      tagStyle: { dark: "blue", light: "green" },
      stacks: ["shell", "aws-ec2", "heroku", "vercel", "apache", "nginx", "github-actions", "CI/CD"],
    },
    {
      category: "Tools",
      icon: FcSupport,
      tagStyle: { dark: "orange", light: "pink" },
      stacks: ["git", "postman", "docker"],
    },
    {
      category: "Others",
      icon: FcPlus,
      tagStyle: { dark: "green", light: "yellow" },
      stacks: ["JWT-authentication", "seo", "cookies", "pwa"],
    },
  ];
  return (
    <Flex ml="1rem" flexDirection={"column"}>
      <Heading as="h2" size="md">
        Skills
      </Heading>
      <Box textAlign={"center"} spacing={4} display="block">
        {skills.map((category, index) => (
          <Box key={index} textAlign={"left"} m={"0.8rem 0"}>
            <Flex alignItems={"center"}>
              <category.icon fontSize={"1.5rem"} />
              <Box ml={"0.5rem"} fontWeight={"bold"}>
                {category.category.toUpperCase()}
              </Box>
            </Flex>
            <Box>
              {category.stacks.map((skill) => (
                <Tag
                  key={index}
                  variant="solid"
                  m="0.3rem"
                  colorScheme={
                    colorMode === "light"
                      ? category.tagStyle.light
                      : category.tagStyle.dark
                  }
                >
                  {skill.toUpperCase()}
                </Tag>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}
