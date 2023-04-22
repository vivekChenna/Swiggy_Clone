import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  return (
    <div
      className=" flex
     justify-evenly shadow-lg items-center"
    >
      <div>
        <a href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6a9PzSj4XKG69qJNrqcw3bjhu7xH-TJkDCA&usqp=CAU"
            alt="logo"
            className=" max-h-16"
          />
        </a>
      </div>

      <SearchBar />

      <div className="">
        <ul className=" flex gap-20">
          <li>
            <a href="/" className=" font-semibold text-xl">
              Home
            </a>
          </li>
          <li>
            <a href="/" className=" font-semibold text-xl">
              About
            </a>
          </li>
          <li>
            <a href="/" className=" font-semibold text-xl">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {theme ? (
        <div>
          <button className=" font-semibold text-black cursor-pointer pr-1 text-xl">
            Dark Mode
          </button>
          <DarkModeIcon
            className="cursor-pointer"
            onClick={() => setTheme(false)}
          />
        </div>
      ) : (
        <div>
          <button className=" font-semibold text-black cursor-pointer pr-1 text-xl">
            Light Mode
          </button>
          <LightModeIcon
            className="cursor-pointer"
            onClick={() => setTheme(true)}
          />
        </div>
      )}

      <div className="">
        <ul>
          <li>
            <a
              href="/"
              className=" font-semibold text-xl
            "
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
