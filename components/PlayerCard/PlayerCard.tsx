"use client";

import { SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import Image from "next/image";

import RequestToFriendsButton from "../RequestToFriendsButton";

type PlayerCardProps = {
  avatar?: {
    alt: string;
    src: string;
  };
  nickname?: string;
  statistic?: Array<{ name: string; value: number }>;
  friendStatus?: "isFriend" | "sendedRequest" | "notFriend";
};

const PlayerCard = (props: PlayerCardProps) => {
  return (
    <Card direction={{ base: "column", sm: "row" }} overflow="hidden">
      <Image
        width={200}
        height={200}
        src="https://distribution.faceit-cdn.net/images/42846d46-5d0c-46d9-ac76-0259d7ccefb2.jpeg"
        alt="Caffe Latte"
      />

      <Box width="100%">
        <CardBody>
          <Heading size="lg" marginBottom={4} fontWeight={700}>
            dmnkcore
          </Heading>

          <Box
            textTransform="uppercase"
            display="flex"
            flexWrap="wrap"
            marginBottom={4}
          >
            <StatGroup
              display="grid"
              gridTemplateColumns="repeat(5, 1fr)"
              gap={6}
            >
              <Stat>
                <StatLabel color="teal">Matches</StatLabel>
                <StatNumber>1594</StatNumber>
              </Stat>
              <Stat>
                <StatLabel color="teal">Win rate, %</StatLabel>
                <StatNumber>50</StatNumber>
              </Stat>
              <Stat>
                <StatLabel color="teal">Win streak</StatLabel>
                <StatNumber>8</StatNumber>
              </Stat>
              <Stat>
                <StatLabel color="teal">AVG k/d ratio</StatLabel>
                <StatNumber>0.98</StatNumber>
              </Stat>
              <Stat>
                <StatLabel color="teal">AVG headshots, %</StatLabel>
                <StatNumber>43</StatNumber>
              </Stat>
            </StatGroup>
          </Box>
          <Box>
            <RequestToFriendsButton />
          </Box>
        </CardBody>
      </Box>
    </Card>
  );
};

export default PlayerCard;
