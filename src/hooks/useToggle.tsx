import { useState, useCallback } from "react";

export const useToggle = (initialState: boolean = false) => {
  const [isActive, setIsActive] = useState(initialState);

  const toggleMenu = useCallback(() => {
    setIsActive((prevState) => !prevState);
  }, []);

  return { isActive, toggleMenu };
};
