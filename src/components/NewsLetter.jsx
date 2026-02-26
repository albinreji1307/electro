import { FiSend, FiFacebook, FiTwitter } from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";

const NLetter = () => {
  return (
    <div className="w-full">
      <div className="bg-yellow-400 py-6">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-black">
            <FiSend size={24} />
            <p className="text-lg font-medium">
              Sign up to Newsletter{" "}
              <span className="font-normal">
                ...and receive <strong>$20 coupon for first shopping.</strong>
              </span>
            </p>
          </div>

          <div className="flex w-full lg:w-auto">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 w-full lg:w-80 rounded-l-full outline-none"
            />
            <button className="bg-gray-800 text-white px-6 py-3 rounded-r-full font-medium hover:bg-gray-900 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-14">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              electro<span className="text-yellow-500">.</span>
            </h2>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-yellow-500 text-2xl">🎧</span>
              <div>
                <p className="text-sm text-gray-600">
                  Got questions? Call us 24/7!
                </p>
                <p className="font-semibold text-gray-800">
                  (800) 8001-8588, (0600) 874 548
                </p>
              </div>
            </div>

            <h4 className="font-semibold mt-6 mb-2">Contact info</h4>
            <p className="text-gray-600 text-sm">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>

            <div className="flex gap-5 mt-6 text-gray-600 text-xl">
              <FiFacebook className="hover:text-black cursor-pointer" />
              <FaGoogle className="hover:text-black cursor-pointer" />
              <FiTwitter className="hover:text-black cursor-pointer" />
              <FaGithub className="hover:text-black cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Find it Fast</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>TV & Audio</li>
              <li>Gadgets</li>
              <li>Car Electronic & GPS</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 invisible lg:visible">.</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Printers & Ink</li>
              <li>Software</li>
              <li>Office Supplies</li>
              <li>Computer Components</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>My Account</li>
              <li>Order Tracking</li>
              <li>Wish List</li>
              <li>Customer Service</li>
              <li>Returns / Exchange</li>
              <li>FAQs</li>
              <li>Product Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NLetter;
