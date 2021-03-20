import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/About";
import Rooms from "../components/home/Rooms";
import Footer from "../components/home/Footer";
import ScrollToTop from "../components/globals/ScrollTop";
import Banner from "../components/globals/Banner";

const Home = () => {
  return (
    <>
      <Header />
      <Banner
        greeting="What's new!"
        children="All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet It uses
          a dictionary of over 200 Latin words, combined with a handful of model
          sentence structures, to generate Lorem Ipsum which looks reasonable. The
          generated Lorem Ipsum is therefore always free from repetition, injected
          humour, or non-characteristic words etc."
        anime_="none"
      />
      <About />
      <Rooms />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
