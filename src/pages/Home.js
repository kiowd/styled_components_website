import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/About";
import Rooms from "../components/home/Rooms";
import Footer from "../components/home/Footer";
import ScrollToTop from "../components/globals/ScrollTop";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Rooms />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
