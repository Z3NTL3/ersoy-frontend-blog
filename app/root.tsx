import {
  isRouteErrorResponse,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import { ThemeChangerContext, type PossibleThemes } from "./contexts/themeChanger";
import { useEffect, useState } from "react";
import { Loading } from "./components/ui/loading";
import { gsap } from 'gsap';  
import { useGSAP } from '@gsap/react';
import { MorphSVGPlugin, ScrambleTextPlugin } from "gsap/all";
import "./app.css"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(MorphSVGPlugin) 
gsap.registerPlugin(ScrambleTextPlugin)

export function Layout({ children }: { children: React.ReactNode }) {  
  let [theme, setTheme] = useState("light")
  let [loading, setLoading] = useState(true)

  const changeTheme = (to: PossibleThemes) => {
    localStorage.setItem("theme", to)
    setTheme(to)
  }

  // set preference by localStorage or fallback to browser's color choice
  useEffect(() => {
    let currentTheme = localStorage.getItem("theme")
    let pref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"

    if(currentTheme){
      setTheme(currentTheme)
    } else {
      setTheme(pref)
    }
  }, [theme])

  useEffect(() => {
    if(!loading) 
      return

    gsap.to("#fin", {duration: 1.2, morphSVG:{
      shape: "#full",
      type: "rotational"
    }})
    gsap.to("#loading", {
      duration: 1, 
      scrambleText: "Yükleniyor"
    });

    gsap.to("#author", {
      duration: 1,
      scrambleText: "Made by z3ntl3"
    })
    setTimeout(() => setLoading(false), 1000 )
  }, [loading]) // run everytime on pre-load

  return (
    <ThemeChangerContext value={{
      currentTheme: theme as PossibleThemes,
      change: changeTheme
    }}>
      <html lang="en" className={theme}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="overflow-x-hidden">
          { loading ? <Loading /> : children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html> 
    </ThemeChangerContext>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
