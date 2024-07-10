import { Footer } from "../../components/UI/Footer";
import { Navbar_Landing_Page } from "../../components/UI/Navbar_Landing_Page";

import { Section_HeroLandPage } from "../../sections/LandingPage/Section_Hero.LanP";
import { Section_Actividades } from "../../sections/LandingPage/Section_Actividades.LanP";
import { Section_Promociones } from "../../sections/LandingPage/Section_Promociones.LanP";
import { Section_DestinosPopulares } from "../../sections/LandingPage/Section_DestinosPopulares.LanP";


export const Landing_Page = () => {
  return (
    <>
      <Navbar_Landing_Page />
      <Section_HeroLandPage/>
      <Section_Actividades />
      <Section_DestinosPopulares />
      <Section_Promociones />
      <Footer />
    </>
  );
};
