import Image from "next/image";
import React from "react";
import NavbarLinks from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="sticky z-50 inset-0 w-full flex p-2 sm:px-5 sm:py-3 bg-white justify-center">
      <div className="flex max-w-screen-2xl w-full items-center ">
        <div className="flex items-center md:flex-[0.6]">
          <MobileNavbar />
          <Image
            src={"/assets/Logo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="w-36 h-auto "
          />
        </div>

        <div className="ml-auto md:hidden bg-orange-400 p-2 rounded-full">
          <User className="text-white" />
        </div>

        <div className="hidden md:flex  gap-3 flex-[0.4] items-center justify-between">
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
      </div>
    </div>
  );
};

export default Navbar;
