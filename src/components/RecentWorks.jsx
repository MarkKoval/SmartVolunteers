import { Card, CardMedia, Container, Grid } from "@mui/material";
import { images } from "./constants";

export default function RecentWorks() {
  return (
    <Container
      sx={{
        display: { xs: "none", md: "block", lg: "block", xl: "block" },
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
          paddingLeft: "10%",
          paddingRight: "10%",
          
        }}
      >
        {images.map((image) => (
          <Grid item key={image} xs={10} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: 20,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "5%",
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  borderRadius: "5%",
                  pt: "100%",
                  loading: "lazy",
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
