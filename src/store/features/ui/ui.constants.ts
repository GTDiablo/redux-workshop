import defaultTheme from "./themes/default";
import { Theme, ITheme } from "./ui.types";

export const THEMES: { [key in Theme]: ITheme } = {
  [Theme.DEFAULT]: defaultTheme,
};
