import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";
import { useTranslation } from "react-i18next";

export default function Introducing() {
  const { t } = useTranslation  ()
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
        {t('introducing')}
      </Typography>
    </Box>
  );
}
