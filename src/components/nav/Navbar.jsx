import { useContext, useState } from "react";
import vite from "/vite.svg";
import { ThemeContext } from "../../context/ThemeContext";
import useStore from "../../store/cartStore";
import { Link } from "react-router";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import useUserStore from "../../store/userStore";
import Cookies from "js-cookie";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {user, logout} = useUserStore((state) => state);
  const count = useStore((state) => state.count);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full text-black p-4 border-b-2 dark:bg-slate-800 border-slate-200 dark:border-slate-600">
      <nav className="flex items-center justify-between flex-wrap">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-lg font-bold dark:text-white">My App</h1>
          <button
            className="md:hidden text-2xl text-slate-700 dark:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:space-x-4 md:w-auto text-slate-600 dark:text-white mt-4 md:mt-0`}
        >
          <li>
            <a href="#" className="block py-2 md:py-0 hover:text-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="block py-2 md:py-0 hover:text-gray-700">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 md:py-0 hover:text-gray-700">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4 mt-4 md:mt-0 text-slate-600 dark:text-white">
          <Link className="relative cursor-pointer" to="/cart">
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {count}
            </span>
            <MdOutlineShoppingCart className="w-6 h-6" />
          </Link>

          <div className="size-10 rounded-full border-2 border-slate-400">
            <img
              src={vite}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-xs">
            <span className="text-sm">Hello</span>
            <span className="font-bold">{user?.name}</span>
          </div>

          <button className="p-2 rounded-full hover:scale-105 cursor-pointer transition-transform" onClick={() => {
            Cookies.remove("token");
            Cookies.remove("refresh");
            logout();
          }}>
            Logout
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:scale-105 transition-transform"
          >
            {theme === "light" ? (
              <BsFillMoonStarsFill className="w-6 h-6 text-black dark:text-white" />
            ) : (
              <MdSunny className="w-6 h-6 text-yellow-400" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
