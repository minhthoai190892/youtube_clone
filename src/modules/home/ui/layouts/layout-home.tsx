import React from "react";
import HomeNavbar from "../components/home-navbar";
import HomeSidebar from "../components/home-sidebar";
interface LayoutProps {
  children: React.ReactNode;
}
export default function LayoutHome({ children }: LayoutProps) {
  return (
    <div>
      <div className="w-full">
        <HomeNavbar />
      </div>
      <div className="flex min-h-screen pt-[4rem]">
        <HomeSidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}
