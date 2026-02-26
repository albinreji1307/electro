import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NLetter from "../components/NewsLetter";
import Breadcrumbs from "../components/BrudCrumbs";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Breadcrumbs />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <NLetter />
      <Footer />
    </div>
  );
};

export default MainLayout;
