import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";

const navbarItems = [
  {
    item: "Reviews",
    path: "/reviews",
  },
  {
    item: "Order Tracking",
    path: "/ordertracking",
  },
  {
    item: "Help",
    path: "/help",
  },
];

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showDropdownShopItems, setShowDropdownShopItems] = useState(false);
  const dropdown = useRef(null);
  const router = useRouter();
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showNav) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowNav(false);
      }
    }
    window.addEventListener("click", handleClick);

    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showNav]);

  return (
    <nav className="bg-white   py-3">
      <div className="container mx-auto md:px-6 px-3   flex justify-around md:items-center">
        <Link href="/">
          <a className="block  text-xl font-bold md:text-2xl  " href="#">
            <Image
              src="/images/injestic.svg"
              alt="injestic shop logo"
              width={180}
              height={80}
            />
          </a>
        </Link>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className={`${showNav ? "" : "hidden lg:block"} `}>
          {/* <div className="flex flex-col  lg:flex-row md:mx-6"> */}
          <ul
            className={`flex flex-col  lg:flex-row md:mx-6 ${
              showNav &&
              `
              transform transition-transform ease-linear delay-1000 duration-1000
              absolute lg:static 
              top-20 
              left-0

              z-50

              py-10 lg:py-0
          
              px-10 lg:px-0
              shadow-md lg:shadow-none
              
              text-center
              w-screen lg:w-full
              flex 
              flex-col lg:flex-row
              justify-center
              items-start
              space-y-5 lg:space-y-0
              bg-white`
            }`}
          >
            <li>
              <Link href={`/`}>
                <a
                  className={
                    router.pathname === `/`
                      ? " border-blue-500 text-gray-500 hover:text-gray-700 text-lg border-b-2 mx-1.5 sm:mx-6 transition ease-in duration-300"
                      : " text-gray-800 text-lg  mx-1.5 sm:mx-6"
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <div className="relative inline-block ">
                <div>
                  <Link href={`/shop`}>
                    <a
                      // onMouseEnter={() => setShowDropdownShopItems(true)}
                      // onMouseLeave={() => setShowDropdownShopItems(false)}
                      className={
                        router.pathname === `/shop`
                          ? " border-blue-500 text-gray-500 hover:text-gray-700 text-lg border-b-2 mx-1.5 sm:mx-6 transition ease-in duration-300"
                          : " text-gray-800 text-lg  mx-1.5 sm:mx-6"
                      }
                    >
                      Shop
                    </a>
                  </Link>
                </div>

                <div
                  className={` 
                  ${!showDropdownShopItems && "hidden"}
                  z-50 
                  origin-top-right 
                  absolute left-0 mt-4 w-56 rounded-md 
                  shadow-lg bg-white ring-1 
                  ring-black ring-opacity-5 
                  focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <Link href="/">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Gifts
                      </a>
                    </Link>
                    <Link href="/">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        By Collections
                      </a>
                    </Link>
                    <Link href="/">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                      >
                        By Types
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            {navbarItems.map((navItem) => (
              <li key={navItem.item} className="list-none text-left">
                <Link href={`${navItem.path}`}>
                  <a
                    className={
                      router.pathname === `${navItem.path}`
                        ? "border-blue-500 text-gray-500 hover:text-gray-700 text-lg border-b-2 mx-1.5 sm:mx-6 transition ease-in duration-300"
                        : "text-gray-800 text-lg  mx-1.5 sm:mx-6"
                    }
                  >
                    {navItem.item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-5 ">
          {/* cart */}
          <div
            ref={dropdown}
            className="flex justify-center items-center md:block"
          >
            <Link href="/" passHref>
              <a
                onClick={() => setCartOpen(!cartOpen)}
                className="relative text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>

                <span className="absolute -top-2 left-6  flex justify-center items-center  text-red-500">
                  {cartQuantity}
                </span>
                {/* mini cart */}
                <MiniCart cart={cart} />
              </a>
            </Link>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="flex px-3 lg:hidden">
            <button
              onClick={() => setShowNav(!showNav)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-9 w-9 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
