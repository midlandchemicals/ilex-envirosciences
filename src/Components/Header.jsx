import useApp from "../store";
import logo from "../assets/ilex-logo.png";
import { useState, useRef, useEffect } from "react";
import ProductsModal from "./ProductsModal";

const NavButton = ({ children, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });

  // Update dimensions when component mounts or children change
  useEffect(() => {
    if (textRef.current) {
      // Create a temporary span to measure just the text width
      const tempSpan = document.createElement("span");
      tempSpan.style.visibility = "hidden";
      tempSpan.style.position = "absolute";
      tempSpan.style.whiteSpace = "nowrap";
      tempSpan.textContent = textRef.current.textContent;
      document.body.appendChild(tempSpan);

      // Get the exact width of the text
      const textWidth = tempSpan.offsetWidth;
      document.body.removeChild(tempSpan);

      setDimensions({
        width: textWidth,
        left: 0,
      });
    }
  }, [children]);

  return (
    <div className="relative">
      <button
        ref={textRef}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative py-4 px-4 cursor-pointer ${
          isActive ? "bg-white" : ""
        }`}
        style={{
          minWidth: dimensions.width ? `${dimensions.width}px` : "auto",
          minHeight: "60px", // Fixed height to prevent layout shift
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="whitespace-nowrap relative z-10">{children}</span>
        <div
          className="absolute bottom-3 h-1 bg-black transition-all duration-200 ease-in-out origin-left"
          style={{
            width: isHovered || isActive ? `${dimensions.width}px` : "0",
            opacity: isHovered || isActive ? 1 : 0,
            left: "calc(50% - 2px)", // Slight adjustment to account for the transform origin
            transform: "translateX(-50%) scaleX(0)",
            transformOrigin: "left",
            transition:
              "width 200ms ease-in-out, transform 200ms ease-in-out, opacity 200ms ease-in-out",
            ...(isHovered || isActive
              ? {
                  transform: "translateX(-50%) scaleX(1)",
                }
              : {}),
          }}
        />
      </button>
    </div>
  );
};

const Header = () => {
  const currentNavTab = useApp((state) => state.currentNavTab);
  const setCurrentNavTab = useApp((state) => state.setCurrentNavTab);
  return (
    <>
      <div
        className={`h-24 bg-[#f7f7f7] px-10 flex items-end gap-x-10 justify-start`}
      >
        <div className="flex items-center py-4">
          <img src={logo} className="h-10" alt="" />
        </div>
        <NavButton
          isActive={currentNavTab === "Agriculture"}
          onClick={() => setCurrentNavTab("Agriculture")}
        >
          Agriculture
        </NavButton>
        <NavButton
          isActive={currentNavTab === "Products"}
          onClick={() => setCurrentNavTab("Products")}
        >
          Products
        </NavButton>
        <NavButton
          isActive={currentNavTab === "About"}
          onClick={() => setCurrentNavTab("About")}
        >
          About
        </NavButton>
        <NavButton
          isActive={currentNavTab === "Contact Us"}
          onClick={() => setCurrentNavTab("Contact Us")}
        >
          Contact Us
        </NavButton>
      </div>
      <div>
        {currentNavTab === "Products" && <ProductsModal></ProductsModal>}
      </div>
    </>
  );
};

export default Header;
