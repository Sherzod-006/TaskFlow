//IMPORTING REACT
import { useState } from "react";
//IMPORTING CONTEXTS
import { LoaderContext } from "../Contexts";

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
