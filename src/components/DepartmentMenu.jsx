import { useState } from "react";
import { FiMenu, FiChevronRight, FiX } from "react-icons/fi";

const DepartmentMenu = () => {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const categories = [
    "Value of the Day",
    "Top 100 Offers",
    "New Arrivals",
    "Computers & Accessories",
    "Cameras, Audio & Video",
    "Mobiles & Tablets",
    "Movies, Music & Video Game",
    "TV & Audio",
    "Watches & Eyewear",
    "Car, Motorbike & Industrial",
    "Accessories",
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="hidden md:flex bg-yellow-400 px-6 py-3 items-center gap-3 font-semibold rounded-t-md"
      >
        <FiMenu />
        All Departments
      </button>

      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-3 left-5 bg-yellow-400 p-4 rounded-full shadow-lg z-50"
      >
        <FiMenu size={20} />
      </button>

      {open && (
        <div className="hidden md:block absolute left-0 top-full bg-white w-64 shadow-xl z-50">
          {categories.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(item)}
              className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 cursor-pointer border-b"
            >
              <span>{item}</span>
              <FiChevronRight />
            </div>
          ))}
        </div>
      )}

      {active === "Value of the Day" && open && (
        <div className="hidden md:grid absolute left-64 top-full w-[700px] bg-white shadow-xl p-8 grid-cols-3 gap-10 z-50">
          <div>
            <h4 className="font-bold mb-3">Movies & TV Shows</h4>
            <ul className="space-y-2 text-gray-600">
              <li>All Movies & TV Shows</li>
              <li>All English</li>
              <li>All Hindi</li>
            </ul>

            <h4 className="font-bold mt-6 mb-3">Video Games</h4>
            <ul className="space-y-2 text-gray-600">
              <li>PC Games</li>
              <li>Consoles</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Music</h4>
            <ul className="space-y-2 text-gray-600">
              <li>All Music</li>
              <li>Indian Classical</li>
              <li>Musical Instruments</li>
            </ul>
          </div>

       
        </div>
      )}

      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden">
          <div className="bg-white w-72 h-full p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">All Departments</h2>
              <button onClick={() => setMobileOpen(false)}>
                <FiX size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-4 text-gray-700">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <span>{item}</span>
                  <FiChevronRight />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentMenu;
