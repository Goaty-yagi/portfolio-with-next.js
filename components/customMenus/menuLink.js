import { Box, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";


export default function MenuLink({ children, path, clickEvent }) {
  if (path) {
    return (
      <Link as={NextLink} href={path}>
        {children}
      </Link>
    );
  } else {
    return <Box onClick={clickEvent}>{children}</Box>;
  }
}
