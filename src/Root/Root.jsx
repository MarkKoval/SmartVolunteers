import * as React from "react";
// import ImageCarousel from "../components/image_carousel";
import Header from "../components/Header";
import { Box } from "@mui/material";
import TopText from "../components/TopText";
import Introducing from "../components/Introducing";
import Cards from "../components/Cards";
import FooterBox from "../components/footer";
import Map from "../components/map";
import AboutUs from "../components/AboutUs";
// import { images } from "../components/constants";
import RecentWorksText from "../components/RecentWorksText";
import RecentWorks from "../components/RecentWorks";

export default function App() {
  return (
    <Box position="static">
      <Header />
      <TopText />
      <Introducing />
      <Cards />
      <RecentWorksText />
      <RecentWorks />
      {/* <Box paddingTop="2%" paddingBottom="2%">
        <ImageCarousel images={images} />
      </Box> */}
      <AboutUs />
      <Map />
      <FooterBox />
    </Box>
  );
}
