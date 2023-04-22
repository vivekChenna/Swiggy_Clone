import React from "react";

import { Carousel_IMG_ID } from "../config/RestaurantConfig";

const CarouselItem = ({ data }) => {
  const { creativeId } = data?.data;
  return (
    <div className="">
      <img src={Carousel_IMG_ID + creativeId} alt="carousel" />
    </div>
  );
};

export default CarouselItem;
