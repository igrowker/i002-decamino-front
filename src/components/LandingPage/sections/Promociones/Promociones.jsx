import { CardPromociones } from "./CardPromociones";


export const Promociones = () => {
  return (
    <main className="bg-gray100 w-full px-2 xl:px-32 lg:px-24 md:px-16 sm:px-8 xs:px-6 2xs:px-3 h-auto">
      <section className="py-8 ">
        <h4 className="text-freshMint text-md">MEJORES OFERTAS</h4>
        <h1 className="text-2xl font-bold">Promociones imperdibles</h1>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 my-8">
          
          <div className="border lg:col-span-2 h-[350px] md:h-[361px] ">
          <CardPromociones />
          </div>
          <div className="border h-[350px] md:h-[361px] ">
            <CardPromociones />
          </div>
          <div className="border h-[350px] md:h-[361px] ">
          <CardPromociones />
          </div>
          <div className="border h-[350px] md:h-[361px] ">
          <CardPromociones />
          </div>
          <div className="border h-[350px] md:h-[361px] ">
          <CardPromociones />
          </div>
        </div>
      </section>
    </main>
  );
};
