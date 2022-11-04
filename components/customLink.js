import { useState } from "react";
import { useRouter } from 'next/router'
import { Box } from "@chakra-ui/react";

export default function CustomLink({ path, children }) {
  const router = useRouter()
  const [isLoading, setValue] = useState(false)
  function handlelaoding() {
    if(!isLoading) {
      router.push(path, undefined, { scroll: false })
      setValue(true)
    }
  }
    return (
      <>
      <Box w="100%" onClick={handlelaoding}>
      {children}
      </Box>
      </>

    )
}