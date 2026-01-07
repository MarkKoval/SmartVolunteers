import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";

export default function AboutUs() {
  return (
    <Box
      sx={{
        paddingLeft: { xs: 3, md: "10%" },
        paddingTop: { xs: 4, md: "4%" },
        paddingBottom: { xs: 4, md: 6 },
        maxWidth: "900px",
      }}
    >
      <Typography
        className="fade-in-up"
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontFamily: "Nunito",
          color: [deepWater],
        }}
      >
        About us
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          fontFamily: "Nunito",
          paddingTop: "1%",
          color: [deepWater],
        }}
      >
        Welcome to Smart Volunteers!
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          fontFamily: "Nunito",
          paddingTop: "1%",
          color: [deepWater],
          lineHeight: 1.7,
        }}
      >
        We are dedicated volunteer organization located in Lviv, "ADRESS". Our
        mission is to connect passionate individuals with
        meaningful volunteer opportunities. With a strong commitment to making a
        positive impact in our community, we strive to create a better world
        through volunteerism.
      </Typography>
    </Box>
  );
}
