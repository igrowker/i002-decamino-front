import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  // NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import logo from "/logosinFondo.png";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Navbar_Landing_Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <Navbar
      position="static"
      className="w-full bg-[#0a1200]/90 text-white"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex justify-between items-center">
        <NavbarBrand>
          <img className="w-[60px] h-[56px]" src={logo} alt="DeCamino" />
          <p className="font-bold font-nunito text-2xl md:text-3xl">DeCamino</p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden ml-auto"
        />
      </NavbarContent>

      <NavbarContent className="hidden md:flex">
        {menuItems.map((item) => (
          <NavbarItem className="mx-1  " key={item.name}>
            <Link color="foreground" to={item.href}>
              <p className="font-nunito">{item.name}</p>
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
        <Button
          className="   font-nunito text-white  bg-greenT   md:w-[150px] text-md"
          radius="full"
        >
          Registrarme
        </Button>
        </NavbarItem>
      </NavbarContent>

      {/* MENU HAMBURGUESA */}
      <NavbarMenu >
       <Sidebar  />
      </NavbarMenu>
      
    </Navbar>
  );
};
