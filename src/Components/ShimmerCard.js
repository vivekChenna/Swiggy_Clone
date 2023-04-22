import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerCard = () => {
  return (
    <div className=" border flex w-80 h-80 flex-col">
      <div className="flex flex-col gap-3 justify-between">
        <div className=" p-6">
          <Skeleton height={160} width={250} />
        </div>

        <Skeleton width={250} />
        <Skeleton width={300} />
      </div>
    </div>
  );
};

export default ShimmerCard;
