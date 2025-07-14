"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icon } from "@iconify/react";
import { clsx } from "clsx";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Our About" },
  { href: "#guide", label: "Guide" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 border-b bg-black/60 backdrop-blur-md">
      <nav className="flex h-full items-center justify-between px-4 sm:px-5">
        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/logo/2.png"
            width={120}
            height={24}
            className="w-auto"
            alt="logo"
            priority
          />
        </Link>

        {/* ------- Desktop Menu ------- */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Button variant="link">
                <Link href={l.href} className="text-foreground">
                  {l.label}
                </Link>
              </Button>
            </li>
          ))}

          <Button className="rounded-3xl" size="sm" asChild>
            <Link href="#" className="flex items-center gap-2">
              Try it <Icon icon="ic:baseline-arrow-forward" />
            </Link>
          </Button>
        </ul>

        {/* ------- Mobile Menu ------- */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" aria-label="Open menu">
                <Icon
                  icon="ic:round-menu"
                  width={50}
                  className="hover:text-primary active:text-primary"
                />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="top"
              className="w-full bg-black/60 backdrop-blur-2xl"
            >
              {/* Logo di panel */}
              <SheetTitle>
                <div className="flex items-center justify-center">
                  <Image
                    src="/logo/2.png"
                    width={120}
                    height={20}
                    className="w-auto"
                    alt="logo"
                    priority
                  />
                </div>
              </SheetTitle>

              {/* Link list */}
              <SheetHeader>
                <ul className="flex flex-col gap-3">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={handleClose}
                        className={clsx(
                          "block rounded-md px-3 py-2 text-base font-medium ",
                          "hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Button className="rounded-3xl my-4 mx-4" size="sm" asChild>
                  <Link
                    href="#"
                    onClick={handleClose}
                    className="flex items-center justify-center gap-2"
                  >
                    Try it <Icon icon="ic:baseline-arrow-forward" />
                  </Link>
                </Button>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
