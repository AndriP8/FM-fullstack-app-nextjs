import { Box } from "@chakra-ui/react";
import React from "react";

interface PlayerLayoutProps {
  children: React.ReactNode;
}

const PlayerLayout = (props: PlayerLayoutProps) => {
  return (
    <Box>
      Layout
      {props.children}
    </Box>
  );
};

export default PlayerLayout;
