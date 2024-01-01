import { Flex, Skeleton, Progress } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
export default function CustomImage({ props }) {
  //props contain image props like below
  // props: {
  //   src:'',
  //   alt:'',
  //   layout:'',
  //   objectFit:'',
  //   objectPosition:''
  //   width:'',
  //   height:''
  // }
  const [isLoaded, setIsLoaded] = useState(false);
  function onLoading() {
    setIsLoaded(true);
  }
  return (
    <Flex h="100%" w="100%" justifyContent={"center"} alignItems="center">
     
        <Image
        {...props}
          onLoadingComplete={() => onLoading()}
        />
        {!isLoaded&&(
          <Skeleton height="100%" w="100%"/>
        )}
    </Flex>
  );
}
