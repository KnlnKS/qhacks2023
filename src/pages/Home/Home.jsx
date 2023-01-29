import { Box, Center, Heading, Stack, Text, Button } from "@chakra-ui/react";

import GoogleButton from "../../components/GoogleButton";
import GlassCard from "../../components/GlassCard";

function Home() {
  return (
    <div className="Home">
      <Center h={"calc(100vh)"}>
        <GlassCard h={"50%"} w={"50%"} color={"white"} textAlign={"center"}>
          <Center h={"100%"}>
            <Stack as={Box} spacing={{ base: 5, md: 10 }}>
              <Heading
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                🕵️ NoteBuddy
              </Heading>
              <Text>
                Your smart note-taking companion that can organize, summarize
                and search through your documents! Who needs friends with
                software like this ヽ(°◇° )ノ.
              </Text>
              <GoogleButton />
            </Stack>
          </Center>
        </GlassCard>
      </Center>
    </div>
  );
}

export default Home;
