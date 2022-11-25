import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
