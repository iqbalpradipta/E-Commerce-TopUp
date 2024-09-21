import React, { useRef, useState } from "react";
import Banner from "./components/banner";
import { Box } from "@chakra-ui/react";
import Category from "./components/category";
import Populer from "./components/populer";
import Game from "./components/game";

function Index() {
  return (
    <>
      <Box>
        <Banner />
        <Category />
        <Populer />
        <Game />
      </Box>
    </>
  );
}

export default Index;
