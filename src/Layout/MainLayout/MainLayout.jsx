import React from "react";
import { Outlet } from "react-router-dom";
import HeaderTop from "../../Pages/Shared/HeaderTop/HeaderTop";
import Header from "../../Pages/Shared/Header/Header";

export default function MainLayout() {
  return (
    <>
      <HeaderTop />
      <Header />
      <Outlet />
    </>
  );
}
