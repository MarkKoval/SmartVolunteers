import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { sea } from "../components/constants";
import backgroundImage from "./background.jpg";
import { useTranslation } from "react-i18next";
import React from "react";

export default function TopText() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzAsbffUbcXXqMz0pns6zOgxks-Ziw7gQtxWJK43qHKPD2gaRussLcfKdXd9vtyQpU/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <form onSubmit={(e) => Submit(e)}>
            <DialogTitle>{t("join_button")}</DialogTitle>
            <DialogContent>
                <TextField
                  required
                  variant="outlined"
                  type="text"
                  name="Name"
                  placeholder="First Name"
                />
                <TextField
                  required
                  variant="outlined"
                  type="text"
                  name="LastName"
                  placeholder="Last Name"
                />
                <TextField
                  required
                  variant="outlined"
                  type="email"
                  name="Email"
                  placeholder="E-mail"
                />
                <TextField
                  required
                  variant="outlined"
                  type="date"
                  name="BDay"
                  placeholder="B-Day"
                />
                <TextField
                  required
                  variant="outlined"
                  type="text"
                  name="Telegram"
                  placeholder="Telegram"
                />
                <TextField
                  required
                  variant="outlined"
                  type="text"
                  name="Instagram"
                  placeholder="Instagram"
                />
                <TextField
                  required
                  variant="outlined"
                  type="text"
                  name="Question1"
                  placeholder="Question 1"
                />
                <TextField
                  required
                  variant="outlined"
                  type="text"
                  name="Question2"
                  placeholder="Question 2"
                />
              
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button name="Name" type="submit">
                {t("join_button")}
              </Button>
            </DialogActions>
            </form>
          </Dialog>
        </Box>
      
    </Box>
  );
}
