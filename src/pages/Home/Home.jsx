import { Box, Image, Center, Heading } from "@chakra-ui/react";

import GoogleButton from "../../components/GoogleButton";
import Background from "../../components/Background";
import GlassCard from "../../components/GlassCard";

function Home() {
  return (
    <div className="Home">
      <Background>
        <Center h={"calc(100vh)"}>
          <GlassCard>
            <Heading>🎓 LectureBites</Heading>
            <GoogleButton />
          </GlassCard>
        </Center>
      </Background>
    </div>
  );
}

export default Home;
