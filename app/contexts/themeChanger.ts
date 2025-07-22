import { createContext } from "react";

export type PossibleThemes = "light" | "dark"
type ChangerFn = (to: PossibleThemes) => void;

export const ThemeChangerContext = createContext<ChangerFn>((to) => {})