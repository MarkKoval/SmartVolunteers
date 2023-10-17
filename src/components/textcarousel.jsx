/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import "./TextCarousel.css"; // Import your CSS file with styles
import { useTranslation } from "react-i18next";

const message1 = `
Smart Volunteers is an amazing organization with a team of dedicated and passionate individuals who truly care about making a positive impact in the community. Their efforts have made a real difference in Lviv and I am grateful for their hard work and commitment to helping others.<br /><br />
  <div style="text-align: center;">— Sofia</div>
`;

const message2 = `
I've had the privilege of witnessing Smart Volunteers in action, and I must say, their unwavering dedication to improving lives in Lviv is truly inspiring. It's heartwarming to see a group of individuals come together and create such a positive impact. Kudos to Smart Volunteers for their incredible work!<br /><br />
  <div style="text-align: center; font-family:"Nunito"">— Inna</div>
`;

const message3 = `
Smart Volunteers is an example of what can be achieved when a group of people with a shared mission and a lot of heart join forces. Lviv is undoubtedly a better place thanks to their tireless efforts. I'm continually amazed by the kindness and selflessness of the Smart Volunteers team. Thank you for your extraordinary work!<br /><br />
  <div style="text-align: center;">— Maria</div>
`;

const TextCarousel = () => {
  const { t } = useTranslation  ()
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const messages = [message1, message2, message3];

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsAnimating(false);
      }, 1000); // Animation duration is 1 second (ease-in and ease-out)
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex(
          (prevIndex) => (prevIndex - 1 + messages.length) % messages.length
        );
        setIsAnimating(false);
      }, 1000); // Animation duration is 1 second (ease-in and ease-out)
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3500);

    return () => {
      clearInterval(timer);
    };
  }, [currentTextIndex]);

  const currentMessage = messages[currentTextIndex];

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        container
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Grid xs={1}>
          <Button
            onClick={handlePrev}
            startIcon={<NavigateBefore />}
            style={{
              color: "black",
            }}
          ></Button>
        </Grid>
        <Grid xs={10}>
          <Box
            elevation={3}
            style={{ padding: "20px", borderRadius: "15px" }}
          >
            <Typography
              variant="h5"
              style={{
                fontFamily:"Nunito",
                textAlign: "center",
                opacity: isAnimating ? 0 : 1,
                transition: "opacity 1s ease",
              }}
              dangerouslySetInnerHTML={{ __html: currentMessage }}
            />
          </Box>
          <div className="stage-dots">
            {messages.map((_, index) => (
              <span
                key={index}
                className={`stage-dot ${currentTextIndex === index ? "active" : ""}`}
                onClick={() => setCurrentTextIndex(index)}
              />
            ))}
          </div>
        </Grid>
        <Grid xs={1}>
          <Button
            onClick={handleNext}
            endIcon={<NavigateNext />}
            style={{
              color: "black",
            }}
          ></Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TextCarousel;
