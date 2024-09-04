import React, { useEffect } from "react";
import SidebarAdmin from "../sidebar";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { getData } from "@/libs/api-libs";

const menuItems = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/quiz", label: "Quiz" },
  { href: "/admin/category", label: "Category" },
  { href: "/admin/topic", label: "Topic" },
  { href: "/admin/achievement", label: "Achievement" },
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
  const isHiddenSidebar = ["/admin/auth"].includes(pathname);
  const activeTitle = getActiveTitle(pathname, menuItems);

  const router = useRouter();

  useEffect(() => {
    const refreshToken = async () => {
      try {
        await getData("token");
      } catch (error) {
        if (error) {
          router.push("/admin/auth");
        }
      }
    };

    refreshToken();
  }, []);

  return (
    <div className="flex">
      {!isHiddenSidebar && <SidebarAdmin menuItems={menuItems} />}

      <main
        className={`absolute h-screen md:top-0 w-screen ${
          isHiddenSidebar ? "" : "md:ml-64 md:w-[82%] p-5 top-10"
        } overflow-y-auto`}
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
