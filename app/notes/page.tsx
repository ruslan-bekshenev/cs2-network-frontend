import { Stack } from "@chakra-ui/react";

import PlayerCard from "@/components/PlayerCard";

export default function PlayersPage() {
  return (
    <div>
      <Stack gap={8}>
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </Stack>
    </div>
  );
}
