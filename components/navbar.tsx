"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/contact", label: "Contact Us" },
  { href: "/location", label: "On-Site Location" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="flex items-center gap-2 px-7 py-4">
              <Image src="/emblem.png" alt="logo" width={25} height={25} />
              <span className="font-bold text-xl">Barrel Master BBQ</span>
            </div>
            <nav className="flex flex-col gap-4 px-7 py-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-accent",
                    pathname === route.href
                      ? "text-accent"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <Button className="mt-4 bg-accent hover:bg-accent">
                Order Now
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center justify-center gap-2">
            <Image
              src="/emblem.png"
              alt="logo"
              width={25}
              height={25}
              className="ml-2"
            />
            <span className="font-bold text-xl hidden md:inline-flex">
              Barrel Master BBQ
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 mx-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent/90",
                pathname === route.href
                  ? "text-accent"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto">
          <Link
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-accent hover:bg-accent/90 hidden md:inline-flex"
            )}
            href={"/order"}
          >
            Order Now
          </Link>
        </div>
      </div>
    </header>
  );
}
