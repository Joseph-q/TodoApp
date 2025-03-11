import { useEffect, useState } from "react";
import SunSvg from "./SunSvg";
import MoonSvg from "./MoonSvg";


function ButtonDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Comprobar si el usuario tiene una preferencia guardada en localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="h-min hs-dark-mode-active:hidden hs-dark-mode text-gray-800 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
      >
        {isDarkMode ? (
          <span className="group inline-flex shrink-0 justify-center items-center size-9">
            <SunSvg></SunSvg>
          </span>
        ) : (
          <span className="group inline-flex shrink-0 justify-center items-center size-9">
            <MoonSvg></MoonSvg>
          </span>
        )}
      </button>
    </>
  );
}

export default ButtonDarkMode;
