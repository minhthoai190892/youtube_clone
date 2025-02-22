import React from "react";
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      {children}
    </div>
  );
}
