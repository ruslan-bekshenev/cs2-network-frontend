"use client";

import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

import { VARIANT } from "@/constant/variant";

const BUTTON_STATUS = {
  pending: {
    color: VARIANT.pending,
    text: "Отправить запрос в друзья",
  },
  default: {
    color: VARIANT.primary,
    text: "Отправить запрос в друзья",
  },
};

type RequestToFriendsButtonProps = {
  status?: keyof typeof BUTTON_STATUS;
};

const RequestToFriendsButton = ({
  status = "default",
}: RequestToFriendsButtonProps) => {
  console.log(BUTTON_STATUS);
  return (
    <Button
      leftIcon={<AddIcon />}
      size="sm"
      colorScheme={BUTTON_STATUS[status]?.color}
      variant="outline"
    >
      {BUTTON_STATUS[status]?.text}
    </Button>
  );
};

export default RequestToFriendsButton;
