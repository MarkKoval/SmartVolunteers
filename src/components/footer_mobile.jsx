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
import { useTranslation } from "react-i18next";

export default function FooterMobile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const { t } = useTranslation();

  return (
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
      <Grid sx={{ paddingTop: 2 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("Name", {})}
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
                label="E-mail"
                id="outlined-basic"
                variant="outlined"
                type="email"
                {...register("E-mail", {})}
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
              {...register("Message", {})}
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

      <Typography variant="body2" align="center" gutterBottom color={deepWater} sx={{paddingTop: 2}}>
        &copy; {new Date().getFullYear()} Smart Volunteers. {t("copyright")}
      </Typography>
    </Box>
  );
}
