import "./Root.css";

import * as React from "react";
import Container from "@mui/material/Container";
import ImageCarousel from "../image_carousel";
import AppBar1 from "../components/AppBar1";
import { Box } from "@mui/material";

const images = [
  "https://picsum.photos/id/1/1440/900",
  "https://picsum.photos/id/2/1440/900",
  "https://picsum.photos/id/3/1440/900",
];

function ResponsiveAppBar() {
  return (
    <Box position="static">
      <AppBar1 />
      <div>
        <ImageCarousel images={images} />
      </div>
    </Box>
  );
}
export default ResponsiveAppBar;
