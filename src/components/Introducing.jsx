import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";

export default function Introducing() {
  return (
    <Box paddingTop={{ xs: 4, md: 6 }} paddingBottom={{ xs: 4, md: 6 }}>
      <Typography
        className="fade-in-up"
        sx={{
          color: [deepWater],
          textAlign: "center",
          paddingX: { xs: 3, md: 20 },
          paddingTop: { xs: 3, md: 6 },
          fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.6rem" },
          fontFamily: "Nunito",
          lineHeight: 1.7,
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
