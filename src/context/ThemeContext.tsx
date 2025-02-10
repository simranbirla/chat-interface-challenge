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

        const lsTheme = localStorage.getItem('theme')

        if (lsTheme) {
            setTheme(lsTheme as unknown as Themes)
            if (lsTheme === "dark") {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }

        } else {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            if (mediaQuery.matches) {
                setTheme(Themes.dark)
                localStorage.setItem('theme', 'dark')
                document.documentElement.classList.add('dark')
            } else {
                setTheme(Themes.light)
                localStorage.setItem('theme', 'light')
                document.documentElement.classList.remove('dark')
            }

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