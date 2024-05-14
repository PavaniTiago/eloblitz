"use client"

import { ReactNode, createContext, useContext, useState } from "react";

type UseGameContextType = {
  game: string;
  setGame: React.Dispatch<React.SetStateAction<string>>;
};

const GameContext = createContext<UseGameContextType | null>(null);

export const useGame = (): UseGameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame deve ser usado dentro de um GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [game, setGame] = useState('lol');

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
};
