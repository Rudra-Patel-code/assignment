import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import NavbarLinks from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const MobileNavbar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="border-2 h-screen flex flex-col items-center pt-16"
        >
          <Image
            src={"/assets/Logo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="w-40 h-auto "
          />

          <div className="mt-8 flex flex-col gap-6 items-start">
            <NavbarLinks href="/" title="Home" />
            <NavbarLinks href="/about-us" title="About Us" />
            <NavbarLinks href="/lsb" title="List Your Business" />

            <Button
              size={"sm"}
              className="bg-orange-500 hover:bg-orange-500 hover:shadow-[0px_5px_10px_0px_#FFA94D]"
            >
              Login
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
