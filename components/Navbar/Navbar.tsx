import { Box, Flex, Stack } from "@chakra-ui/react";

import ProfileMenu from "../ProfileMenu";

const Navbar = () => {
  return (
    <Box px={4}>
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
