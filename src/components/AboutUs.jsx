import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <Box id="About"
      sx={{
        paddingLeft: { xs: "4%", md: "10%", lg:"10%" },
        paddingRight: { xs: "4%", md: "10%", lg:"10%" },
        paddingTop: "4%",
        paddingBottom : "8%",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "35px", lg: "40px" },
          textAlign:{xs: "center", md:"center", lg:"left"},
          fontFamily: "Nunito",
          color: [deepWater],
        }}
      >
        {t("about_us")}
      </Typography>
      <Typography
        sx={{
          textAlign:{xs: "center", md:"center", lg:"left"},
          fontSize: { xs: "18px", md: "15px", lg: "22px" },
          fontFamily: "Nunito",
          paddingTop: "1%",
          color: [deepWater],
        }}
      >
        {t("welcome")}
      </Typography>
      <Typography
        sx={{
          textAlign:{xs: "center", md:"center", lg:"left"}, 
          fontSize: { xs: "18px", md: "15px", lg: "22px" },
          fontFamily: "Nunito",
          paddingTop: "1%",
          color: [deepWater],
        }}
      >
        {t("welcome_text_1")}
        {/* Fix It */}
        {t("welcome_text_2")}
        {t("welcome_text_3")}
      </Typography>
    </Box>
  );
}
