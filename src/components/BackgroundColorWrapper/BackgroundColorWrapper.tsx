import React, { useState } from "react";
import BackgroundColorContext, {
  backgroundColors,
} from "../../contexts/BackgroundColorContext";

export interface BackgroundColorWrapperProps {
  children: React.ReactNode;
}

export default function BackgroundColorWrapper({ children }: BackgroundColorWrapperProps) {
  const [color, setColor] = useState(backgroundColors.blue);

  function changeColor(color: string) {
    setColor(color);
  }

  return (
    <BackgroundColorContext.Provider value={{ color: color, changeColor: changeColor }}>
    { children }
    </BackgroundColorContext.Provider>
  );
}
1