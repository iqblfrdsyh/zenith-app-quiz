import React from "react";
import SidebarAdmin from "../sidebar";
import { usePathname } from "next/navigation";

export function AdminLayout({ children }) {
  const pathname = usePathname();
  const currentPath = pathname.split("/admin/")[1] || "";

  const menuItems = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/quiz", label: "Quiz" },
    { href: "/admin/category", label: "Category" },
    { href: "/admin/leaderboard", label: "Leaderboard" },
    { href: "/admin/users", label: "Users" },
  ];

  const activeTitle =
    menuItems.find((item) => item.href.includes(currentPath))?.label ||
    "Dashboard";

  return (
    <div className="flex">
      <SidebarAdmin menuItems={menuItems} />
      <main className="absolute top-10 p-5 overflow-x-hidden md:left-64 md:top-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold p-5 hidden md:block">
          {activeTitle}
        </h1>
        {children}
      </main>
    </div>
  );
}
