import React from "react";
import DecentralizedSocietySection from "../components/DecentralizedSocietySection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PortfolioSection />
      <DecentralizedSocietySection />
      <Footer />
    </>
  );
};

export default Home;
