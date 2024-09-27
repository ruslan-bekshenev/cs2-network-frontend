"use client";

import {
  Box,
  Container,
  Flex,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import ProfileMenu from "../ProfileMenu";

const Navbar = () => {
  return (
    <Box
      px={16}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Logo</Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <ProfileMenu />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
