import "./Root.css";

import * as React from "react";
import Container from "@mui/material/Container";
import ImageCarousel from "../image_carousel";
import AppBar1 from "../components/AppBar1";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";




const images = [
  "https://picsum.photos/id/1/1440/900",
  "https://picsum.photos/id/2/1440/900",
  "https://picsum.photos/id/3/1440/900",
];

const cards = [1, 2, 3];

const urls = [
  "https://picsum.photos/id/10/500/500",
  "https://picsum.photos/id/20/500/500",
  "https://picsum.photos/id/30/500/500",
  "https://picsum.photos/id/40/500/500",
  "https://picsum.photos/id/50/500/500",
  "https://picsum.photos/id/60/500/500",
];

function ResponsiveAppBar() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Box position="static">
      <AppBar1 />
      <Box
        sx={{
          height: "800px",
          backgroundSize: "cover",
          backgroundImage: `url("https://picsum.photos/id/4/1440/900")`,
        }}
      >
        <Typography
          sx={{
            paddingLeft: "10%",
            paddingTop: "10%",
            fontSize: "60px",
            color: "white",
            fontFamily: "Nunito",
          }}
        >
          Make an Impact
        </Typography>
        <Typography
          sx={{
            paddingLeft: "10%",
            paddingTop: "40px",
            fontSize: "40px",
            color: "white",
            fontFamily: "Nunito",
          }}
        >
          Join our volunteer community and make a difference in Lviv. <br />{" "}
          Together we can create a better future.
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "10px",
            marginLeft: "10%",
            marginTop: "20px",
            fontSize: "20px",
            fontFamily: "Nunito",
          }}
        >
          Join Now
        </Button>
      </Box>
      <Box paddingTop="2%" paddingBottom="2%">
        <Typography
          sx={{
            textAlign: "center",
            paddingLeft: "20%",
            paddingRight: "20%",
            paddingTop: "50px",
            fontSize: "25px",
            fontFamily: "Nunito",
          }}
        >
          Introducing Smart Volunteers, the leading platform connecting
          volunteers with meaningful opportunities in the Lviv community. We
          understand the imporrance of giving back and bealive that everyone has
          the power to make a difference. With our user-friendly interface and
          extensive network of organizations, finding the perfect volunteer role
          has has never been easier. Join us today and become a part of
          community dedicated to make a positive impact.
          <br /> Smart Volunteers: Where passion meets purpose.
        </Typography>
      </Box>
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
          {cards.map((card) => (
            <Grid item key={card} xs={10} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: "100%",
                  }}
                  image="https://picsum.photos/id/10/500/500"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h4" component="h1">
                    Community Support
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h1">
                    Make a difference in your local community by volunteering
                    for various initiatives and projects.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{
          paddingLeft: "10%",
          paddingTop: "5%",
        }}
      >
        <Typography sx={{ fontSize: "40px", fontFamily: "Nunito" }}>
          Recent Work
        </Typography>
      </Box>
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
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          {urls.map((url) => (
            <Grid item key={url} xs={10} sm={6} md={4}>
              <Card
                sx={{
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
                  }}
                  image={url}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box paddingTop="2%" paddingBottom="2%">
        <ImageCarousel images={images} />
      </Box>
      <Box
        sx={{
          paddingLeft: "10%",
          paddingTop: "4%",
        }}
      >
        <Typography sx={{ fontSize: "40px", fontFamily: "Nunito" }}>
          About us
        </Typography>
        <Typography
          sx={{ fontSize: "18px", fontFamily: "Nunito", paddingTop: "1%" }}
        >
          Welcome to Smart Volunteers!
        </Typography>
        <Typography
          sx={{ fontSize: "18px", fontFamily: "Nunito", paddingTop: "1%" }}
        >
          We are dedicated volunteer organization located in Lviv, "ADRESS". Our
          mission is to connect passionate individuals with
          <br />
          meaningful volunteer opportunities. With a strong commitment to making
          a positive impact in our community, we strive
          <br /> to create a better world through volunteerism.
        </Typography>
      </Box>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617.9944023759788!2d24.027195238332922!3d49.842779591575564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7258bf7bbd%3A0x8d22d75bebda3123!2z0KTQvtC90YLQsNC9INCx0ZbQu9GPINCe0L_QtdGA0L3QvtCz0L4g0YLQtdCw0YLRgNGD!5e0!3m2!1suk!2sua!4v1696939490567!5m2!1suk!2sua"
        width="100%"
        height="600"
        style={{
          border: "none",
          paddingTop: "4%",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      

      <Box sx={{ bgcolor: "#FF6F91", p: 6 }} component="footer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register} />
        <input type="email" placeholder="E-mail" {...register("E-mail", {})} />
        <input type="text" placeholder="Message" {...register("Message", {})} />

        <Button variant="contained" type="submit">Sumbit</Button>
      </form>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    </Box>
  );
}
export default ResponsiveAppBar;
