import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-7xl sm:text-8xl font-extrabold text-yellow-500">
        404
      </h1>

      <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>

      <p className="mt-4 text-gray-500 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Back to Home
        </Link>

        <Link
          to="/shop"
          className="border border-yellow-500 text-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-50 transition"
        >
          Go to Shop
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
