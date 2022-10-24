import { FaGithubSquare } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
// import workData from "./workData";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Context } from "../pages";
// export const workDataArray = [
//   {
//     img: [
//       "/images/projects/nekoJapanese/neko-japanese.png",
//       "/images/projects/nekoJapanese/neko-japanese1.png",
//       "/images/projects/nekoJapanese/neko-japanese2.png",
//       "/images/projects/nekoJapanese/neko-japanese3.png",
//     ],
//     alt: "image",
//     title: "Neko-Japanese",
//     "project-type": "WebApp",
//     stack: ["vue-cli", "django", "firebase"],
//     features: [
//       "Evaluate japanese skills.",
//       "Check strength and weakness.",
//       "Study japanese according to levels.",
//       "Contribute and support for Japanese learners.",
//       "Be supported your learning.",
//     ],
//     description:
//       "This is my first project built with Vue-CLI and Django, might be published as a product.",
//     productDescription:
//       "Neko Japanese is a platform where learn Japanese, test and evaluate japanese knowledge, access viewable weakness and strong point in each component, community to discuss Japanese topics. Currently, this is for portfolio purpose, but might be published as a product.",
//     githubUrl: "https://github.com/Goaty-yagi/quiz_project",
//     "post-url": "https://neko-japanese.herokuapp.com/",
//   },
//   {
//     img: ["/images/projects/quizRankingDojo/quiz-ranking-dojo.png"],
//     alt: "image",
//     title: "Quiz-Ranking-Dojo",
//     "project-type": "webApp",
//     stack: ["javascript", "firebase", "css"],
//     features: [
//       "Learn tech terms",
//       "Study tech terms",
//       "Compete other users in the Ranking",
//     ],
//     description: `This is my final project in General Assembly development course.
//       I built SPA from scratch to understand how SPA works, I believe that this experience definitely help my future-self
//       when I learn new frameworks or libraries.
//       `,
//     productDescription:
//       "Quiz-Ranking-Dojo is where to defeat other players and even yourself. Test your knowledge and get high score. You require to answer within 10 second each question, if you fail, it will be end  then the num of correct will be your score. This is for portfolio purpose, not a product.",
//     githubUrl: "https://github.com/Goaty-yagi/GA_SPA_Final_Project",
//     "post-url": "https://quiz-ranking-dojo.herokuapp.com/",
//   },
// ];
export default function Project({ hideTitle }) {
  const projectContext = useContext(Context)
  
  const gitClick = (obj) => {
    window.open(obj.githubUrl);
  };
  const postClick = (obj) => {
    window.open(obj["post-url"]);
  };
  const [workData, setData] = useState();

  useEffect(() => {
    setData(projectContext.workdata);
  }, []);
  let markup;
  if (workData) {
    markup = workData.map((obj, index) => {
      return (
        <Link href={`/projects/${obj.title}`} key={index} scroll={false}>
          <Box
            flexBasis={{ base: "auto", md: "50%" }}
            minH="450px"
            p="0.4rem"
            m="0.5rem"
            boxShadow={"0px 5px 15px 0px rgba(0, 0, 0, 0.35)"}
            border="solid transparent"
            transition={".3s"}
            _hover={{ border:"solid teal" }}
          >
            <Heading as="h3" size={"md"} p="0.5rem 0">
              <Center>{obj.title}</Center>
            </Heading>
            <Box
              w="100%"
              h={{ base: "200px", sm: "250px", md: "35%" }}
              position="relative"
              overflow={"hidden"}
              boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.35)"
            >
              <Image
                src={obj.img[0]}
                alt={obj.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 0"
              ></Image>
            </Box>
            <Box h="150px" overflowY={"scroll"} mt="1rem">
              <Text>{obj.description}</Text>
            </Box>
            <Center>
              <Box
                as={FaGithubSquare}
                onClick={(e) => {
                  e.stopPropagation(), gitClick(obj);
                }}
                size={"2.5rem"}
                m="0 0.4rem"
                transition={".5s"}
                _hover={{ color: "gray" }}
              />
              <Box
                as={BiRocket}
                onClick={(e) => {
                  e.stopPropagation(), postClick(obj);
                }}
                size={"2.5rem"}
                m="0 0.4rem"
                transition={".5s"}
                _hover={{ color: "gray" }}
              />
            </Center>
          </Box>
        </Link>
      );
    });
  }

  return (
    <Box as="section">
      {!hideTitle && (
        <Heading
          as="h1"
          size={"lg"}
          textAlign={{ base: "center", md: "left" }}
          textDecoration="underline"
        >
          Project
        </Heading>
      )}
      <Box display={{ base: "block", md: "flex" }}>{markup}</Box>
      <Center>
        <Link 
          href={"projects/"} scroll={false}>
          <Button
            bg="rgb(178, 224, 212)"
            color="rgb(0, 58, 53)"
            fontSize="sm"
            height="40px"
            width="120px"
            border="2px"
            m="0.5rem"
            borderColor="green.300"
            _hover={{ bg: "green.50" }}
          >
            <Text>More Projects?</Text>
          </Button>
        </Link>
      </Center>
    </Box>
  );
}