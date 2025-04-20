import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Clock } from "../Clock/Clock";

export const Header = () => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`flex justify-between items-center ${
        theme === "light" ? "bg-[#c9c1c1]" : "bg-[#3f3e3e]"
      } transition-colors duration-1000 px-24 h-20`}
    >
      <button onClick={toggleTheme}>{theme === "light" ? "🌞" : "🌚"}</button>

<Clock />

      <nav
        className={`flex gap-8 ${
          theme === "light" ? "text-black" : "text-white"
        } transition-colors duration-1000`}
      >
        <a href="">Link 1</a>
        <a href="">Link 2</a>
        <a href="">Link 3</a>
      </nav>
    </header>
  );
};
