"use cl";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoIcon from "@/assets/LogoIcon";
import MenuIcon from "@/assets/MenuIcon";
import CloseIcon from "@/assets/CloseIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "ITEMS 1", href: "#" },
    { name: "ITEMS 2", href: "#" },
    { name: "ITEMS 3", href: "#" },
    { name: "ITEMS 4", href: "#" },
  ];

  return (
    <div className="bg-black-900 text-white">
      <div className="px-5 md:px-10 py-5 flex  items-center justify-between w-full">
        <div className="flex items-center">
          {isMobile && (
            <div className="mr-4 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          )}
          <Link href="/" className="flex items-center justify-center">
            <div className="flex items-center h-8 w-28">
              <LogoIcon />
            </div>
          </Link>

          {!isMobile && (
            <div className="flex items-center space-x-1">
              <nav className="flex space-x-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      px-4 py-2 text-gray-text rounded-full text-sm hover:bg-gray-800 transition font-medium
                      ${pathname === item.href ? "bg-gray-800 text-yellow-500" : ""}
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>

        <div className="ml-6 flex space-x-2">
          <button className="h-10 bg-yellow-500 hover:bg-dark-yellow cursor-pointer text-black font-[900] italic px-4 py-1.5 rounded-full text-sm">
            SIGN UP
          </button>
          <button className="h-10 border cursor-pointer border-yellow-500 hover:border-subdued-primary text-gray-text font-[900] italic px-4 py-1.5 rounded-full text-sm">
            LOG IN
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-black-900 z-50">
          <nav className="flex flex-col p-5 gap-4">
            {menuItems.map((item) => (
              <span
                key={item.name}
                className={`
                 cursor-pointer rounded-full px-4 py-3.5 text-center text-gray-text text-sm hover:bg-gray-800 transition font-medium
                  ${pathname === item.href ? "bg-gray-800 text-yellow-500" : ""}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </span>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
