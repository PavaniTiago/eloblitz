"use client"

import GameButton from "@/components/ui/GameButton";
import { GameCard } from "@/components/ui/GameCard";
import BenefitsCard from "@/components/ui/benefitsCard";
import { ReviewsCard } from "@/components/ui/reviewsCard";
import { useGame } from "@/hooks/useGameColorContext";
import Image from "next/image";

export default function Home() {
  const { game, setGame} = useGame()
  const handleGameChange = (newGame: string) => {
    setGame(newGame)
  };

  return (
    <main className="flex relative min-h-screen w-full flex-col items-center bg-secondary text-primary overflow-hidden">
      {game == "valorant" && (
        <Image alt="gif" src="/raze.gif" width={0} height={0} className="w-full h-screen object-cover brightness-[25%] relative z-10" />
      )}
      {game == "lol" && (
        <video className="w-full h-screen object-cover object-[20%_50%] md:object-center brightness-[25%] relative z-10" autoPlay muted loop playsInline webkit-playsinline>
          <source src="/video.mp4" type="video/mp4"/>
        </video>
      )} 
      <section className="h-screen flex flex-col items-center justify-center absolute z-20">
        <h1 className="md:text-7xl text-5xl font-extrabold"><span className={`${game == "valorant" ? "text-valorant" : "text-lol"}`}>ELO</span>BLITZ</h1>
        <p className="text-primary-foreground text-md text-center max-w-xs md:max-w-lg pt-8">Domine seu jogo com nossa equipe especializada em Elojob. Alcance o topo com segurança e rapidez.</p>
        <button className={`text-md md:text-lg text-primary px-8 py-3 md:px-10 md:py-4 mt-6 md:mt-12 rounded-lg font-semibold transition-all ${game == "valorant" ? "bg-valorant hover:bg-valorant/80" : "bg-lol hover:bg-lol/80"}`}>Encontre seu Booster!</button>
      </section>
        <section className="h-full flex flex-col items-center justify-center mt-12 relative">
          <div className="w-80 h-40 rounded-full absolute mx-auto top-0">
            <div className={`w-full h-full blur-[10rem] ${game == "valorant" ? "bg-valorant" : "bg-lol"}`}></div>
          </div>
          <h2 className="text-primary text-4xl md:text-5xl pt-12 font-extrabold z-10">Nossos serviços</h2>
          <p className="text-primary-foreground max-w-xs text-md text-center md:max-w-lg mt-8 z-10">Suba de Ranking com <span className={`${game == "valorant" ? "text-valorant" : "text-lol"}`}>Confiança.</span> Nossa equipe especializada leva você ao topo com <span className={`${game == "valorant" ? "text-valorant" : "text-lol"}`}>segurança e eficácia.</span> Domine o jogo com nosso serviço de <span className={`${game == "valorant" ? "text-valorant" : "text-lol"}`}>elojob profissional.</span></p>
          <div className="flex md:items-center items-start justify-center gap-6 mt-4">
            <GameButton onClick={() => handleGameChange("lol")} className={`${game == "valorant" ? "opacity-50" : "opacity-100"}`} icon="/game1.svg" title="League of Legends"/>
            <GameButton onClick={() => handleGameChange("valorant")} className={`${game == "lol" ? "opacity-50" : "opacity-100"}`} icon="/game2.svg" title="Valorant"/>
          </div>
          <div className="w-screen">
            <Image alt={`${game == "valorant" ? "raze image" : "lee sin image"}`} src={`${game == "valorant" ? "/raze.svg" : "/lee-sin.svg"}`} width={0} height={0} className={`saturate-150 hidden md:block brightness-110 absolute ${game == "valorant" ? "right-2 bottom-4 w-[30rem] h-[43rem] object-cover" : "left-2 bottom-4  w-[40rem] h-[40rem]"}`}/>
          </div>
          <div className={`flex flex-col md:flex-row items-center gap-10 mt-6 ${game == "valorant" ? "md:mr-40" : "md:ml-40"}`}>
            <GameCard color={game} description="Você irá jogar duo com um jogador profissional, até chegar no elo desejado." icon="/double-up.svg" title="Duo Boost" />
            <GameCard color={game} description="Um jogador profissional irá garantir o elo desejado jogando em sua conta." icon="/trophy.svg" title="Elo job" />
            <GameCard color={game} description="Iremos garantir o melhor desempenho possível na sua classificatória." icon="/increase.svg" title="Md5" />
          </div>
        </section>

        <section className="w-full h-full flex flex-col items-center mt-24 relative z-10">
          <div className="w-40 h-40 rounded-full absolute mx-auto top-20 -right-20">
            <div className={`w-full h-full ${game == "valorant" ? "bg-valorant" : "bg-lol"} blur-[10rem]`}></div>
          </div>
          <div className="w-40 h-40 rounded-full absolute mx-auto bottom-20 -left-20">
            <div className={`w-full h-full ${game == "valorant" ? "bg-valorant" : "bg-lol"} blur-[10rem]`}></div>
          </div>
          <h2 className="text-primary text-4xl md:text-5xl font-extrabold pt-12 z-10">Why choose us</h2>
          <p className="text-primary-foreground text-md text-center max-w-xs md:max-w-lg mt-8 z-10">A high-performing web-based car rental system for any rent-a-car company and website</p>
          <div className="flex flex-col md:flex-row w-full items-center justify-center z-10">
            <Image alt="logo" src={game == "valorant" ? "/logo-valorant.svg" : "logo-lol.svg"} width={0} height={0} className="hidden md:block object-cover h-[28rem] w-[28rem] animate-pulse"/>
            <div className="flex flex-col gap-6 mt-12 md:mt-24">
              <BenefitsCard icon="/phone.svg" color={game} description="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices." title="Customer Support" />
              <BenefitsCard icon="/Location.svg" color={game} description="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices." title="Best Price Guarantted" />
              <BenefitsCard icon="/location.svg" color={game} description="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices." title="Many Location" />
            </div>
          </div>
        </section>

        <section className="w-full h-full flex flex-col items-center justify-between mt-24 relative">
          <h2 className="text-primary text-4xl md:text-5xl font-extrabold pt-12 z-10 max-w-xs md:max-w-xl text-center">Trusted by Thousands of Happy Customer</h2>
          <p className="text-primary-foreground text-md text-center max-w-xs md:max-w-lg mt-8 z-10">A high-performing web-based car rental system for any rent-a-car company and website</p>
          <div className="w-40 h-40 rounded-full absolute mx-auto top-24">
            <div className={`w-full h-full ${game == "valorant" ? "bg-valorant" : "bg-lol"} blur-[10rem]`}></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 mt-20 px-6 md:px-0">
            <ReviewsCard rank="4.5" color={game} description="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." title="Viezh Robert" />
            <ReviewsCard rank="4.5" color={game} description="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." title="Viezh Robert" />
            <ReviewsCard rank="4.5" color={game} description="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." title="Viezh Robert" />
          </div>
        </section>
    </main>
  );
}
