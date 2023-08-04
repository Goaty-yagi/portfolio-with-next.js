import { useEffect, useContext } from "react";
import { GiHamburgerMenu, GiVintageRobot } from "react-icons/gi";
import { ImBlog, ImSvg } from "react-icons/im";
import { configs } from "./defaultShapes";
import Link from "next/link";
import { useRouter } from "next/router";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";

export default function SvgMenu({children, setAttributes}) {
  // const configs = [
  //   {
  //     name: "Heart",
  //     path: "M12.7692 6.70483C9.53846 2.01902 4 3.90245 4 8.68256C4 13.4627 13.2308 20 13.2308 20C13.2308 20 22 13.2003 22 8.68256C22 4.16479 16.9231 2.01903 13.6923 6.70483L13.2308 7.0791L12.7692 6.70483Z",
  //     icon: ImBlog,
  //   },
  //   {
  //     name: "Star",
  //     path: "M16 2.421l4.296 8.909 9.769 1.452-7.075 7.057 0.238 1.416 1.415 8.443-8.644-4.649-8.643 4.652 1.415-8.444 0.237-1.416-7.073-7.059 9.768-1.452 0.642-1.329zM15.999 0.486c-0.896 0-1.712 0.505-2.093 1.296l-3.622 7.52-8.335 1.239c-0.856 0.128-1.567 0.713-1.843 1.512-0.276 0.802-0.067 1.684 0.537 2.286l6.106 6.1-1.417 8.458c-0.143 0.852 0.226 1.707 0.949 2.206 0.397 0.273 0.864 0.411 1.332 0.411 0.385 0 0.77-0.093 1.119-0.281l7.266-3.912 7.266 3.912c0.349 0.187 0.735 0.281 1.118 0.281 0.468 0 0.934-0.138 1.333-0.411 0.722-0.498 1.091-1.353 0.947-2.206l-1.417-8.458 6.11-6.1c0.605-0.601 0.812-1.485 0.536-2.286s-0.988-1.385-1.843-1.512l-8.333-1.239-3.624-7.52c-0.378-0.791-1.195-1.295-2.093-1.295z",
  //     icon: GiVintageRobot,
  //   },
  // ];
  useEffect(() => {
    setAttributes(configs[0].viewBox,configs[0].path, '',configs[0].styles)
  },[])
  return (
    <>
      <Tabs isFitted>
        <TabList>
          {configs.map((e, index) => (
            <Box key={index} onClick={() => setAttributes(e.viewBox, e.path,e.styles, e.name==='Custom')}>
              <Tab>{e.name}</Tab>
            </Box>
          ))}
        </TabList>

        <TabPanels w={'100vw'}>
          {/* {configs.map((e, index) => (
            <Box  key={index}>
              <TabPanel >{e.name}</TabPanel>
            </Box>
          ))} */}
        </TabPanels>
      </Tabs>
    </>
  );
}
