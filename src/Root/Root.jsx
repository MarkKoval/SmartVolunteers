import * as React from "react";

import Header from "../components/Header";
import { Box } from "@mui/material";
import TopText from "../components/TopText";
import Introducing from "../components/Introducing";
import Cards from "../components/Cards";
import MapPC from "../components/map_pc";
import AboutUs from "../components/AboutUs";
import RecentWorksText from "../components/RecentWorksText";
import RecentWorks from "../components/RecentWorks";
import TextCarousel from "../components/textcarousel";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/system";
import PhotoCarousel from "../components/photocarousel";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <title>Smart Volunteers</title>
          <meta name="description" content="Smart Volunteers is a dynamic and compassionate organization dedicated to mobilizing enthusiastic volunteers for meaningful community impact. Our mission is to harness the power of intelligence, innovation, and heart to create positive change in the world through volunteerism. Join us in making a smarter, kinder, and better future for all." />
          <meta name="keywords" content="Smart Volunteers, dynamic organization, compassionate organization, enthusiastic volunteers, meaningful community impact, intelligence, innovation, heart, positive change, world, volunteerism, smarter future, kinder future, better future, Vovk Mark, Koval Mark, volunteer organization, community impact, volunteer opportunities, volunteer work, volunteer programs, volunteer projects, volunteer recruitment, volunteer mobilization, volunteer engagement, volunteer management, volunteer coordination, volunteer training, volunteer development, volunteer networking" />
          <meta name="author" content="Koval Mark" />
          <meta property="og:title" content="Smart Volunteers" />
          <meta
            property="og:description"
            content="Smart Volunteers is a dynamic and compassionate organization dedicated to mobilizing enthusiastic volunteers for meaningful community impact. Our mission is to harness the power of intelligence, innovation, and heart to create positive change in the world through volunteerism. Join us in making a smarter, kinder, and better future for all."
          />
        </Helmet>
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
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
