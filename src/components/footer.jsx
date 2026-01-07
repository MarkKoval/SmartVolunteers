import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { ReactComponent as Logo } from "./SM.svg";
import { FacebookOutlined, Instagram, Telegram } from "@mui/icons-material";
import { deepWater, sea, wave } from "./constants";

export default function FooterBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Box
      sx={{ bgcolor: [wave], paddingTop: { xs: 6, md: 12 }, paddingBottom: 6 }}
      component="footer"
    >
      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
        {/* First Column */}
        <Grid item xs={12} md={6} lg={5}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* First Row in First Column */}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  InputProps={{
                    style: {
                      color: [deepWater],
                      borderRadius: "40px",
                    },
                  }}
                  margin="normal"
                  fullWidth
                  label="Name"
                  id="outlined-basic"
                  type="text"
                  {...register("Name", {})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  InputProps={{
                    style: {
                      borderRadius: "40px",
                    },
                  }}
                  margin="normal"
                  fullWidth
                  label="E-mail"
                  id="outlined-basic"
                  variant="outlined"
                  type="email"
                  {...register("E-mail", {})}
                />
              </Grid>
            </Grid>
            {/* Second Row in First Column */}
            <Box>
              <TextField
                InputProps={{
                  style: {
                    borderRadius: "40px",
                  },
                }}
                margin="normal"
                height="10rem"
                multiline
                fullWidth
                label="Message"
                id="outlined-basic"
                variant="outlined"
                type="text"
                {...register("Message", {})}
              />
            </Box>
            {/* Third Row in First Column */}
            <Box textAlign="center" marginTop="1rem">
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "7rem",
                  background: [sea],
                  color: "black",
                  borderRadius: "999px",
                  fontFamily: "Nunito",
                  fontWeight: 600,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 24px rgba(10, 47, 71, 0.2)",
                  },
                }}
              >
                Send
              </Button>
            </Box>
          </form>
        </Grid>
        {/* Second Column */}
        <Grid item xs={12} md={6} lg={5} container direction="row" alignItems="center">
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontFamily: "Nunito",
              color: [deepWater],
            }}
          >
            Contact Us Now
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontFamily: "Nunito",
                paddingTop: "1%",
                color: [sea],
              }}
            >
              Fill out the form below to get in touch with us. We are here to
              answer any questions you may have and provide the support you need.
            </Typography>
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        marginTop="5rem"
        marginBottom="0"
        paddingBottom="0"
        alignItems="center"
      >
        <Grid item xs={12} md={2} />
        <Grid
          item
          xs={12}
          md={4}
          container
          direction="row"
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="center"
        >
          <Logo style={{ height: "4rem", width: "auto" }} />
        </Grid>
        <Grid item xs={12} md={2}></Grid>
        <Grid
          item
          xs={12}
          md={4}
          container
          direction="row"
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems="center"
        >
          <IconButton
            sx={{ p: 0, marginLeft: "10px" }}
            href="https://www.instagram.com/_vovk.mark_/"
          >
            <Instagram sx={{ fontSize: { xs: 28, md: 36 }, color: [deepWater] }} />
          </IconButton>
          <IconButton sx={{ p: 0, marginLeft: "10px" }}>
            <Telegram sx={{ fontSize: { xs: 28, md: 36 }, color: [deepWater] }} />
          </IconButton>
          <IconButton sx={{ p: 0, marginLeft: "10px" }}>
            <FacebookOutlined sx={{ fontSize: { xs: 28, md: 36 }, color: [deepWater] }} />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={2} />
      </Grid>

      <Typography variant="body2" align="center" gutterBottom color={deepWater}>
        &copy; {new Date().getFullYear()} Smart Volunteers. All rights reserved.
      </Typography>
    </Box>
  );
}
