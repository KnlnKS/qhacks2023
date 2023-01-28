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
                🎓 LectureBites
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                tincidunt ligula. Aenean ornare felis ex, nec suscipit risus
                pellentesque vulputate. Pellentesque risus risus, lacinia tempus
                faucibus non, imperdiet a est.
              </Text>
              <GoogleButton />
              <Button variant={"link"} size={"sm"} color={"white"}>
                <Text as="u">Learn more</Text>
              </Button>
            </Stack>
          </Center>
        </GlassCard>
      </Center>
    </div>
  );
}

export default Home;
