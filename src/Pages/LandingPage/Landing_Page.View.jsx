import { Footer } from "../../components/UI/Footer";

import { HeroLandPage } from "../../components/LandingPage/Hero.LanP";
import { Navbar_Landing_Page } from "../../components/UI/Navbar_Landing_Page";
import { Actividades } from "../../components/LandingPage/sections/Actividades";
import { DestinosPopulares } from "../../components/LandingPage/sections/DestinosPopulares";
import { Promociones } from "../../components/LandingPage/sections/Promociones/Promociones";


export const Landing_Page = () => {
  return (
    <>
      <Navbar_Landing_Page />
      <HeroLandPage />
      <Actividades />
      <DestinosPopulares />
      <Promociones />
      <Footer />
    </>
  );
};
