import React from "react";
import { Box } from "@chakra-ui/core";
import Navbar from "./navbar";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box p={8} bg="gray.100" >
        {children}
      </Box>
    </>
  );
};

export default PageLayout;
