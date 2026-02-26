import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(Boolean);

  const filteredPaths = pathnames[0] === "product" ? ["product"] : pathnames;

  return (
    <div className="bg-gray-100 border-t-4 border-yellow-400">
      <div className="container mx-auto px-6 py-4 text-sm text-gray-600 flex items-center gap-2">
        <Link to="/" className="hover:text-yellow-500 transition">
          Home
        </Link>

        {filteredPaths.map((name, index) => {
          const routeTo = "/" + filteredPaths.slice(0, index + 1).join("/");

          const isLast = index === filteredPaths.length - 1;

          const formattedName = name
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <div key={routeTo} className="flex items-center gap-2">
              <span className="text-gray-400">›</span>

              {isLast ? (
                <span className="text-gray-800 font-medium">
                  {formattedName}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-yellow-500 transition">
                  {formattedName}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
