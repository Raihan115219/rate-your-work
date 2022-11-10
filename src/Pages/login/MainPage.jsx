import React from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function MainPage() {
  return (
    <div>
      <Helmet>
        <title>Working Review</title>
      </Helmet>
      <Header></Header>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
