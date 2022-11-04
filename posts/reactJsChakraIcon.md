---
title: "[Chakra] How to use react-icon with Chakra"
date: "September 23 2022"
excerpt: "Way to use react-icon with Chakra"
cover_image: "/images/posts/chakra.png"
alt: "image"
tags: ["NextJs", "Chakra"]
---

This is record that I got confused by some syntax rule, when I was trying to use React-icon and Chakra together.
<br>
## Dependency

```javascript
    "next": "12.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-icons": "^4.4.0",
    "@chakra-ui/react": "^2.3.4",
```
<br>

## Use case in Menu from Chakra ui.

```javascript
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

<Menu >
    <MenuButton
    position={"absolute"} 
    right="0"
    top="0"
    as={IconButton}
    aria-label="Options"
    icon={<GiHamburgerMenu />}
    variant="outline"
    ></MenuButton>
    <MenuList>
    <MenuItem icon={<FaGithubAlt />} onClick={goToSource}>
        SOURCE
    </MenuItem>
    <Link href={"/post"}>
        <MenuItem icon={<ImBlog />}>POST</MenuItem>
    </Link>
    </MenuList>
</Menu>
```
To use Menu and icon, set icon attribute with imported icon inclosed with <></>

<br>

## Use case in Box from Chakra ui

```javascript
import { GiHamburgerMenu } from "react-icons/gi";
import { Box } from "@chakra-ui/react";
<Box
    as={GiHamburgerMenu}
    position="relative"
    mr="0.2rem"
    display={"inline-block"}
    />
```
To use Box and icon, you  don't need <></>
