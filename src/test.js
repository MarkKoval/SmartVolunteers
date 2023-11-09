import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { sea } from "./components/constants"; 

export default function Test() {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyyH0JPm8jeMfQXwZE9vqUA0ujCiGGHALWgcpCz0d_hDjQOV7HiPR47l_oL36zKU3I/exec",
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
  return (
    <Box>
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
        <form className="form" onSubmit={(e) => Submit(e)}>
          <DialogTitle>{t("join_button")}</DialogTitle>
          <DialogContent>
            <TextField
              variant="outlined"
              type="text"
              name="Name"
              placeholder="First Name"
            />
            <input
              variant="outlined"
              type="text"
              name="LastName"
              placeholder="Last Name"
            />
            <input
              variant="outlined"
              type="text"
              name="Email"
              placeholder="E-mail"
            />
            <input
              variant="outlined"
              type="text"
              name="BDay"
              placeholder="B-Day"
            />
            <input
              variant="outlined"
              type="text"
              name="Telegram"
              placeholder="Telegram"
            />
            <input
              variant="outlined"
              type="text"
              name="Instagram"
              placeholder="Instagram"
            />
            <input
              variant="outlined"
              type="text"
              name="Question1"
              placeholder="Question 1"
            />
            <input
              variant="outlined"
              type="text"
              name="Question2"
              placeholder="Question 2"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <input name="Name" type="submit" />
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
