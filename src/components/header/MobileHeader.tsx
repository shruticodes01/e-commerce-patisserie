import { useState } from "react";
import Button from "../Button";
import LogoImg from "../../assets/crumbls2dxfdc.png";
import { Menu, ShoppingBag, X } from "lucide-react";

export default function MobileHeader({
  className,
  isScrolled,
}: {
  className?: string;
  isScrolled: boolean | string;
}) {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  return (
    <header
      className={`w-full h-14 flex-col items-center fixed top-0 p-4 font-semibold z-2 ${isScrolled ? "bg-pink" : ""} ${className}`}
    >
      <div className="w-full h-full flex items-center justify-between self-center relative">
        <a href="#">
          <img className={`h-12 w-auto`} src={LogoImg} alt="shop logo" />
        </a>
        <Button
          aria-label={`${isMobileMenuVisible ? "Close Menu" : "Open Menu"}`}
          aria-expanded={isMobileMenuVisible}
          aria-controls="mobile-nav"
          className={`w-fit h-fit p-2 absolute right-0 aspect-square z-9999 cursor-pointer text-black`}
          onClick={() => setIsMobileMenuVisible((menuVisible) => !menuVisible)}
          type="button"
        >
          {isMobileMenuVisible ? (
            <X className="w-8 h-8 text-black" />
          ) : (
            <Menu className="w-8 h-8 text-black" />
          )}
        </Button>
      </div>

      <nav id="mobile-nav">
        <span id="mobile-nav-label" className="sr-only">
          Mobile navigation menu
        </span>
        <ul
          id="mobile-nav-menu"
          aria-expanded={!isMobileMenuVisible}
          aria-labelledby="mobile-nav-label"
          role="menu"
          className={`w-full h-full flex uppercase **:cursor-pointer ${isMobileMenuVisible ? "flex-col items-start justify-around fixed z-1000 inset-[0_0_0_30%] p-[min(30vh,10rem)_1.5rem] translate-x-0 bg-white/70 backdrop-blur-[6rem]" : "translate-x-full transition-transform duration-150ms ease-out"}`}
          data-visible={isMobileMenuVisible}
          aria-orientation="vertical"
          aria-label="Mobile main navigation"
        >
          <li className={`p-4`}>
            <a
              className={`hover:scale-105 hover:text-pink focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-pink active:text-pink`}
              role="menuitem"
              href="#home"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              Home
            </a>
          </li>
          <li className={`p-4`}>
            <a
              className={`hover:scale-105 hover:text-pink focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-pink active:text-pink`}
              role="menuitem"
              href="#cakes-and-pastries"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              Cakes & Pastries
            </a>
          </li>
          <li className={`p-4`}>
            <a
              className={`hover:scale-105 hover:text-pink focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-pink active:text-pink`}
              role="menuitem"
              href="#custom-cakes"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              Custom Cakes
            </a>
          </li>
          <li className={`p-4`}>
            <a
              className={`hover:scale-105 hover:text-pink focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-pink active:text-pink`}
              role="menuitem"
              href="#wedding-cakes"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              Wedding Cakes
            </a>
          </li>
          <li className={`p-4`}>
            <a
              className={`hover:scale-105 hover:text-pink focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-pink active:text-pink`}
              role="menuitem"
              href="#weekly-special"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              Weekly Special
            </a>
          </li>
          <li className={`p-4`}>
            <a
              className={`hover:scale-105 hover:text-pink focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-pink active:text-pink`}
              role="menuitem"
              href="#contact"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              Contact
            </a>
          </li>
          <li className={`p-4`}>
            <Button
              className={`hover:scale-105 hover:text-pink focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-pink active:text-pink relative`}
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
              type="button"
            >
              <ShoppingBag className="w-8 h-8" />
              <span className="absolute -top-2 -right-2">0</span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
