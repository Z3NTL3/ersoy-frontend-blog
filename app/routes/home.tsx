import { useContext } from "react";
import type { Route } from "./+types/home";
import { ThemeChangerContext } from "~/contexts/themeChanger";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - Anasayfa - Mehdi Ersoy" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  let changeTheme = useContext(ThemeChangerContext)
  const toggleThemeChanger = () => {
    let currentColor = (document.querySelector("html[class]") as HTMLElement).getAttribute("class")
    if(currentColor === "dark") {
      localStorage.setItem("theme", "light")
      return changeTheme("light")
    }
    
    localStorage.setItem("theme", "dark")
    changeTheme("dark")
  }

  return (
    <div className="w-screen h-screen flex grow justify-center items-center">
      <button className="border border-black p-5 rounded-md cursor-pointer dark:border-white dark:text-white" onClick={toggleThemeChanger}>Dark</button>
    </div>
  );
}