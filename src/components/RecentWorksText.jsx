import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";

export default function RecentWorksText() {
  return (
    <Box
      sx={{
        paddingLeft: { xs: 3, md: "10%" },
        paddingTop: { xs: 4, md: "5%" },
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
        Recent Work
      </Typography>
    </Box>
  );
}
