import { Link } from "react-router-dom";
import logo from "/logosinFondo.png";

const menuItems = [
  {
    name: "Inicio",
    href: "/home",
    isActive: true
  },
  {
    name: "Nosotros",
    href: "/",
    isActive: false
  },
  {
    name: "Contacto",
    href: "/",
    isActive: false
  },
  {
    name: "Mi ruta",
    href: "/",
    isActive: false
  },
  {
    name: "Iniciar sesión",
    href: "/login",
    isActive: false
  },
];

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-b-2xl">
      <div className="px-2 pt-2">
        <ul className="mt-6 space-y-1">
          {menuItems.map((item) => (
            <li key={item.name} className={`flex items-center p-2 text-base font-bold ${ item.isActive ? "text-greenT" : "text-gray-900"} border-t-1 border-woodLogo`}>
              <span className="ml-3">
                <Link
                  to={item.href}
                >
                  {item.name}
                </Link>
              </span>
            </li>
          ))}
          <li className="flex items-center p-3 text-base font-bold text-white border-t-1 border-woodLogo">
            <Link
              to="/register"
            >
              <span className="py-1 px-3 bg-freshMint hover:bg-greenT hover:cursor-pointer rounded-full">Registrarme</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 rounded-b-2xl mt-4">
          <div className="flex justify-end w-full pt-2 pr-2 h-8 bg-woodLogo rounded-b-2xl">
            <img className="w-[60px] h-[56px] mt-[-54px]" src={logo} alt="DeCamino" />
          </div>
      </div>
    </div>
  );
};
