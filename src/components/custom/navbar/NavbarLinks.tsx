"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarLinks = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "text-sm relative after:absolute after:bottom-0 after:left-0 after:border-b-2 after:border-orange-400  after:transition-all after:duration-500 hover:after:w-full",
        {
          "text-orange-400 after:w-4": isActive,
          "after:w-0": !isActive,
        }
      )}
    >
      {title}
    </Link>
  );
};

export default NavbarLinks;
