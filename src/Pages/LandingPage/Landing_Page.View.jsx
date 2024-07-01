import { Footer } from "../../components/UI/Footer";

import { HeroLandPage } from "../../components/LandingPage/Hero.LanP";
import { Navbar_Landing_Page } from "../../components/UI/Navbar_Landing_Page";
import { Actividades } from "../../components/LandingPage/sections/Actividades";


export const Landing_Page = () => {
  return (
    <>
      <Navbar_Landing_Page />
      <HeroLandPage />
      <Actividades />
      <Footer />
    </>
  );
};
