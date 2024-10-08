"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import NavbarMenu from "../NavbarMenu";
import ProfileMenu from "../ProfileMenu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      px={16}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box display="flex" gap="24px">
          <Box marginRight={4}>CS2 FindPlayers</Box>

          <Box>
            <NavbarMenu />
          </Box>
        </Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <ProfileMenu />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
