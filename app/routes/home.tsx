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
  let changer = useContext(ThemeChangerContext)
  const toggleThemeChanger = () => {
    let currentColor = (document.querySelector("html[class]") as HTMLElement).getAttribute("class")
    if(currentColor === "dark") {
      return changer.change("light")
    }
    
    changer.change("dark")
  }

  return (
    <div className="w-screen h-screen">
      
    </div>
  );
}