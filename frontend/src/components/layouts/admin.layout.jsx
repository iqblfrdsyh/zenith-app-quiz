import React from "react";
import SidebarAdmin from "../sidebar/page";

export function AdminLayout({ children }) {
  return (
    <div className="flex">
      <SidebarAdmin />
      <main className="flex-1 relative">{children}</main>
    </div>
  );
}
