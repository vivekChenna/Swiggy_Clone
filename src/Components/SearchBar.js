import SearchIcon from "@mui/icons-material/Search";

import Context from "../Context/UseContext";

import { useContext, useEffect, useState } from "react";

const SearchBar = () => {
  const { setRestaurantList, filterRestaurant } = useContext(Context);

  const [search, setSearch] = useState("");

  useEffect(() => {
    setRestaurant(search, filterRestaurant);
  }, [search]);

  const setRestaurant = (search, filterRestaurant) => {
    const data = filterRestaurant.filter((item) => {
      return item.data.name.toLowerCase().includes(search.toLowerCase());
    });

    setRestaurantList(data);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="search..."
        className=" outline-none text-xl"
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => setRestaurant(search, filterRestaurant)}
      />
      <SearchIcon className=" cursor-pointer" />
    </div>
  );
};

export default SearchBar;
