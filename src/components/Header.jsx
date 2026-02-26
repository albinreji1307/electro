import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  FiShoppingCart,
  FiSearch,
  FiMenu,
  FiX,
  FiMapPin,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import DepartmentMenu from "./DepartmentMenu";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    navigate(`/shop?search=${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="hidden md:block bg-gray-100 text-sm text-gray-600 border-b">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          <p>Welcome to Worldwide Electronics Store</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer">
              <FiMapPin />
              <span>Store Locator</span>
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <FiTruck />
              <span>Track Your Order</span>
            </div>

            <div className="cursor-pointer">Dollar (US)</div>

            <div className="flex items-center gap-1 cursor-pointer">
              <FiUser />
              <span>Register or Sign in</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <button
            onClick={() => setMobileOpen(true)}
            className="text-2xl md:hidden"
          >
            <FiMenu />
          </button>

          <Link to="/" className="text-3xl md:text-4xl font-bold text-gray-800">
            electro<span className="text-yellow-500">.</span>
          </Link>

          <div className="hidden md:flex w-1/2 border-2 border-yellow-500 rounded-full overflow-hidden">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search..."
              className="flex-1 px-4 py-2 outline-none"
            />

            <div
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="px-4 py-2 border-l cursor-pointer bg-gray-50 relative"
            >
              All Categories
              {categoryOpen && (
                <div className="absolute top-full right-0 bg-white shadow-lg w-40 mt-2 rounded z-50">
                  <div className="p-2 hover:bg-gray-100 cursor-pointer">
                    Electronics
                  </div>
                  <div className="p-2 hover:bg-gray-100 cursor-pointer">
                    Laptops
                  </div>
                  <div className="p-2 hover:bg-gray-100 cursor-pointer">
                    Mobiles
                  </div>
                </div>
              )}
            </div>

            <button
              className="bg-yellow-500 px-6 text-white flex items-center justify-center"
              onClick={handleSearch}
            >
              <FiSearch size={20} />
            </button>
          </div>

          <Link to="/cart" className="relative">
            <FiShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        <div className="px-4 pb-4 md:hidden">
          <div className="flex border-2 border-yellow-500 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-4 py-2 outline-none"
            />
            <button className="bg-yellow-500 px-4 text-white">
              <FiSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-white border-t sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto flex items-center gap-10 px-4 py-3">
          <DepartmentMenu />

          <div className="flex gap-8 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                  : "hover:text-yellow-500 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                  : "hover:text-yellow-500 transition"
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                  : "hover:text-yellow-500 transition"
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/trending"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                  : "hover:text-yellow-500 transition"
              }
            >
              Trending Styles
            </NavLink>

            <NavLink
              to="/gift"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                  : "hover:text-yellow-500 transition"
              }
            >
              Gift Cards
            </NavLink>
          </div>

          <div className="ml-auto text-gray-500">
            Free Shipping on Orders $50+
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <div className="bg-white w-72 h-full p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg"></h2>
              <button onClick={() => setMobileOpen(false)}>
                <FiX size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link to="/shop" onClick={() => setMobileOpen(false)}>
                Shop
              </Link>
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Featured Brands
              </Link>
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Trending Styles
              </Link>
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Gift Cards
              </Link>
            </div>

            <hr className="my-6" />

            <div className="flex flex-col gap-4 text-gray-600">
              <Link to="/">Value of the Day</Link>
              <Link to="/">Top 100 Offers</Link>
              <Link to="/">New Arrivals</Link>
              <Link to="/">Computers & Accessories</Link>
              <Link to="/">Mobiles & Tablets</Link>
            </div>
            <DepartmentMenu />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
