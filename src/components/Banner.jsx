import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PromoBanner = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-100 relative">
        <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          <div className="max-w-xl text-center lg:text-left z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-700 leading-snug">
              SHOP AND <span className="font-bold text-gray-900">SAVE BIG</span>{" "}
              ON HOTTEST TABLETS
            </h2>
          </div>

          <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
            <div className="bg-yellow-400 text-center px-6 py-3 rounded-lg shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide">
                Starting at
              </p>
              <p className="text-2xl sm:text-3xl font-bold">
                $99
                <span className="text-base align-super">99</span>
              </p>
            </div>
          </div>

          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-auto lg:h-auto flex justify-center">
            <img
              src="https://pngimg.com/uploads/airPods/airPods_PNG1.png"
              alt="product"
              className="h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
