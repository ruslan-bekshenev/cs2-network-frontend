import { Stack } from "@chakra-ui/react";

import PlayerCard from "@/components/PlayerCard";

export default function Home() {
  return (
    <div>
      <Stack>
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </Stack>
    </div>
  );
}
