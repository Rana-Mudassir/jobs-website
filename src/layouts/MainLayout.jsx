import { Outlet } from "react-router-dom";
import Navbar from "../componenets/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
