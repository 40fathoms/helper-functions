import { KeyboardEvent } from "react";

const preventLetters = (e: KeyboardEvent<HTMLElement>) => {
  const isCtrlV = e.ctrlKey && e.key === "v";
  const isCmdV = e.metaKey && e.key === "v";

  if (e.key !== "Backspace" && !isCtrlV && !isCmdV && !/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
};

export default preventLetters;
