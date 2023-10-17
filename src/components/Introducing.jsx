import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";
import { useTranslation } from "react-i18next";

export default function Introducing() {
  const { t } = useTranslation();
  return (
    <Box paddingTop="2%" paddingBottom="2%">
      <Typography
        sx={{
          fontSize: { xs: "18px", md: "15px", lg:"22px" },
          color: [deepWater],
          textAlign: "center",
          paddingLeft: { xs: "4%", md: "10%", lg:"20%" },
          paddingRight: { xs: "4%", md: "10%", lg:"20%" },
          paddingTop: "50px",
          fontFamily: "Nunito",
        }}
      >
        {t("introducing")}
      </Typography>
    </Box>
  );
}
