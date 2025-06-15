"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

const item = cn(
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
  "text-neutral-200 hover:text-neutral-50",
  "focus:outline-none focus:ring-2 focus:ring-neutral-500/50",
  "transition-colors data-[active]:underline data-[active]:text-neutral-50"
);

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-neutral-900/80 backdrop-blur">
      <NavigationMenu className="mx-auto flex max-w-screen-xl px-6 py-4">
        <NavigationMenuList className="flex w-full justify-center gap-6">
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
