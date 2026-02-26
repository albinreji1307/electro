import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { useEffect, useState } from "react";
import SkeletonLoader from "./components/Loading";

function App()

 {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // simulate initial loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
