import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Menu from "../Components/Menu";
import Experts from "../Components/Experts";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Service from "../Components/Submenu/Service";
import { useStateValue } from "../useStateValue";

function MainPage(props) {
  const [{ isServiceOpen }, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Menu />
      <Experts />
      <Testimonials />
      <Contact />
      {isServiceOpen && <Service />}
    </>
  );
}

export default MainPage;
