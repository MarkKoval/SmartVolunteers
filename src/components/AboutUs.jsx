import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation  ()
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
        {t('about_us')}
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          fontFamily: "Nunito",
          paddingTop: "1%",
          color: [deepWater],
        }}
      >
        {t('welcome')}
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          fontFamily: "Nunito",
          paddingTop: "1%",
          color: [deepWater],
        }}
      >
        {t("welcome_text_1")}
        <br />
        {t("welcome_text_2")}
        <br /> {t("welcome_text_3")}
      </Typography>
    </Box>
  );
}
