import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";

export default function Introducing() {
  return (
    <Box paddingTop="2%" paddingBottom="2%">
      <Typography
        sx={{
          color: [deepWater],
          textAlign: "center",
          paddingLeft: "20%",
          paddingRight: "20%",
          paddingTop: "50px",
          fontSize: "25px",
          fontFamily: "Nunito",
        }}
      >
        Introducing Smart Volunteers, the leading platform connecting volunteers
        with meaningful opportunities in the Lviv community. We understand the
        imporrance of giving back and bealive that everyone has the power to
        make a difference. With our user-friendly interface and extensive
        network of organizations, finding the perfect volunteer role has has
        never been easier. Join us today and become a part of community
        dedicated to make a positive impact.
        <br /> Smart Volunteers: Where passion meets purpose.
      </Typography>
    </Box>
  );
}
