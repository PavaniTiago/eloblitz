"use client"

import { useGame } from "@/hooks/useGameColorContext";
import Image from "next/image";

export default function Home() {
  const { game, setGame } = useGame()
  const handleGameChange = (newGame: string) => {
    setGame(newGame);
  };
  return (
    <main className="flex relative min-h-screen w-full flex-col items-center bg-secondary text-primary">
      <video className="w-full h-screen object-cover brightness-[25%] relative z-10" autoPlay muted loop>
        <source src="/video.mp4" type="video/mp4"/>
      </video>
      <div className="h-screen flex flex-col items-center justify-center absolute z-20">
        <h1 className="text-7xl font-extrabold"><span className={`text-${game}`}>ELO</span>BLITZ</h1>
        <p className="text-primary-foreground text-md text-center max-w-lg pt-8">Domine seu jogo com nossa equipe especializada em Elojob. Alcance o topo com segurança e rapidez.</p>
        <button className={`bg-${game} text-lg text-primary px-10 py-4 mt-12 rounded-lg font-semibold`}>Encontre seu Booster!</button>
      </div>
        <div className="h-full flex flex-col items-center justify-center mt-12 relative">
          <h2 className="text-primary text-5xl pt-12 font-extrabold z-10">Nossos serviços</h2>
          <div className="w-48 h-48 rounded-full absolute ">
            <div className={`w-full h-full bg-${game} blur-[10rem]`}></div>
          </div>
          <p className="text-primary-foreground text-md text-center max-w-lg mt-8 z-10">Suba de Ranking com <span className={`text-${game}`}>Confiança.</span> Nossa equipe especializada leva você ao topo com <span className={`text-${game}`}>segurança e eficácia.</span> Domine o jogo com nosso serviço de <span className={`text-${game}`}>elojob profissional.</span></p>
          <div>

          </div>
        </div>
    </main>
  );
}
