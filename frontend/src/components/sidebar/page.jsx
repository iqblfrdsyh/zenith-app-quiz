import React from "react";
import Link from "next/link";

const SidebarAdmin = () => {
  const menuItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/quiz", label: "Quiz" },
    { href: "/category", label: "Category" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/users", label: "Users" },
  ];

  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 text-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className="text-lg font-bold">Zenith Admin</h1>
      </div>

      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700 mt-auto">
        <button className="w-full text-red-500 hover:bg-gray-700 rounded py-2">
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarAdmin;
