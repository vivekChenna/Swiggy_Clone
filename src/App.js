import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Body from "./Components/Body";

import Carousel from "./Components/Carousel";

import Context from "./Context/UseContext";

import { useEffect, useState } from "react";

function App() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );

    const result = await data.json();

    console.log("printing the result");
    console.log(result);

    const FinalList = result.data.cards.find((element) => {
      return element.cardType === "seeAllRestaurants";
    });

    const carousel = result.data.cards.find((element) => {
      return element.cardType === "carousel";
    });

    setCarouselData(carousel.data.data.cards);
    console.log("printing carousel data");
    console.log(carousel.data.data.cards);

    console.log(FinalList.data.data.cards);

    setRestaurantList(FinalList.data.data.cards);
    setFilterRestaurant(FinalList.data.data.cards);
  };

  return (
    <Context.Provider
      value={{
        restaurantList,
        setRestaurantList,
        filterRestaurant,
        carouselData,
        setCarouselData,
      }}
    >
      <Navbar />
      <Body />
    </Context.Provider>
  );
}

export default App;
