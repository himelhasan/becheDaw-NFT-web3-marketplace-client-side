import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
