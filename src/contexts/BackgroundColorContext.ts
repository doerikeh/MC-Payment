import { createContext } from "react";

interface BackgroundColorContextProps {
  color:string;
  changeColor: (color: string) => void;
}

interface BackgroundColorContextState {
  primary: string;
  blue: string;
  green: string;
}

export const backgroundColors:BackgroundColorContextState = {
  primary: "primary",
  blue: "blue",
  green: "green",
};

const BackgroundColorContext = createContext<BackgroundColorContextProps>({
  color: backgroundColors.blue,
  changeColor: (color: string) => {},
});

export default BackgroundColorContext;
