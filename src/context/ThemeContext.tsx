import { createContext, useEffect, useState } from "react";

export interface IThemeContext {
    theme: Themes
    changeTheme: () => void
}

export const ThemeStore = createContext({} as IThemeContext);

export enum Themes {
    "dark",
    "light"
}

export const ThemeProvider = ({ children }: { children: React.ReactElement }) => {
    const [theme, setTheme] = useState<Themes>(Themes.light);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (mediaQuery.matches) {
            setTheme(Themes.dark)
        } else {
            setTheme(Themes.light)
        }

    }, [])

    const changeTheme = () => {
        setTheme((prev) => {
            return prev === Themes.dark ? Themes.light : Themes.dark
        })
        document.documentElement.classList.toggle('dark')
    }

    return <ThemeStore.Provider value={{ theme, changeTheme }}>{children}</ThemeStore.Provider>
}