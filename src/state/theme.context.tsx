import { createContext, useContext, ReactNode } from "react";
import { ThemeContextType } from '../interfaces';



const themeState: ThemeContextType = {
  color: {
    primary: "#D39C2F",
    secondary: "#FDFFFF",
    background: "#000000",
  }
}

const ThemeContext = createContext<ThemeContextType>(themeState);

export const useThemeContext = (): ThemeContextType => {
  return useContext(ThemeContext);
}

export const ThemeContextProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  )
}
