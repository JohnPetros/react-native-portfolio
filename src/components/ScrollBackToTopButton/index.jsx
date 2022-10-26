import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./style.css";

export default function Project() {
  const [scrolled, setScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showScrollToTopButton = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 350) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", showScrollToTopButton);

  return (
    <button
      className={`scroll-back-to-top-button ${scrolled && "show"}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}
