import { Box } from "@chakra-ui/react";

export default function GlassCard(props) {
  const { children, ...restOfProps } = props;
  return (
    <Box
      background={"rgba( 255, 255, 255, 0.3 )"}
      backdropFilter={"blur( 5px )"}
      boxShadow={"0 8px 32px 0 rgba( 0, 0, 0, 0.18 )"}
      borderRadius={"lg"}
      p={"10"}
      {...restOfProps}
    >
      {children}
    </Box>
  );
}
