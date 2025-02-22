import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export default function HomeNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href={"/"}>
            <div className="flex gap-1 items-center ">
              <Image src={"/logo.svg"} width={32} height={32} alt={""} />
              <p className="text-xl font-semibold tracking-tighter">
                Youtube Clone
              </p>
            </div>
          </Link>
        </div>
        {/* search bar  */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>
        {/* auth */}
        <div className="flex-shrink-0 items-center gap-4 flex">
          <AuthButton />
        </div>
      </div>
    </div>
  );
}
