import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

//creating the types for palette
declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string; //extendemos agregando estos tipos
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}