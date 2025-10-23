import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "/assets/ilexlogonobg.png";

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (link: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(link);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms delay before closing
  };

  const menuItems = [
    {
      title: "Phosphite Range",
      link: "phosphite-range",
      products: [
        { product: "Crop Rooter® Plus", link: "crop-rooter-plus" },
        { product: "PK MAXX™ +", link: "pk-maxx" },
        { product: "OilSeed Raiser™", link: "oilseed-raiser" },
        { product: "CaPITAL™", link: "capital" },
        { product: "Tensile™", link: "tensile" },
        { product: "Beet Raiser™", link: "beet-raiser" },
        { product: "Maniphos™", link: "maniphos" },
        { product: "PK VEG™", link: "pk-veg" },
      ],
    },
    {
      title: "Foliar Range",
      link: "foliar-range",
      products: [
        { product: "Mn SUPER™", link: "mn-super" },
        { product: "Mag Plus™", link: "mag-plus" },
        { product: "ful-oN™", link: "ful-on" },
        { product: "Mn-Cu Plus™", link: "mn-cu-plus" },
        { product: "Foliar Boost™", link: "foliar-boost" },
        { product: "Cu-Zin™", link: "cu-zin" },
        { product: "Pro-K™", link: "pro-k" },
        { product: "Pro-Sul™", link: "pro-sul" },
      ],
    },
    {
      title: "Calcium Supplements",
      link: "calcium-range",
      products: [
        { product: "Pro-Cal™", link: "pro-cal" },
        { product: "Advocate™", link: "advocate" },
        { product: "CaPITAL™", link: "capital" },
      ],
    },
    {
      title: "Biostimulants",
      link: "biostimulants",
      products: [
        { product: "Stimplex®", link: "stimplex" },
        { product: "Toggle®", link: "toggle" },
      ],
    },
    {
      title: "Seed Treatments",
      link: "seed-treatments",
      products: [
        { product: "Start-uP® MAXX", link: "start-up-maxx" },
        { product: "Start-uP®", link: "start-up" },
        { product: "ProZest™", link: "prozest" },
        { product: "Man-uP™", link: "man-up" },
      ],
    },
    {
      title: "Water Conditioners",
      link: "water-conditioners",
      products: [{ product: "ModipHy Xtra™", link: "modiphy-xtra" }],
    },
    {
      title: "Ilex Organic Range",
      link: "organic-range",
      products: [
        { product: "Complete™ (6-2-4)", link: "complete-6-2-4" },
        {
          product: "Complete Hi-Fruit™ (4-2-6)",
          link: "complete-hi-fruit-4-2-6",
        },
        { product: "K-Max™ (3-1-8)", link: "k-max-3-1-8" },
        { product: "N-Max™ (7-2-2)", link: "n-max-7-2-2" },
        { product: "Ultimate Gold™ (8-7-7)", link: "ultimate-gold-8-7-7" },
      ],
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on homepage, navigate to homepage first
      if (location.pathname !== "/") {
        navigate("/#contact-us");
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] bg-[#ececec] shadow-sm">
      <div className="max-w-[1400px] mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Ilex Logo" className="h-[50px] w-auto" />
          </Link>

          {/* Desktop Navigation - Updated for better spacing and responsiveness */}
          <div className="hidden md:flex  items-center">
            <nav className="w-full mr-2 lg:mr-10">
              <ul className="flex flex-wrap justify-center gap-0.5 md:gap-2 lg:gap-3 list-none m-0 p-0">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative">
                    <Link
                      to={`/products/${item.link}`}
                      className="font-semibold text-sm px-2.5 py-1.5 text-[#333] inline-block hover:text-[#6abf4b] cursor-pointer whitespace-nowrap hover:bg-white/20 rounded"
                      onMouseEnter={() => handleMouseEnter(item.link)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.title}
                    </Link>

                    {/* Desktop Dropdown */}
                    {openDropdown === item.link && (
                      <div
                        className="absolute top-full  bg-white min-w-[220px] z-[70] shadow-xl rounded-b-md overflow-hidden"
                        onMouseEnter={() => handleMouseEnter(item.link)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-2">
                          {item.products.map((product, pIndex) => (
                            <Link
                              key={pIndex}
                              to={`/products/${item.link}/${product.link}`}
                              className="block px-4 py-2 text-sm text-[#333] whitespace-nowrap transition-all hover:bg-[#d8d8d8] hover:text-[#6abf4b] hover:pl-5"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (closeTimeoutRef.current) {
                                  clearTimeout(closeTimeoutRef.current);
                                }
                                setOpenDropdown(null);
                              }}
                            >
                              {product.product}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Us Button */}
            <a
              href="#contact-us"
              onClick={scrollToContact}
              className="text-[0.82rem] text-white px-7 text-nowrap py-3 bg-[#6abf4b] rounded-md font-bold transition-all hover:bg-[#5aa338] hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[2rem] cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <ul className="flex flex-col gap-0 list-none m-0 p-0 bg-[#f8f8f8] rounded-lg overflow-hidden">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="border-b border-[#eee] last:border-b-0"
                  >
                    <a
                      href="#"
                      className="block px-5 py-4 text-left font-semibold transition-colors hover:bg-[#ececec]"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(
                          openDropdown === `mobile-${item.link}`
                            ? null
                            : `mobile-${item.link}`
                        );
                      }}
                    >
                      <span className="flex items-center justify-between">
                        {item.title}
                        <ChevronDown
                          className={`transition-transform ${
                            openDropdown === `mobile-${item.link}`
                              ? "rotate-180"
                              : ""
                          }`}
                          size={20}
                        />
                      </span>
                    </a>

                    <AnimatePresence>
                      {openDropdown === `mobile-${item.link}` && (
                        <motion.div
                          initial={{ maxHeight: 0, opacity: 0 }}
                          animate={{ maxHeight: 500, opacity: 1 }}
                          exit={{ maxHeight: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-white"
                        >
                          <div className="px-5 py-2">
                            {item.products.map((product, pIndex) => (
                              <Link
                                key={pIndex}
                                to={`/products/${item.link}/${product.link}`}
                                className="block py-2 pl-4 text-sm text-[#333] transition-all hover:text-[#6abf4b]"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {product.product}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>

              {/* Mobile Contact Button */}
              <a
                href="#contact-us"
                onClick={(e) => {
                  scrollToContact(e);
                  setMobileMenuOpen(false);
                }}
                className="block mt-4 text-center text-white px-7 py-3 bg-[#6abf4b] rounded-md font-bold transition-all hover:bg-[#5aa338]"
              >
                Contact Us
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
