import { Button, Center, Text, Box } from "@chakra-ui/react";

export default function GlassCard({ children }) {
  return (
    <Box
      borderRadius={"2xl"}
      background={"rgba( 255, 255, 255, 0.3 )"}
      backdropFilter={"blur( 5px )"}
      h={"50%"}
      w={"50%"}
      textAlign={"center"}
      color={"white"}
      boxShadow={"0 8px 32px 0 rgba( 0, 0, 0, 0.18 )"}
      p={"10"}
    >
      {children}
    </Box>
  );
}
