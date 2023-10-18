import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { deepWater } from "./constants";
import { useTranslation } from "react-i18next";

import CardImage1 from "../components/CardImages/1.png";
import CardImage2 from "../components/CardImages/2.png";
import CardImage3 from "../components/CardImages/3.png";

export default function Cards() {
  const { t } = useTranslation();
  return (
    <Container
      sx={{
        py: 6,
      }}
      maxWidth="auto"
    >
      <Grid
        container
        spacing={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={10} sm={6} md={3.3}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              boxShadow:3
            }}
          >
            <CardMedia
              component="div"
              sx={{
                pt: "100%",
              }}
              image={CardImage1}
            />
            <CardContent
              sx={{
                flexGrow: 1,
                color: [deepWater],
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <Typography
                gutterBottom
                sx={{
                  fontSize: { xs: "34px", lg: "34px" },
                  fontWeight: { xs: "500" },
                }}
                fontFamily="Nunito"
              >
                {t("community_support")}
              </Typography>
              <Typography
                color={deepWater}
                gutterBottom
                sx={{
                  fontSize: { xs: "20px", lg: "20px" },
                  fontWeight: { xs: "400", lg: "400" },
                }}
                fontFamily="Nunito"
              >
                {t("community_support_describe")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10} sm={6} md={3.3}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              boxShadow:3
            }}
          >
            <CardMedia
              component="div"
              sx={{
                pt: "100%",
              }}
              image={CardImage2}
            />
            <CardContent
              sx={{
                flexGrow: 1,
                color: [deepWater],
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <Typography
                gutterBottom
                sx={{
                  fontSize: { xs: "34px", lg: "33px" },
                  fontWeight: { xs: "500" },
                }}
                fontFamily="Nunito"
              >
                {t("environmental_conservation")}
              </Typography>
              <Typography
                color={deepWater}
                gutterBottom
                sx={{
                  fontSize: { xs: "20px", lg: "20px" },
                  fontWeight: { xs: "400", lg: "400" },
                }}
                fontFamily="Nunito"
              >
                {t("environmental_conservation_describe")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10} sm={6} md={3.3}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              boxShadow:3
            }}
          >
            <CardMedia
              component="div"
              sx={{
                pt: "100%",
              }}
              image={CardImage3}
            />
            <CardContent
              sx={{
                flexGrow: 1,
                color: [deepWater],
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "34px", lg: "34px" },
                  fontWeight: { xs: "500" },
                }}
                gutterBottom
                fontFamily="Nunito"
              >
                {t("aducation_assistance")}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "20px", lg: "20px" },
                  fontWeight: { xs: "400", lg: "400" },
                }}
                color={deepWater}
                gutterBottom
                fontFamily="Nunito"
              >
                {t("aducation_assistance_describe")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
