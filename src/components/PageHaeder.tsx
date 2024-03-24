import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { Logo } from "@/components/icons/Logo";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/aboutme" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // Génère les éléments de menu en fonction des conditions
  const generateMenuItem = (item: { name: string, href: string }, index: number) => {
    return (
      <NavbarMenuItem key={`${item.name}-${index}`}>
        <Link
          className="w-full text-black"
          href={item.href}
          size="lg"
        >
          {item.name}
        </Link>
      </NavbarMenuItem>
    );
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white border-none"
    >
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand >
          <Logo />
        </NavbarBrand>
        {menuItems.slice(0, 4).map((item, index) => (
          <NavbarItem key={index}> 
            <Link className="text-black font-OpenSans text-xl" href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map(generateMenuItem)}
      </NavbarMenu>
    </Navbar>
  );
}
