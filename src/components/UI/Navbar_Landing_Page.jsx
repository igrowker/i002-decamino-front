import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar_Landing_Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Mi ruta",
      href: "/",
    },
    {
      name: "Sobre nosotros",
      href: "/",
    },
    {
      name: "Contacto",
      href: "/",
    },
    {
      name: "Iniciar sesión",
      href: "/login",
    },
    {
      name: "Registrarme",
      href: "/register",
    },
  ];

  return (
    <Navbar style={{paddingLeft:"10%",paddingRight:"5%"}} className="fixed  w-full bg-transparent z-50 text-white" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <img className="w-[60px] h-[56px] " src={logo}/> */}
          <p className="font-bold font-nunito text-3xl ">DeCamino</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex  gap-4">
        {menuItems.map((item) => (
          <NavbarItem className="mx-2 " key={item.name}>
            <Link color="foreground" to={item.href}>
              <p className={`font-nunito font-[500]`}> {item.name} </p>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link className="w-full" size="lg" to={item.href}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
