import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";

export default function AboutUs() {
  return (
    <Box
      sx={{
        paddingLeft: "10%",
        paddingTop: "4%",
      }}
    >
      <Typography
        sx={{ fontSize: "40px", fontFamily: "Nunito", color: [deepWater] }}
      >
        About us
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          fontFamily: "Nunito",
          paddingTop: "1%",
          color: [deepWater],
        }}
      >
        Welcome to Smart Volunteers!
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          fontFamily: "Nunito",
          paddingTop: "1%",
          color: [deepWater],
        }}
      >
        We are dedicated volunteer organization located in Lviv, "ADRESS". Our
        mission is to connect passionate individuals with
        <br />
        meaningful volunteer opportunities. With a strong commitment to making a
        positive impact in our community, we strive
        <br /> to create a better world through volunteerism.
      </Typography>
    </Box>
  );
}
