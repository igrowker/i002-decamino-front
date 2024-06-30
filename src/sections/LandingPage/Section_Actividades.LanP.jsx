
import { FaKitchenSet } from "react-icons/fa6";
import { GiMountainRoad } from "react-icons/gi";
import { MdFestival, MdFoodBank } from "react-icons/md";


export const Section_Actividades = () => {
  return (
    <main className=" bg-softWood w-full px-2 xl:px-32 lg:px-24 md:px-16 sm:px-8 xs:px-6 2xs:px-3">
        <section className="py-8 ">
            <h4 className="text-white text-md">DESCUBRIR</h4>
            <h1 className="text-2xl font-bold">Actividades en el camino</h1>
            <p className="text-[#073D37] pt-2 pb-8">
            Explora y disfruta de talleres culinarios, rutas de senderismo, festivales locales y mercados artesanales. 
            Participa en catas de productos frescos y sumérgete en la cultura rural, creando recuerdos auténticos y duraderos.
            </p>
            <div className="flex gap-3 justify-around">
                <article>
                    <p className="text-[78px]">
                        <FaKitchenSet/>
                    </p>
                </article>
                <article>
                    <p className="text-[78px]">
                        <GiMountainRoad/>
                    </p>
                </article>
                <article>
                    <p className="text-[78px]">
                        <MdFestival/>
                    </p>
                </article>
                <article>
                    <p className="text-[78px]">
                        <MdFoodBank/>
                    </p>
                </article>
            </div>
        </section>
    </main>
  )
}
