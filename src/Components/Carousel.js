import { useContext } from "react";
import context from "../Context/UseContext";

import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const { carouselData } = useContext(context);
  return (
    <div className="flex h-64 gap-4 pt-6  bg-black items-center justify-center pb-5 overflow-hidden">
      {carouselData.map((value) => {
        return <CarouselItem key={value.data.bannerId} data={value} />;
      })}
    </div>
  );
};

export default Carousel;
