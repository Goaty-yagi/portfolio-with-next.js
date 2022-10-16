import { useRouter } from "next/router";
import { workDataArray } from "../../components/project";
import { Box, Flex, Heading, Text, Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BreadcrumbCompo from "../../components/breadcrumb";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [workData, setData] = useState()
  useEffect(() => {
    setData(workDataArray.find((each) => each.title === slug))
  },[]);
  return (
    <Flex flexDirection={"column"}>
      {workData && (
        <>
       <BreadcrumbCompo></BreadcrumbCompo>
          <Heading>{workData.title}</Heading>
          <Text>{workData.description}</Text>
        </>
      )}
    </Flex>
  );
}
