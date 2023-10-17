import { Box, Typography } from "@mui/material";
import { deepWater } from "./constants";
import { useTranslation } from "react-i18next";

export default function RecentWorksText() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        textAlign:{xs:"center", lg:"left"},
        paddingLeft: {xs:"0",lg:"10%"},
        paddingTop: {xs:"0", lg:"2%"},
      }}
    >
      <Typography
        sx={{ fontSize:{xs:"35px", lg:"40px"}, fontFamily: "Nunito", color: [deepWater] }}
      >
        {t('recent_work')}
      </Typography>
    </Box>
  );
}
