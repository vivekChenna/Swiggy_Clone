import { Restaurant_Img_URL } from "../config/RestaurantConfig";

import StarIcon from "@mui/icons-material/Star";

import Offer from "../config/offer.png";

const CardItem = ({ data }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
    aggregatedDiscountInfo,
  } = data?.data;

  //   console.log("printing id" + cloudinaryImageId);

  //   width: 254px;
  //     height: 160px;

  return (
    <div className=" min-h-fit  w-80 flex flex-col hover:border border-gray-400">
      <div className=" p-6">
        <a href="/">
          <img
            src={Restaurant_Img_URL + cloudinaryImageId}
            alt="food"
            className=" max-w-full"
          />
        </a>
      </div>

      <h3 className=" font-bold">{name}</h3>

      <p className=" break-words text-sm text-slate-600">
        {cuisines.join(",")}
      </p>

      <div className=" pl-2 pt-2 flex gap-7 items-center">
        {avgRating >= 4 ? (
          <button className=" text-sm border bg-green-400 text-white flex items-center pr-1">
            <StarIcon className="" />
            {avgRating}
          </button>
        ) : (
          <button className=" text-sm border  bg-orange-500 text-white flex items-center pr-1">
            <StarIcon className="" />
            {avgRating}
          </button>
        )}

        <>.</>

        <p className="text-sm text-slate-600">{deliveryTime} min</p>
        <>.</>
        <p className="text-xs text-slate-600">{costForTwoString}</p>
      </div>

      <p
        className=" text-sm  font-semibold
       text-red-700 pt-2"
      >
        {data?.data?.aggregatedDiscountInfo ? (
          <>
            <hr />
            <div className="flex items-center gap-4 pt-3 pl-1">
              <img className=" h-4" src={Offer} alt="offer" />
              <p className="">
                {aggregatedDiscountInfo.descriptionList[0].meta}
              </p>
            </div>
          </>
        ) : null}
      </p>
    </div>
  );
};

export default CardItem;
