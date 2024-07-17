import React, { useRef, useState } from "react";
import Banner from "./components/banner";
import { Box } from "@chakra-ui/react";
import Category from "./components/category";
import Populer from "./components/populer";

function Index() {
  return (
    <>
      <Box>
        <Banner />
        <Category />
        <Populer />
      </Box>
    </>
  );
}

export default Index;
