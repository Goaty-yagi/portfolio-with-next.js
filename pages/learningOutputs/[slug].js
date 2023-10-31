import fs from "fs";
import path from "path";

import { useRouter } from "next/router";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import BreadcrumbCompo from "../../components/breadcrumb";
import CustomImage from "../../components/customImage";

export default function ProjectPage({ output }) {
  const router = useRouter();
  const outputData = output;
  const path = {
    type: "learningOutputs",
    name: router.query.slug,
  };
  const imageProps = (obj) => {
    return {
      src: obj,
      alt: "image",
      layout: "fill",
      objectFit: "cover",
      objectPosition: "50% 50%",
    };
  };
//   const tabs = ["project-type", "stack", "post-url"];
  const goToSource = (src) => {
    window.open(src);
  };
  console.log("outputData",outputData)
  return (
    <>
      <Flex p={{ base: "0 0.5rem", lg: "0" }} flexDirection={"column"}>
        {outputData && (
          <>
            <BreadcrumbCompo path={path}></BreadcrumbCompo>
            <Heading>{outputData.title}</Heading>            
          </>
        )}
      </Flex>
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "json");
  const data = fs.readFileSync(filePath + "/learningOutput.json", "utf8");
  const a = JSON.parse(data);
  console.log("A",a)
  const paths = a.outputs.map((filename) => ({
    params: {
      slug: filename.title,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const filePath = path.join(process.cwd(), "json");
  const data = fs.readFileSync(filePath + "/learningOutput.json", "utf8");
  const projectsdata = JSON.parse(data);

  return {
    props: {
      output: projectsdata.outputs.find((each) => each.title === slug),
    },
  };
}
