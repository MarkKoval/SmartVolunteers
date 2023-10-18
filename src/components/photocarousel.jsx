import Carousel from "nuka-carousel";
import { images } from "./constants";
import { Box } from "@mui/system";

export default function PhotoCarousel() {
  const params = {
    autoplay: true,
    autoplayInterval: 3000,
    wrapAround: true,
    slidesToShow: 1,

    withoutControls: true,
    adaptiveHeightAnimation: true,
  };

  return (
    <Box sx={{display:{xs:"block",md:"block", lg:"none", xl:"none"}}}>
      <Carousel  cellAlign="center" cellSpacing={130} {...params} style={{}}>
        {images.map((image) => (
          <Box
            sx={{
                borderRadius:"5%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              loading: "lazy",
              backgroundImage: `url(${image})`,
              pt: "100%",
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
}
