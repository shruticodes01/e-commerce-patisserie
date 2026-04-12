import { ShoppingBag } from "lucide-react";
import logoImg from "../../assets/crumbls2dxfdc.png";

export default function DesktopHeader({
  className,
  isScrolled,
}: {
  className?: string;
  isScrolled: boolean | string;
}) {
  return (
    <header
      className={`w-full h-14 px-4 fixed top-0 ${className} z-2 ${isScrolled ? "bg-mint-blue" : ""}`}
    >
      <span id="desktop-nav-label" className="sr-only">
        Desktop navigation menu
      </span>
      <nav
        aria-labelledby="desktop-nav-label"
        className={`w-full h-14 flex items-center justify-between gap-4`}
      >
        <div className="shrink-0">
          <a className={``} role="menu-item" href="#">
            <img className="h-12 w-auto" src={logoImg} alt="logo" />
          </a>
        </div>

        <ul
          role="menu"
          aria-orientation="horizontal"
          aria-label="Main navigation"
          className="w-full flex items-center justify-between uppercase font-semibold **:cursor-pointer"
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
            <a
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-pink focus-visible:outline-mint-blue focus-visible:text-pink active:text-pink" : "hover:text-mint-blue focus-visible:outline-pink focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              href="#cart"
            >
              <ShoppingBag />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
