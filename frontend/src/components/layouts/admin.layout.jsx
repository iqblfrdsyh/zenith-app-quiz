import React from "react";
import SidebarAdmin from "../sidebar";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/quiz", label: "Quiz" },
  { href: "/admin/category", label: "Category" },
  { href: "/admin/topic", label: "Topic" },
  { href: "/admin/leaderboard", label: "Leaderboard" },
  { href: "/admin/users", label: "Users" },
];

const getActiveTitle = (pathname, menuItems) => {
  const currentPath = pathname.split("/admin/")[1] || "";
  return (
    menuItems.find((item) => item.href.includes(currentPath))?.label ||
    "Dashboard"
  );
};

export function AdminLayout({ children }) {
  const pathname = usePathname();
  const isHiddenSidebar = ["/admin/signin"].includes(pathname);
  const activeTitle = getActiveTitle(pathname, menuItems);

  return (
    <div className="flex">
      {!isHiddenSidebar && <SidebarAdmin menuItems={menuItems} />}

      <main
        className={`absolute top-10 p-5 overflow-x-hidden overflow-y-scroll h-screen md:top-0 w-screen ${
          isHiddenSidebar ? "" : "md:ml-64 md:w-[82%]"
        }`}
      >
        {!isHiddenSidebar && (
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold p-3 hidden md:block">
            {activeTitle}
          </h1>
        )}
        {children}
      </main>
    </div>
  );
}
