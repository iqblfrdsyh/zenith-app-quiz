import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const MenuItem = ({ href, label, icon, isActive, onClick }) => (
  <li>
    <Link
      href={href}
      className={`flex items-center px-4 py-2 rounded ${
        isActive
          ? "bg-gray-700 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </Link>
  </li>
);

const SidebarAdmin = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname.split("/admin/")[1] || "";

  const toggleSidebar = () => setIsOpen((prevState) => !prevState);

  return (
    <div className="flex">
      <div className="flex gap-3 items-start p-4 w-screen  md:hidden z-50 bg-white">
        <button
          className="text-2xl z-50 relative mb-2"
          onClick={toggleSidebar}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} color="black" />}
        </button>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {menuItems.find((item) => item.href.includes(currentPath))?.label ||
            "Dashboard"}
        </h1>
      </div>

      <div
        className={`fixed md:relative flex flex-col h-screen w-64 bg-gray-800  text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h1 className="text-lg font-bold">Zenith Admin</h1>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white focus:outline-none"
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>

        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <MenuItem
                key={item.href}
                {...item}
                isActive={currentPath === item.href.split("/admin/")[1]}
              />
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-700 mt-auto">
          <button className="w-full text-red-500 hover:bg-gray-700 rounded py-2">
            Logout
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          aria-label="Close menu"
        ></div>
      )}
    </div>
  );
};

export default SidebarAdmin;
