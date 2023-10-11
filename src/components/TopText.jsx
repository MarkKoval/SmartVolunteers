import { Box, Button, Typography } from "@mui/material";
import { sea } from "../components/constants";
import backgroundImage from "./background.jpg";

export default function TopText() {
  return (
    <Box
      sx={{
        height: "900px",
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.627), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        loading: "lazy",
      }}
    >
      <Typography
        sx={{
          paddingLeft: "10%",
          paddingTop: "10%",
          fontSize: "60px",
          color: [sea],
          fontFamily: "Nunito",
        }}
      >
        Make an Impact
      </Typography>
      <Typography
        sx={{
          paddingLeft: "10%",
          paddingTop: "40px",
          fontSize: "40px",
          color: [sea],
          fontFamily: "Nunito",
        }}
      >
        Join our volunteer community and make a difference in Lviv. <br />
        Together we can create a better future.
      </Typography>
      <Button
        variant="contained"
        style={{
          background: [sea],
          marginLeft: "10%",
          marginTop: "20px",
          fontSize: "20px",
          fontFamily: "Nunito",
          color: "black",
          borderRadius: "1rem",
        }}
        type="submit"
      >
        Join Now
      </Button>
    </Box>
  );
}
