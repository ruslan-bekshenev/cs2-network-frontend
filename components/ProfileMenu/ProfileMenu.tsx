import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

const ProfileMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          size={"sm"}
          src={"https://avatars.dicebear.com/api/male/username.svg"}
        />
      </MenuButton>
      <MenuList alignItems={"center"}>
        <br />
        <Center>
          <Avatar
            size={"2xl"}
            src={"https://avatars.dicebear.com/api/male/username.svg"}
          />
        </Center>
        <br />
        <Center>
          <p>Username</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Your Servers</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
