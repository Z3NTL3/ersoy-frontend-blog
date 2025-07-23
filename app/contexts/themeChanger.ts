import { createContext } from "react";

export type PossibleThemes = "light" | "dark"
type ChangerFn = (to: PossibleThemes) => void;
interface IThemeChanger {
    currentTheme: PossibleThemes
    change: ChangerFn
}

export const ThemeChangerContext = createContext<IThemeChanger>({
    currentTheme: "light",
    change: (to) => {}
})