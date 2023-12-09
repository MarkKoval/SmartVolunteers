import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  List,
  ListItem,
  Radio,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { sea } from "../components/constants";
import backgroundImage from "./background.jpg";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

/* eslint-disable */

export default function TopText() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = React.useState(false);

  const onSubmitToGoogleSheets = async (data) => {
    try {
      setSuccessOpen(true);
      setTimeout(() => setSuccessOpen(false), 5000);
      const response = await axios.post("http://3.75.158.163:5000/submit-to-google-sheets", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const response = await fetch(
      //   "http://localhost:5000/submit-to-google-sheets",
      //   {
      //     method: "POST",
          
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   }
      // );
      console.log("Data submitted to Google Sheets:", data);
    } catch (error) {
      setSuccessOpen(false);
      console.error("Error:", error);
      setErrorMessage("An error occurred during form submission.");
      setErrorOpen(true);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseTimed = () => {
    setTimeout(() => setOpen(false), 1500);
  };

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        height: { xs: "450px", lg: "900px" },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.627), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        loading: "lazy",
      }}
    >
      <Typography
        sx={{
          paddingLeft: { xs: "0%", lg: "10%" },
          paddingRight: { xs: "0%" },
          paddingTop: { xs: "10%", lg: "10%" },
          fontSize: { xs: "45px", lg: "60px" },
          textAlign: { xs: "center", lg: "left" },
          color: [sea],
          fontFamily: "Nunito",
        }}
      >
        {t("toptext")}
      </Typography>
      <Typography
        sx={{
          paddingLeft: { xs: "0%", lg: "10%" },
          paddingRight: { xs: "0%", lg: "10%" },
          paddingTop: { xs: "5%", lg: "40px" },
          fontSize: { xs: "24px", md: "35px" },
          textAlign: { xs: "center", lg: "left" },
          color: [sea],
          fontFamily: "Nunito",
        }}
      >
        {t("toptext_describe_1")}
        <br />
        {t("toptext_describe_2")}
      </Typography>

      <Box
        sx={{
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Button
          onClick={handleClickOpen}
          variant="contained"
          sx={{
            background: [sea],
            marginTop: "20px",
            marginLeft: { lg: "10%" },
            fontSize: { xs: "20px", lg: "25px" },
            fontFamily: "Nunito",
            color: "black",
            borderRadius: "1rem",
          }}
          type="submit"
        >
          {t("join_button")}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          sx={{
            backdropFilter: "blur(5px) sepia(5%)",
            "& .MuiDialog-paper": {
              borderRadius: "20px",
            },
          }}
        >
          <DialogTitle textAlign="center">
            {" "}
            <Typography fontFamily="nunito" fontSize="34px" fontWeight="500">
              {t("join_button")}
            </Typography>
          </DialogTitle>
          <form onSubmit={handleSubmit(onSubmitToGoogleSheets)}>
            <Grid container spacing={2} columns={[3, 12]} padding="10px">
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  {...register("name", { required: true })}
                  placeholder={t("Name")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  {...register("surname", { required: true })}
                  placeholder={t("Surname")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="date"
                  {...register("birthday", { required: true })}
                  placeholder={t("Birthday")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  {...register("phoneNumber", { required: true })}
                  placeholder={t("PhoneNumber")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  {...register("telegram", { required: true })}
                  placeholder="Telegram"
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Typography
                  fontFamily="nunito"
                  fontSize="20px"
                  fontWeight="500"
                >
                  {t("Experience_education")}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  {...register("education", { required: true })}
                  placeholder={t("EducationLevel")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  {...register("experience", { required: true })}
                  placeholder={t("Experience")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  {...register("skills", { required: true })}
                  placeholder={t("Skills")}
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Typography
                  fontFamily="nunito"
                  fontSize="20px"
                  fontWeight="500"
                >
                  {t("Motivation")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="nunito"
                  fontSize="18px"
                  fontWeight="300"
                  textAlign="center"
                >
                  {t("Motivation_text")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  {...register("motivation", { required: true })}
                  placeholder={t("Motivation")}
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Typography
                  fontFamily="nunito"
                  fontSize="20px"
                  fontWeight="500"
                >
                  {t("Additional_Info")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="nunito"
                  fontSize="18px"
                  textAlign="center"
                  fontWeight="300"
                >
                  {t("Additional_Text")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  {...register("additionalInformation", { required: true })}
                  placeholder={t("Additional_Info")}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  paddingTop="20px"
                  fontFamily="nunito"
                  fontSize="18px"
                  textAlign="center"
                  fontWeight="300"
                >
                  {t("Section_question")}
                </Typography>
                <List fullWidth height="200px">
                  <ListItem>
                    <Typography
                      fontWeight="400"
                      fontFamily="nunito"
                      fontSize="14px"
                    >
                      {t("Section_text_1")}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      fontWeight="400"
                      fontFamily="nunito"
                      fontSize="14px"
                    >
                      {t("Section_text_2")}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      fontWeight="400"
                      fontFamily="nunito"
                      fontSize="14px"
                    >
                      {t("Section_text_3")}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      fontWeight="400"
                      fontFamily="nunito"
                      fontSize="14px"
                    >
                      {t("Section_text_4")}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      fontWeight="400"
                      fontFamily="nunito"
                      fontSize="14px"
                    >
                      {t("Section_text_5")}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      fontWeight="400"
                      fontFamily="nunito"
                      fontSize="14px"
                    >
                      {t("Section_text_6")}
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  {...register("section", { required: true })}
                  placeholder={t("Section")}
                />
              </Grid>

              <Grid
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
                container
                spacing={2}
                columns={[3, 12]}
                padding="10px"
                paddingTop="30px"
                alignItems="center"
              >
                <Grid item xs={1}>
                  <Radio {...register("validation", { required: true })} size="medium"/>
                </Grid>
                <Grid item xs={11}>
                  <Typography
                    fontFamily="nunito"
                    fontSize="16px"
                    fontWeight="300"
                  >
                    {t("Rules")}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
                container
                spacing={2}
                columns={[3, 12]}
                padding="10px"
                paddingTop="30px"
                alignItems="center"
              >
                <Grid item xs={12} textAlign="center">
                  {/* <Checkbox
                    size="medium"
                    {...register("validation", { required: true })}
                  /> */}
                  <Radio {...register("validation", { required: true })} size="medium"/>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    fontFamily="nunito"
                    fontSize="16px"
                    fontWeight="300"
                    textAlign="center"
                  >
                    {t("Rules")}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <DialogActions>
              <Button type="submit" onClick={handleCloseTimed}>
                {t("Submit")}
              </Button>
              <Button onClick={handleClose}>{t("Cancel")}</Button>
            </DialogActions>
          </form>
        </Dialog>
        <Snackbar
          open={successOpen}
          autoHideDuration={6000} // Adjust the duration as needed (in milliseconds)
          onClose={() => setSuccessOpen(false)}
        >
          <Alert
            severity="success"
            fullWidth
            onClose={() => setSuccessOpen(false)}
          >
            <AlertTitle>Success</AlertTitle>
            Your form data has been submitted successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          open={errorOpen}
          autoHideDuration={6000} // Adjust the duration as needed (in milliseconds)
          onClose={() => setErrorOpen(false)}
        >
          <Alert severity="error" fullWidth onClose={() => setErrorOpen(false)}>
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
