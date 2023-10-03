// eslint-disable-next-line no-unused-vars
import React from "react";
import SwipeableViews from "react-swipeable-views";
import {
  autoPlay,
  virtualize,
  bindKeyboard,
} from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";
import backgroundImage1 from "../../images/IMG1.png";
import backgroundImage2 from "../../images/IMG2.png";
import backgroundImage3 from "../../images/IMG3.png";
import backgroundImage4 from "../../images/IMG4.png";
import backgroundImage5 from "../../images/IMG5.png";
import backgroundImage6 from "../../images/IMG6.png";

const EnhancedSwipeableViews = bindKeyboard(
  autoPlay(virtualize(SwipeableViews))
);

const styles = {
  slide: {
    padding: 15,
    minHeight: 330,
    color: "#fff",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  carouselContainer: {
    position: "relative",
    zIndex: 1,
  },
};

function slideRenderer(params) {
  const { index, key } = params;
  let backgroundImage;

  switch (mod(index, 6)) {
    case 0:
      backgroundImage = backgroundImage1;
      break;

    case 1:
      backgroundImage = backgroundImage2;
      break;

    case 2:
      backgroundImage = backgroundImage3;
      break;

    case 3:
      backgroundImage = backgroundImage4;
      break;

    case 4:
      backgroundImage = backgroundImage5;
      break;

    case 5:
      backgroundImage = backgroundImage6;
      break;

    default:
      break;
  }

  const slideStyle = {
    ...styles.slide,
    backgroundImage: `url(${backgroundImage})`,
  };

  return <div style={slideStyle} key={key}></div>;
}

function SwipeableCarousel() {
  return (
    <EnhancedSwipeableViews slideCount={10} slideRenderer={slideRenderer} />
  );
}

export default SwipeableCarousel;
