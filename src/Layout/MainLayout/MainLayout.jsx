import React from "react";
import { Outlet } from "react-router-dom";
import HeaderTop from "../../Pages/Shared/HeaderTop/HeaderTop";

export default function MainLayout() {
  return (
    <>
      <HeaderTop />
      <Outlet />
    </>
  );
}
