




export const Promociones = () => {
  return (
    <main className="bg-gray100 w-full px-2 xl:px-32 lg:px-24 md:px-16 sm:px-8 xs:px-6 2xs:px-3">
      <section className="py-8 ">
        <h4 className="text-freshMint text-md">MEJORES OFERTAS</h4>
        <h1 className="text-2xl font-bold">Promociones imperdibles</h1>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 my-8">
      <div className="border border-blue-500 lg:col-span-2 h-48 flex items-center justify-center">
      
      <p className="text-center">Card 1</p>
      </div>
      <div className="border border-blue-500 h-48 flex items-center justify-center">
        <p className="text-center">Card 2</p>
      </div>
      <div className="border border-blue-500 h-48 flex items-center justify-center">
        <p className="text-center">Card 3</p>
      </div>
      <div className="border border-blue-500 h-48 flex items-center justify-center">
        <p className="text-center">Card 4</p>
      </div>
      <div className="border border-blue-500 h-48 flex items-center justify-center">
        <p className="text-center">Card 5</p>
      </div>
    </div>
        
      </section>
    </main>
  );
};
