"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

// Main navigation links (6-8 links ideal for sitelinks)
const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/homes-for-sale", label: "Homes for Sale" },
  { href: "/amenities", label: "Amenities" },
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Dropdown menus
const dropdownMenus = [
  {
    label: "More",
    items: [
      { href: "/home-value", label: "Home Value" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

// All links for mobile menu
const allNavLinks = [
  { href: "/", label: "Home" },
  { href: "/homes-for-sale", label: "Homes for Sale" },
  { href: "/amenities", label: "Amenities" },
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/home-value", label: "Home Value" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Check if dropdown contains active link
  const isDropdownActive = (items: { href: string }[]) => {
    return items.some((item) => isActive(item.href));
  };

  // Handle dropdown toggle
  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isSticky
          ? "bg-[#FDF8F3] shadow-sticky py-3"
          : "bg-[#FDF8F3]/95 backdrop-blur-sm py-4"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-bold text-[#8B5E3C] font-playfair"
            aria-label="Sun City Summerlin Home"
          >
            Sun City Summerlin
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm xl:text-base font-medium transition-colors relative",
                  isActive(link.href)
                    ? "text-[#8B5E3C]"
                    : "text-[#2D2A26] hover:text-[#8B5E3C]"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8B5E3C]" />
                )}
              </Link>
            ))}

            {/* Dropdown Menus */}
            {dropdownMenus.map((menu) => {
              const isActiveMenu = isDropdownActive(menu.items);
              const isOpenMenu = openDropdown === menu.label;

              return (
                <div key={menu.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(menu.label)}
                    className={cn(
                      "flex items-center gap-1 text-sm xl:text-base font-medium transition-colors relative",
                      isActiveMenu
                        ? "text-[#8B5E3C]"
                        : "text-[#2D2A26] hover:text-[#8B5E3C]"
                    )}
                  >
                    {menu.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isOpenMenu && "rotate-180"
                      )}
                    />
                    {isActiveMenu && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8B5E3C]" />
                    )}
                  </button>

                  {/* Dropdown Content */}
                  {isOpenMenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#FDF8F3] rounded-lg shadow-lg border border-[#C4A574]/20 py-2 z-50">
                      {menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            isActive(item.href)
                              ? "text-[#8B5E3C] bg-[#8B5E3C]/5 font-medium"
                              : "text-[#2D2A26] hover:text-[#8B5E3C] hover:bg-[#C4A574]/10"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA & Phone */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a
              href="tel:7022221964"
              className="flex items-center gap-2 text-sm xl:text-base text-[#2D2A26] hover:text-[#8B5E3C] transition-colors"
              aria-label="Call (702) 222-1964"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(702) 222-1964</span>
            </a>
            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 text-white text-sm xl:text-base"
            >
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#2D2A26] hover:text-[#8B5E3C] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="mt-4 pb-4 border-t border-[#C4A574]/20 pt-4">
            <div className="flex flex-col gap-1">
              {allNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3 py-3 rounded-md font-medium transition-colors min-h-[44px] flex items-center",
                    isActive(link.href)
                      ? "text-[#8B5E3C] bg-[#8B5E3C]/10 font-semibold"
                      : "text-[#2D2A26] hover:text-[#8B5E3C] hover:bg-[#C4A574]/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-[#C4A574]/20">
                <a
                  href="tel:7022221964"
                  className="flex items-center gap-2 text-[#2D2A26] hover:text-[#8B5E3C] transition-colors px-3 py-3 rounded-md min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(702) 222-1964</span>
                </a>
                <Button
                  asChild
                  variant="default"
                  className="w-full mt-2 bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 text-white"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Schedule a Tour
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
