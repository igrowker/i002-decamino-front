import { Section_Actividades } from "../../sections/LandingPage/Section_Actividades.LanP"
import { Section_Destinos } from "../../sections/LandingPage/Section_Destinos.LanP"
import { Section_Hero } from "../../sections/LandingPage/Section_Hero.LanP"
import { Section_Promociones } from "../../sections/LandingPage/Section_Promociones.LanP"


export const Landing_Page = () => {

  return (
    <>
      <Section_Hero/>
      <Section_Actividades/>
      <Section_Destinos/>
      <Section_Promociones/>
    </>
  )
}
