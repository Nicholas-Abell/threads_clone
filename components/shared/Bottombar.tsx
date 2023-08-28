"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

type BottombarProps = {};

const Bottombar: React.FC<BottombarProps> = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              key={link.label}
              href={link.route}
              className={
                isActive ? "bg-primary-500 bottombar_link" : "bottombar_link"
              }
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-subtle-medium max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Bottombar;
