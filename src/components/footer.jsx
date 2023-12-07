import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { ReactComponent as Logo } from "./SM.svg";
import { FacebookOutlined, Instagram, Telegram } from "@mui/icons-material";
import { deepWater, sea, wave } from "./constants";
import { useTranslation } from "react-i18next";
import FormComponent from "../form";
import { useState } from "react";
import { useForm } from "react-hook-form";

/* eslint-disable */

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { t } = useTranslation();

  const onSubmitToEmail = async (data) => {
    try {
      setSuccessOpen(true);
      setTimeout(() => setSuccessOpen(false), 5000);
      const response = await fetch("http://localhost:443/submit-to-email", {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred during form submission.");
      setErrorOpen(true);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
          bgcolor: [wave],
          paddingTop: 12,
          paddingBottom: 6,
        }}
        component="footer"
        id="desktop_footer"
      >
        <Grid container spacing={3}>
          {/* First Column */}
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <form onSubmit={handleSubmit(onSubmitToEmail)}>
              {/* First Row in First Column */}
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <TextField
                    {...register("name", { required: true })}
                    placeholder="Name"
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
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    {...register("email", { required: true })}
                    placeholder="Email"
                    InputProps={{
                      style: {
                        borderRadius: "40px",
                      },
                    }}
                    margin="normal"
                    fullWidth
                    label="Email"
                    id="outlined-basic"
                    variant="outlined"
                    type="email"
                  />
                </Grid>
              </Grid>
              {/* Second Row in First Column */}
              <Grid item xs={12}>
                <TextField
                  {...register("message", { required: true })}
                  placeholder="Message"
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
                />
              </Grid>
              {/* Third Row in First Column */}
              <Grid item xs={12} textAlign="center" marginTop="1rem">
                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    width: "6rem",
                    background: [sea],
                    color: "black",
                    borderRadius: "1rem",
                  }}
                >
                  {t("send")}
                </Button>
              </Grid>
            </form>

            <Snackbar
              fullWidth
              open={successOpen}
              autoHideDuration={6000} // Adjust the duration as needed (in milliseconds)
              onClose={() => setSuccessOpen(false)}
            >
              <Alert
                fullWidth
                severity="success"
                onClose={() => setSuccessOpen(false)}
              >
                <AlertTitle>Success</AlertTitle>
                Your form data has been submitted successfully!
              </Alert>
            </Snackbar>
            <Snackbar
              fullWidth
              open={errorOpen}
              autoHideDuration={6000} // Adjust the duration as needed (in milliseconds)
              onClose={() => setErrorOpen(false)}
            >
              <Alert
                fullWidth
                severity="error"
                onClose={() => setErrorOpen(false)}
              >
                <AlertTitle>Error</AlertTitle>
                {errorMessage}
              </Alert>
            </Snackbar>
          </Grid>
          <Grid item xs={1}></Grid>
          {/* Second Column */}
          <Grid item xs={6} container direction="row" alignItems="Center">
            <Typography
              sx={{
                fontSize: "40px",
                fontFamily: "Nunito",
                color: [deepWater],
              }}
            >
              {t("contact_us")}
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Nunito",
                  paddingTop: "1%",
                  color: [sea],
                }}
              >
                {t("contact_us_message_1")}
                <br /> {t("contact_us_message_2")}
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
        >
          <Grid xs={1} />
          <Grid
            xs={4}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Logo style={{ height: "4rem", width: "auto" }} />
          </Grid>
          <Grid xs={2}></Grid>
          <Grid
            xs={4}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconButton
              sx={{ p: 0, marginLeft: "10px" }}
              href="https://www.instagram.com/_vovk.mark_/"
            >
              <Instagram sx={{ fontSize: "60", color: [deepWater] }} />
            </IconButton>
            <IconButton sx={{ p: 0, marginLeft: "10px" }}>
              <Telegram sx={{ fontSize: "60", color: [deepWater] }} />
            </IconButton>
            <IconButton sx={{ p: 0, marginLeft: "10px" }}>
              <FacebookOutlined sx={{ fontSize: "60", color: [deepWater] }} />
            </IconButton>
          </Grid>
          <Grid xs={1} />
        </Grid>

        <Typography
          variant="body2"
          align="center"
          gutterBottom
          color={deepWater}
        >
          &copy; {new Date().getFullYear()} Smart Volunteers. {t("copyright")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
          bgcolor: [wave],
          paddingTop: 6,
          paddingLeft: 4,
          paddingRight: 4,
          paddingBottom: 4,
          textAlign: "center",
        }}
        component="footer"
        id="mobile-footer"
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontFamily: "Nunito",
            color: [deepWater],
          }}
        >
          {t("contact_us")}
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Nunito",
              paddingTop: "1%",
              color: [sea],
            }}
          >
            {t("contact_us_message_1")}
            <br /> {t("contact_us_message_2")}
          </Typography>
        </Typography>

        <FormComponent />

        <Grid
          container
          spacing={3}
          marginTop="2rem"
          marginBottom="0"
          paddingBottom="0"
        >
          <Grid xs={1} />
          <Grid
            xs={4}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Logo style={{ height: "4rem", width: "auto" }} />
          </Grid>
          <Grid xs={3}></Grid>
          <Grid
            xs={4}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconButton
              sx={{ p: 0, marginLeft: "10px" }}
              href="https://www.instagram.com/_vovk.mark_/"
            >
              <Instagram sx={{ fontSize: "60", color: [deepWater] }} />
            </IconButton>
            <IconButton sx={{ p: 0, marginLeft: "10px" }}>
              <Telegram sx={{ fontSize: "60", color: [deepWater] }} />
            </IconButton>
            <IconButton sx={{ p: 0, marginLeft: "10px" }}>
              <FacebookOutlined sx={{ fontSize: "60", color: [deepWater] }} />
            </IconButton>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          align="center"
          gutterBottom
          color={deepWater}
          sx={{ paddingTop: 2 }}
        >
          &copy; {new Date().getFullYear()} Smart Volunteers. {t("copyright")}
        </Typography>
      </Box>
    </Box>
  );
}
