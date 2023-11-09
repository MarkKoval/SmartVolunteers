import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { ReactComponent as Logo } from "./SM.svg";
import { FacebookOutlined, Instagram, Telegram } from "@mui/icons-material";
import { deepWater, sea, wave } from "./constants";
import { useTranslation } from "react-i18next";

export default function FooterPC() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbypP2OXZYmq7vzhtQ31iPV3vpXjZGt7uwG_cOCYJBEkGMyEM1VPzuhGicibAaUpNGM/exec",
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

  const { t } = useTranslation();

  return (
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
    >
      <Grid container spacing={3}>
        {/* First Column */}
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <form onSubmit={(e) => Submit(e)}>
            {/* First Row in First Column */}
            <Grid container spacing={4}>
              <Grid item xs={6}>
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
                  name="Name"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
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
                  name="Email"
                />
              </Grid>
            </Grid>
            {/* Second Row in First Column */}
            <Grid item xs={12}>
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
                name="Message"
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

      <Typography variant="body2" align="center" gutterBottom color={deepWater}>
        &copy; {new Date().getFullYear()} Smart Volunteers. {t("copyright")}
      </Typography>
    </Box>
  );
}
