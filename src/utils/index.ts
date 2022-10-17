import { IData } from "../interface"

export const dataFilter = (favorites: IData[], id: string) => {
  return !favorites.map((el: IData) => el.id).includes(id)
}

export const themeColors = {
  dark: {
    bg: "#262626",
    tint: "crimson",
    text: "white",
    btns: "gray"
  },
  light: {
    bg: "white",
    tint: "blue",
    text: "black",
    btns: "gray"
  }
}