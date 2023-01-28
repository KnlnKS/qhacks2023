import { Box, Image } from "@chakra-ui/react";

import LandingPageBG from "../../assets/LandingPageBG.jpg";

export default function Background({ children }) {
  return (
    <Box
      backgroundImage={LandingPageBG}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      className="Home"
      h={"calc(100vh)"}
    >
      {children}
    </Box>
  );
}
