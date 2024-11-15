import React, { createContext, useState, useContext } from "react";

const AlgorithmContext = createContext();

export const AlgorithmProvider = ({ children }) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("DFS");
  const [isRunning, setIsRunning] = useState(false);

  return (
    <AlgorithmContext.Provider
      value={{
        selectedAlgorithm,
        setSelectedAlgorithm,
        isRunning,
        setIsRunning,
      }}
    >
      {children}
    </AlgorithmContext.Provider>
  );
};

export const useAlgorithm = () => useContext(AlgorithmContext);
