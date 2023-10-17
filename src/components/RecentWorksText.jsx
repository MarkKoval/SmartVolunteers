import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";
import { useTranslation } from "react-i18next";

export default function RecentWorksText() {
  const { t } = useTranslation();
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
        {t('recent_work')}
      </Typography>
    </Box>
  );
}
