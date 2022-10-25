import { Flex, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { Suspense, useState } from "react";

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
  // const [isLoaded, setIsLoaded] = useState(false);
  // function onLoading() {
  //   setIsLoaded(true);
  // }
  return (
    <Flex h="100%" w="100%" justifyContent={"center"} alignItems="center">
     <Suspense fallback={<Spinner/>}>
        <Image
        {...props}
          // onLoadingComplete={() => onLoading()}
        />
        {/* {!isLoaded&&(
          <Spinner/>
        )} */}
      </Suspense>
    </Flex>
  );
}
