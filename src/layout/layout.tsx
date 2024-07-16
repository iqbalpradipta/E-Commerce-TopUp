import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { Box } from "@chakra-ui/react";

function Layout() {
  return (
    <>
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
