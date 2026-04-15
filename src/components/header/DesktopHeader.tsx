import { ShoppingBag } from "lucide-react";
import logoImg from "../../assets/crumbls2dxfdc.png";
import Button from "../UI/Button";
// import type { ItemObj } from "../../types/types";

export default function DesktopHeader({
  className,
  isScrolled,
  totalCartItems,
  showCart,
}: {
  className?: string;
  isScrolled: boolean | string;
  totalCartItems: number;
  showCart: () => void;
}) {
  return (
    <header
      className={`w-full h-16 flex items-center justify-between px-4 fixed top-0 ${className} z-2 ${isScrolled ? "bg-mint-blue shadow-black shadow-[0_0_0.25rem_-0.025rem]" : ""}`}
    >
      <div className="w-full max-w-fit shrink-0">
        <a className={``} role="menu-item" href="#">
          <img className="h-12 w-auto" src={logoImg} alt="logo" />
        </a>
      </div>

      <span id="desktop-nav-label" className="sr-only">
        Desktop navigation menu
      </span>
      <nav
        aria-labelledby="desktop-nav-label"
        className={`w-full max-w-[90%] h-full flex justify-end px-4`}
      >
        <ul
          role="menu"
          aria-orientation="horizontal"
          aria-label="Main navigation"
          className="w-full h-full flex items-center justify-between justify-self-end uppercase font-semibold **:cursor-pointer"
        >
          <li>
            <a
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-pink focus-visible:outline-mint-blue focus-visible:text-pink active:text-pink" : "hover:text-mint-blue focus-visible:outline-pink focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-pink focus-visible:outline-mint-blue focus-visible:text-pink active:text-pink" : "hover:text-mint-blue focus-visible:outline-pink focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              href="#cakes-and-pastries"
            >
              Cakes & Pastries
            </a>
          </li>
          <li>
            <a
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-pink focus-visible:outline-mint-blue focus-visible:text-pink active:text-pink" : "hover:text-mint-blue focus-visible:outline-pink focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              href="#custom-cakes"
            >
              Custom Cakes
            </a>
          </li>
          <li>
            <a
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-pink focus-visible:outline-mint-blue focus-visible:text-pink active:text-pink" : "hover:text-mint-blue focus-visible:outline-pink focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              href="#wedding-cakes"
            >
              Wedding Cakes
            </a>
          </li>
          <li>
            <a
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-pink focus-visible:outline-mint-blue focus-visible:text-pink active:text-pink" : "hover:text-mint-blue focus-visible:outline-pink focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              href="#weekly-special"
            >
              Weekly Special
            </a>
          </li>
          <li>
            <a
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-pink focus-visible:outline-mint-blue focus-visible:text-pink active:text-pink" : "hover:text-mint-blue focus-visible:outline-pink focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li>
            <Button
              className={` focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-pink focus-visible:outline-mint-blue focus-visible:text-pink active:text-pink" : "hover:text-mint-blue focus-visible:outline-pink focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              onClick={() => showCart()}
            >
              <ShoppingBag />
              <span className="absolute top-1 right-5 px-2 bg-black text-mint-blue rounded-full">
                {totalCartItems}
              </span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
