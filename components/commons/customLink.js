import { useState } from "react";
import { useRouter } from 'next/router'
import { Box } from "@chakra-ui/react";

export default function CustomLink({ href, children, scroll=false }) {
  const router = useRouter()
  const [isLoading, setValue] = useState(false)
  function handlelaoding() {
    if(!isLoading) {
      router.push(href, undefined, { scroll: scroll })
      setValue(true)
    }
  }
    return (
      <>
        <Box onClick={handlelaoding}>
          {children}
        </Box>
      </>

    )
}