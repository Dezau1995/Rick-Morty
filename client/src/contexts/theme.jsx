import { createContext, useContext, useState} from "react";

const ThemeContext = createContext();

export function ThemeProvider ({
    children,
}) {
    const [theme, setTheme] = useState("dark");

    const handleClick = () => {
        if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      };

    return (
        <ThemeContext.Provider value={{theme, setTheme, handleClick}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);