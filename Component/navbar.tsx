import React from "react";
import { Box, Image } from "@chakra-ui/core";

const Navbar = () => {
  return (
    <>
      <Box bg="white" w="100%" px={8} py={4} shadow="md">
        <Image src="/asahub-logo.png" height="64px" />
      </Box>
    </>
  );
};

export default Navbar;
