import {
  Alert,
  AlertTitle,
  Button,
  Grid,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { deepWater, sea } from "./components/constants";
import { useTranslation } from "react-i18next";
import axios from "axios";

/* eslint-disable */

function DataCollectionForm() {
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
      const after = JSON.stringify(data);
      const response = await axios.post("http://192.168.31.224:5000/submit-to-email", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Data submitted to Mail:", data);
      setSuccessOpen(true);
      setTimeout(() => setSuccessOpen(false), 5000);

      
      console.log("After JSON.stringify(data):", after);
      response.status;

      
    } catch (error) {
      console.log("Error - ", error); // true
    }
  };

  return (
    <div>
      <Grid item xs={4}>
        <form onSubmit={handleSubmit(onSubmitToEmail)}>
          {/* First Row in First Column */}
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <input
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
              <input
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
            <input
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
        <Button
          variant="contained"
          style={{
            width: "6rem",
            background: [sea],
            color: "black",
            borderRadius: "1rem",
          }}
        >
          TESTTTTTTTTTTTTTTTTTTTT
        </Button>
      </Grid>
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
        <Alert fullWidth severity="error" onClose={() => setErrorOpen(false)}>
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default DataCollectionForm;
