"use client";

import {
  Alert,
  Box,
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
  notesData?: { id: string; text: string };
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
          <Box display="flex" gap="16px" alignItems="center" marginBottom={4}>
            <Heading size="lg" fontWeight={700}>
              dmnkcore
            </Heading>
            <Box maxHeight={30}>
              <Image width={30} height={30} src="/level5010.png" alt="10 lvl" />
            </Box>
          </Box>

          <Box
            textTransform="uppercase"
            display="flex"
            flexWrap="wrap"
            marginBottom={4}
          >
            <StatGroup
              display="grid"
              gridTemplateColumns="repeat(6, 1fr)"
              gap={6}
            >
              <Stat>
                <StatLabel color="teal">ELO</StatLabel>
                <StatNumber>2010</StatNumber>
              </Stat>
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
                <StatLabel color="teal">AVG HS, %</StatLabel>
                <StatNumber>43</StatNumber>
              </Stat>
            </StatGroup>
          </Box>

          <Box marginBottom={3}>
            <Alert variant="left-accent" status="info">
              Ищу тиммейтов на FACEIT от 7 LVL
            </Alert>
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
