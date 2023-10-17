import { Box, Button, Typography } from "@mui/material";
import { sea } from "../components/constants";
import backgroundImage from "./background.jpg";
import { useTranslation } from "react-i18next";

export default function TopText() {
  const { t } = useTranslation()
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
        {t('toptext')}
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
        {t('toptext_describe_1')}<br/>{t('toptext_describe_2')}
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
        {t('join_button')}
      </Button>
    </Box>
  );
}
