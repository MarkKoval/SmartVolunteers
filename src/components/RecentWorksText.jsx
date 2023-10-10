import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";

export default function RecentWorksText() {
  return (
    <Box
      sx={{
        paddingLeft: "10%",
        paddingTop: "5%",
      }}
    >
      <Typography
        sx={{ fontSize: "40px", fontFamily: "Nunito", color: [deepWater] }}
      >
        Recent Work
      </Typography>
    </Box>
  );
}
