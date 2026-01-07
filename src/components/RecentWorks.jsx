import { Card, CardMedia, Container, Grid } from "@mui/material";
import { images } from "./constants";

export default function RecentWorks() {
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
        {images.map((image) => (
          <Grid item key={image} xs={12} sm={6} md={4}>
            <Card
              className="fade-in-up"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 18px 40px rgba(10, 47, 71, 0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 24px 50px rgba(10, 47, 71, 0.22)",
                },
                "&:hover .recent-work-image": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="div"
                className="recent-work-image"
                sx={{
                  pt: "75%",
                  transition: "transform 0.4s ease",
                }}
                image={image}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
