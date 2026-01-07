import { Box, Button, Stack, Typography } from "@mui/material";
import { sea } from "../components/constants";
import backgroundImage from "./background.jpg";

export default function TopText() {
  return (
    <Box
      sx={{
        minHeight: { xs: "70vh", md: "900px" },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.627), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        loading: "lazy",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack
        spacing={3}
        className="fade-in-up"
        sx={{
          paddingX: { xs: 3, sm: 6, md: 10 },
          paddingTop: { xs: 6, md: 10 },
          paddingBottom: { xs: 8, md: 10 },
          maxWidth: { xs: "100%", md: "60%" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2.2rem", sm: "3rem", md: "3.75rem" },
            color: [sea],
            fontFamily: "Nunito",
            fontWeight: 700,
          }}
        >
          Make an Impact
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.5rem", md: "2.2rem" },
            color: [sea],
            fontFamily: "Nunito",
            lineHeight: 1.5,
          }}
        >
          Join our volunteer community and make a difference in Lviv. Together
          we can create a better future.
        </Typography>
        <Box>
          <Button
            variant="contained"
            className="hero-glow"
            sx={{
              background: "linear-gradient(120deg, #e5fffb 0%, #7df6e5 50%, #e5fffb 100%)",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontFamily: "Nunito",
              color: "black",
              borderRadius: "999px",
              paddingX: { xs: 3, md: 4 },
              paddingY: { xs: 1, md: 1.5 },
              boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
              },
            }}
            type="submit"
          >
            Join Now
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
