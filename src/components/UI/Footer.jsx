import logo from "/logosinFondo.png";

export const Footer = () => {
  return (
    <footer className="bg-softWood text-white py-8 px-8 md:px-20 flex flex-col justify-between min-h-[200px]">
  <div className="flex flex-col md:flex-row justify-between w-full">
    <div className="hidden md:block font-bold text-2xl">
      <div className="flex items-center">
      <img className="w-[60px] h-[56px]" src={logo} alt="DeCamino" />
        <h2>DeCamino</h2>
        
      </div>
    </div>
    <div className="flex flex-col items-end space-y-2 mt-4 md:mt-0 md:ml-auto">
      <a href="#about" className="text-base font-nunito hover:underline">Sobre Nosotros</a>
      <a href="#contact" className="text-base font-nunito hover:underline">Contacto</a>
      <a href="#privacy" className="text-base font-nunito hover:underline">Políticas de privacidad</a>
      <a href="#cookies" className="text-base font-nunito hover:underline">Cookies</a>
    </div>
  </div>
  <div className="flex flex-col w-1/2 md-w-full mt-4">
    <div  className="flex md:hidden items-center justify-start  max-w-[60px]">
      <img className="w-[60px] h-[56px]" src={logo} alt="DeCamino" />
    </div>
    
  </div>
  <hr className="border-t border-gray-200" />
    <div className="text-sm font-nunito text-center mt-2">
      © 2024 DeCamino - Todos los derechos reservados.
    </div>
</footer>

  
  );
};
