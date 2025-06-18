"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import Link from "next/link";
import { cn } from "../../lib/utils";

const item = cn(
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
  "text-neutral-200 hover:text-neutral-50",
  "focus:outline-none focus:ring-2 focus:ring-neutral-500/50",
  "transition-all duration-300 ease-in-out",
  "hover:bg-neutral-800/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
  "hover:scale-105",
  "data-[active]:underline data-[active]:text-neutral-50"
);

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-neutral-950/30 backdrop-blur-sm">
      <NavigationMenu className="mx-auto flex max-w-screen-xl px-6 py-4">
        <NavigationMenuList className="flex w-full justify-center gap-8">
          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className={item}>
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* About */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about" className={item}>
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* Work */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/work" className={item}>
                Work
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* Contact */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact" className={item}>
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
