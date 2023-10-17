import { Box, Button, Typography } from "@mui/material";
import { sea } from "../components/constants";
import backgroundImage from "./background.jpg";
import { useTranslation } from "react-i18next";

export default function TopText() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: { xs: "450px", lg: "900px" },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.627), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        loading: "lazy",
      }}
    >
      <Typography
        sx={{
          paddingLeft: { xs: "0%", lg: "10%" },
          paddingRight: { xs: "0%" },
          paddingTop: { xs: "10%", lg: "10%" },
          fontSize: { xs: "45px", lg: "60px" },
          textAlign: { xs: "center", lg: "left" },
          color: [sea],
          fontFamily: "Nunito",
        }}
      >
        {t("toptext")}
      </Typography>
      <Typography
        sx={{
          paddingLeft: { xs: "0%", lg: "10%" },
          paddingRight: { xs: "0%", lg: "10%" },
          paddingTop: { xs: "5%", lg: "40px" },
          fontSize: { xs: "24px", md: "35px" },
          textAlign: { xs: "center", lg: "left" },
          color: [sea],
          fontFamily: "Nunito",
        }}
      >
        {t("toptext_describe_1")}
        <br />
        {t("toptext_describe_2")}
      </Typography>
      <Box
        sx={{
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: [sea],
            marginTop: "20px",
            marginLeft: { lg: "10%" },
            fontSize: {xs:"20px", lg:"25px"},
            fontFamily: "Nunito",
            color: "black",
            borderRadius: "1rem",
          }}
          type="submit"
        >
          {t("join_button")}
        </Button>
      </Box>
    </Box>
  );
}
