import React from "react";
import Header from "./_components/header";
// import MenuItems from "./_components/menuItems";
import AboutUs from "./_components/aboutus";
import Menu from "./_components/menuItems";
import QNA from "./_components/questions";
import Footer from "./_components/footer";
import Gallery from "./_components/gallery";
import Contact from "./_components/contact";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Menu />
      <Gallery />
      <QNA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
