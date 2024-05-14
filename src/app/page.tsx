"use client"

import { useGame } from "@/hooks/useGameColorContext";

export default function Home() {
  const { game, setGame } = useGame()
  const handleGameChange = (newGame: string) => {
    setGame(newGame);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-secondary text-primary">
      <div className="space-x-6 mt-4">
        <button onClick={() => handleGameChange('lol')} className="py-1.5 bg-primary text-secondary rounded-lg w-24 font-semibold hover:bg-primary-foreground transition-colors">Lol</button>
        <button onClick={() => handleGameChange('valorant')} className="py-1.5 bg-primary text-secondary rounded-lg w-24 font-semibold hover:bg-primary-foreground transition-colors">Valorant</button>
      </div>
    </main>
  );
}
