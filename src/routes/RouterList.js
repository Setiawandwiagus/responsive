import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import { Dashboard } from "../pages/HalamanRouter/Dashboard";
import { ReduxPages } from "../pages/reduxHandle/ReduxPages";
import { BelajarResponsive } from "../pages/BelajarResponsive";

// import { Gerbang } from "../pages/Gerbang";
// import { Paijo } from "../pages/Paijo";
// import { Tukimin } from "../pages/Tukimin";
// import { Pardi } from "../pages/Pardi";
// import { Alex } from "../pages/Alex";
// import { Bhizer } from "../pages/Bhizer";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BelajarResponsive />} />
        {<Route path="login" element={<Login />} />}
        {<Route path="dashboard" element={<Dashboard />} />}
      </Routes>
    </BrowserRouter>
  );
};
