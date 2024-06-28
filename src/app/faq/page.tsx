"use client"

import { Questions } from "@/components/ui/questions";
import { useGame } from "@/hooks/useGameColorContext";

export default function Home(){
    const { game } = useGame()

    return (
        <main className="flex relative min-h-screen w-full flex-col justify-center items-center bg-secondary gap-12 pt-44">
            <article>
            <h1 className="text-primary font-medium text-3xl">Sobre a <span className="font-bold">Elo<span className={game == "valorant" ? "text-valorant" : "text-lol"}>Blitz</span></span></h1>
                <section>
                    <Questions />
                </section>
            </article>
        </main>
    )
}