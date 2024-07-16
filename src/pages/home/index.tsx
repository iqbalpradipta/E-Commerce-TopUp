import React, { useRef, useState } from "react";
import Banner from "./components/banner";
import { Box } from "@chakra-ui/react";
import Category from "./components/category";

function Index() {
  return (
    <>
      <Box bgColor="#E0F4FF" minHeight='calc(100vh)' maxHeight='calc(100vh)' >
        <Banner />
        <Category />
      </Box>
    </>
  );
}

export default Index;
