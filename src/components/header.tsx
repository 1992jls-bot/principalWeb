"use client";

import Link from "next/link";
import { Code } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
      { href: "#about", label: "Sobre Mí" },
      { href: "#projects", label: "Proyectos" },
      { href: "#skills", label: "Habilidades" },
      { href: "#contact", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">Jesús López</span>
        </Link>
        
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium mt-10">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsOpen(false)}>
                <Code className="h-6 w-6 text-primary" />
                <span className="sr-only">Jesús López</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground text-muted-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
