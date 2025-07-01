import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import bgImg from "../../assets/images/bg_img.png";

export default function Layout() {
  return (
    <Box className="flex flex-col !min-h-screen">
      <Header />
      <Box
        component="main"
        className="flex-grow p-2 sm:p-5 md:p-15 !mt-10 sm:!mt-5 md:!mt-0"
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
