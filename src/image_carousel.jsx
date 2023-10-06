import React, { useEffect, useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3500); // Change image every 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, [currentImageIndex]);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6} container justifyContent="center" alignItems="center">
        <Paper elevation={3} style={{ padding: "20px", borderRadius: "15px" }}>
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "10px"}}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} container justifyContent="center" alignItems="center">
        <Button
          onClick={prevImage}
          startIcon={<NavigateBefore />}
          style={{
            color: "black",
          }}
        >
          Previous
        </Button>
        <Button
          onClick={nextImage}
          endIcon={<NavigateNext />}
          style={{
            color: "black",
          }}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default ImageCarousel;
