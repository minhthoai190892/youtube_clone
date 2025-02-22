import React from "react";
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div>Navbar Feed</div>
      <div>{children}</div>
    </div>
  );
}
