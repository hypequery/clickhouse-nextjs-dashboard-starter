import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { LogOut } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    href: "/",
    label: "Dashboard",
  },
];

export function NavBar() {
  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <LogOut className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg tracking-tight">ClickHouse Dashboard</span>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} passHref>
                  <NavigationMenuLink className="px-4 py-2 font-medium">{link.label}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
} 