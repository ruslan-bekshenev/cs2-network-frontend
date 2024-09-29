"use client";

import { Link } from "@chakra-ui/next-js";
import { HStack } from "@chakra-ui/react";

const NavbarMenu = () => {
  return (
    <HStack as="nav" gap="24px">
      <Link color="blue.400" _hover={{ color: "blue.500" }} href="/notes">
        Объявления
      </Link>
      <Link color="blue.400" _hover={{ color: "blue.500" }} href="/players">
        Игроки
      </Link>
    </HStack>
  );
};

export default NavbarMenu;
