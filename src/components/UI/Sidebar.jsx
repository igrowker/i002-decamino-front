import { Link } from "react-router-dom";
import logo from "/logosinFondo.png";

const menuItems = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Nosotros",
    href: "/",
  },
  {
    name: "Contacto",
    href: "/",
  },
  {
    name: "Mi ruta",
    href: "/",
  },
  {
    name: "Iniciar sesión",
    href: "/login",
  },
];

export const Sidebar = () => {
  return (
    <div className="flex  flex-col justify-between  bg-white ">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg "
              >
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/register"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg "
            >
              <span className="ml-3">Registrarme</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="size-10 rounded-full object-cover"
          />

          <div className="flex justify-between w-full">
            <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>

            <img className="w-[60px] h-[56px]" src={logo} alt="DeCamino" />
          </div>
        </a>
      </div>
    </div>
  );
};
