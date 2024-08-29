import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const router = useRouter();
  const pathname = usePathname(); 

  const menus = [
    {
      title: "Home",
      image: "home.png",
      activeImage: "menyala/home.png",
      linkTo: "/",
      className: "w-8 relative bottom-0.5",
    },
    {
      title: "Category",
      image: "category.png",
      activeImage: "menyala/category.png",
      linkTo: "/category",
      className: "w-11 relative left-2",
    },
    {
      title: "AI",
      image: "ai.png",
      activeImage: "menyala/ai.png",
      linkTo: "/ai",
      className: "w-14 relative -top-4 left-2",
    },
    {
      title: "Lead",
      image: "lead.png",
      activeImage: "menyala/lead.png",
      linkTo: "/lead",
      className: "w-[4rem] relative bottom-0.5",
    },
    {
      title: "User",
      image: "user.png",
      activeImage: "menyala/user.png",
      linkTo: "/user",
      className: "w-6 relative bottom-0.5",
    },
  ];

  useEffect(() => {
    const currentMenu = menus.find((menu) => menu.linkTo === pathname);
    if (currentMenu) {
      setActiveMenu(currentMenu.title);
    }
  }, [pathname]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu.title);
    router.push(menu.linkTo);
  };

  return (
    <div className="fixed left-0 right-0 bottom-0 z-50">
      <div className="h-14 bg-white border-t shadow-md m-4 rounded-full flex px-5 items-center justify-between">
        {menus.map((menu) => (
          <img
            key={menu.title}
            src={activeMenu === menu.title ? `images/${menu.activeImage}` : `images/${menu.image}`}
            className={menu.className}
            onClick={() => handleMenuClick(menu)}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
