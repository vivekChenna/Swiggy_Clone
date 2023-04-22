import { useContext } from "react";
import Card from "./Card";
import Carousel from "./Carousel";
import context from "../Context/UseContext";

const Body = () => {
  const { carouselData } = useContext(context);
  return (
    <>
      {carouselData.length > 0 ? <Carousel /> : null}
      <Card />
    </>
  );
};

export default Body;
