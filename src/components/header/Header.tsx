import { useEffect, useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean | string>(false);

  useEffect(() => {
    const changeHeaderBackgroundOnScroll = () => {
      const scrollTrigger = 150;
      setIsScrolled(
        window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger,
      );
    };

    window.addEventListener("scroll", changeHeaderBackgroundOnScroll);
    return () =>
      window.addEventListener("scroll", changeHeaderBackgroundOnScroll);
  }, []);

  return (
    <>
      <MobileHeader className="mobile__header" isScrolled={isScrolled} />
      <DesktopHeader className="desktop__header" isScrolled={isScrolled} />
    </>
  );
}
