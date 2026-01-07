import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { deepWater } from "./constants";

import CardImage1 from "../components/CardImages/1.png";
import CardImage2 from "../components/CardImages/2.png";
import CardImage3 from "../components/CardImages/3.png";

export default function Cards() {
  return (
    <Container
      sx={{
        py: { xs: 4, md: 6 },
      }}
      maxWidth="lg"
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
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="fade-in-up"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "24px",
              boxShadow: "0 18px 40px rgba(10, 47, 71, 0.15)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 24px 50px rgba(10, 47, 71, 0.22)",
              },
            }}
          >
            <CardMedia
              component="div"
              sx={{
                pt: "70%",
              }}
              image={CardImage1}
            />
            <CardContent sx={{ flexGrow: 1, color: [deepWater] }}>
              <Typography
                gutterBottom
                variant="h4"
                component="h1"
                fontFamily="Nunito"
              >
                Community Support
              </Typography>
              <Typography
                color={deepWater}
                gutterBottom
                variant="h6"
                component="h1"
                fontFamily="Nunito"
              >
                Engage actively in a range of volunteer programs and diverse
                activities dedicated to the protection of
                Lviv's natural environment.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="fade-in-up"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "24px",
              boxShadow: "0 18px 40px rgba(10, 47, 71, 0.15)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 24px 50px rgba(10, 47, 71, 0.22)",
              },
            }}
          >
            <CardMedia
              component="div"
              sx={{
                pt: "70%",
              }}
              image={CardImage2}
            />
            <CardContent sx={{ flexGrow: 1, color: [deepWater] }}>
              <Typography
                gutterBottom
                variant="h4"
                component="h1"
                fontFamily="Nunito"
              >
                Environmental Conservation
              </Typography>
              <Typography
                color={deepWater}
                gutterBottom
                variant="h6"
                component="h1"
                fontFamily="Nunito"
              >
                Contribute to the preservation of Lviv's natural environment
                through volunteer programs and activities.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="fade-in-up"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "24px",
              boxShadow: "0 18px 40px rgba(10, 47, 71, 0.15)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 24px 50px rgba(10, 47, 71, 0.22)",
              },
            }}
          >
            <CardMedia
              component="div"
              sx={{
                pt: "70%",
              }}
              image={CardImage3}
            />
            <CardContent sx={{ flexGrow: 1, color: [deepWater] }}>
              <Typography
                gutterBottom
                variant="h4"
                component="h1"
                fontFamily="Nunito"
              >
                Aducation Assistance
              </Typography>
              <Typography
                color={deepWater}
                gutterBottom
                variant="h6"
                component="h1"
                fontFamily="Nunito"
              >
                Help improve educational opportunities for children and adults
                in Lviv through tutoring and mentoring program.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
