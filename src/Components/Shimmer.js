import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ShimmerCard from "./ShimmerCard";
const Shimmer = () => {
  return (
    <>
      <div>
        <Skeleton height={230} />
      </div>
      <div className=" mt-8 flex flex-wrap justify-evenly gap-8">
        {Array(15)
          .fill("")
          .map((e, index) => {
            return <ShimmerCard key={index} />;
          })}
      </div>
    </>
  );
};

export default Shimmer;
