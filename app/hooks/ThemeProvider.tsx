import { createContext } from "react";
import { ItemType } from "~/types/utils";
import { daisyUiThemes } from "~/utils/constants";

export const themeContext = createContext<{
  theme: ItemType<typeof daisyUiThemes>
  setTheme: (t: ItemType<typeof daisyUiThemes>) => void
}>({
  theme: "dark",
  setTheme: () => {}
})
