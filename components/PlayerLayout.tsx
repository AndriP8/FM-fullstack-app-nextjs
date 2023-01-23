import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";

interface PlayerLayoutProps {
  children: React.ReactNode;
}

const PlayerLayout = (props: PlayerLayoutProps) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px" height="calc(100vh - 100px)">
        {props.children}
      </Box>
      <Box position="absolute" left="0" bottom="0">
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
