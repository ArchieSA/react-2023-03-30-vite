import {
  ThemeContext,
  ThemeSetterContext,
} from "../../contexts/ThemeContext/themeContext";
import { useMemo, useState } from "react";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");
  const [buttonTheme, setButtonTheme] = useState("default");

  const contextValue = useMemo(
    () => ({ theme, buttonTheme }),
    [theme, buttonTheme]
  );
  const contextSetters = useMemo(() => ({ setTheme, setButtonTheme }), []);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeSetterContext.Provider value={contextSetters}>
        {children}
      </ThemeSetterContext.Provider>
    </ThemeContext.Provider>
  );
};
