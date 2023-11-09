import * as React from "react";

import Header from "../components/Header";
import { Box } from "@mui/material";
import TopText from "../components/TopText";
import Introducing from "../components/Introducing";
import Cards from "../components/Cards";
import FooterPC from "../components/footer_pc";
import MapPC from "../components/map_pc";
import AboutUs from "../components/AboutUs";
import RecentWorksText from "../components/RecentWorksText";
import RecentWorks from "../components/RecentWorks";
import TextCarousel from "../components/textcarousel";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/system";
import FooterMobile from "../components/footer_mobile";
import PhotoCarousel from "../components/photocarousel";
import Test from "../test";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box position="static">
        <Header />
        <TopText />
        <Introducing />
        <Cards />
        <RecentWorksText />
        <RecentWorks />
        <Box paddingTop="2%" paddingBottom="2%">
          <PhotoCarousel />
        </Box>

        <Box
          paddingTop="2%"
          paddingBottom="2%"
          sx={{ display: { xl: "block", xs: "none" } }}
        >
          <TextCarousel />
        </Box>
        <AboutUs />
        <MapPC />
        <FooterPC />
        <FooterMobile />
      </Box>
    </ThemeProvider>
  );
}
