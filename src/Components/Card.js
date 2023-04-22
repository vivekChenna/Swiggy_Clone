import React, { useContext } from "react";

import Context from "../Context/UseContext";
import CardItem from "./CardItem";

const Card = () => {
  const { restaurantList } = useContext(Context);

  return (
    <div className=" flex flex-wrap justify-evenly gap-8 pt-6">
      {restaurantList.map((item) => {
        return <CardItem key={item.data.sla.restaurantId} data={item} />;
      })}
    </div>
  );
};

export default Card;
