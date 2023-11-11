import { useContext } from "react";
import { themeContext } from "./ThemeProvider";

export default function useTheme() {
  const {theme} = useContext(themeContext)

  return theme === "garden" ? "light" : "dark"
}
