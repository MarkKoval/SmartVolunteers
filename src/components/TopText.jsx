import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { sea } from "../components/constants";
import backgroundImage from "./background.jpg";
import { useTranslation } from "react-i18next";
import React from "react";
import { useForm } from "react-hook-form";

export default function TopText() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
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
      </Box>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>{t("join_button")}</DialogTitle>
          <DialogContent>
            <TextField
              variant="outlined"
              type="text"
              placeholder="First Name"
              {...register("FirstName", {})}
            />
            <TextField
              variant="outlined"
              type="text"
              placeholder="Last Name"
              {...register("LastName", {})}
            />
            <TextField
            variant="outlined"
              type="email"
              placeholder="E-mail"
              {...register("E-mail", {})}
            />
            <TextField variant="outlined" type="datetime" placeholder="B-Day" {...register} />
            <TextField variant="outlined"
              type="text"
              placeholder="Telegram"
              {...register("Telegram", {})}
            />
            <TextField variant="outlined"
              type="text"
              placeholder="Instagram"
              {...register("Instagram", {})}
            />
            <TextField variant="outlined"
              type="text"
              placeholder="Question 1"
              {...register("Question 1", {})}
            />
            <TextField variant="outlined"
              type="text"
              placeholder="Question 2"
              {...register("Question 2", {})}
            />
            <TextField variant="outlined"
              type="text"
              placeholder="Question 3"
              {...register("Question 3", {})}
            />
            <TextField variant="outlined"
              type="text"
              placeholder="Question 4"
              {...register("Question 4", {})}
            />
            <TextField variant="outlined"
              type="text"
              placeholder="Question 5"
              {...register("Question 5", {})}
            />
            <TextField variant="outlined"
              type="text"
              placeholder="Question 6"
              {...register("Question 6", {})}
            />
            <TextField variant="outlined"
              type="text"
              placeholder="Question 7"
              {...register("Question 7", {})}
            />
            <TextField variant="outlined"
            id="outlined-basic"
              type="text"
              placeholder="Question 8"
              {...register("Question 8", {})}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} type="submit">
              Subscribe
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
