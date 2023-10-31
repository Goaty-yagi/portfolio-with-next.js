import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
    IconButton,
  } from "@chakra-ui/react";
  import React from "react";
  import {FiChevronDown} from "react-icons/fi"
  import MenuLink from "./MenuLink";
  
//   interface Config {
//     labelText: string;
//     icon?: JSX.Element;
//     path?: string;
//     isVisible: boolean;
//     clickEvent?: (Event: any) => void;
//   }
  
//   interface Props {
//     config: Config[];
//     iconBtn?: JSX.Element;
//     btnText?: string;
//   }
  
  export default function AbstractMenu({ config, iconBtn, btnText }) {
    console.log(config, iconBtn, btnText)
    return (
      <>
        <Menu>
        <MenuButton
          as={Button}
          size={{ base: "xs", md: "sm" }}
          mr="0.5rem"
          border={"solid navy"}
          rightIcon={<FiChevronDown />}
        >
            {btnText ? btnText : ""}
        </MenuButton>
          <MenuList>
            {config.map(
              (input) =>
                input.isVisible && (
                  <Box key={input.labelText}>
                    <MenuLink path={input.path} clickEvent={input.clickEvent}>
                      <MenuItem
                        icon={input.icon ? input.icon : <></>}
                      >
                        {input.labelText}
                      </MenuItem>
                    </MenuLink>
                  </Box>
                )
            )}
          </MenuList>
        </Menu>
      </>
    );
  }
  