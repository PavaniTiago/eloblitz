"use client"

import { useGame } from "@/hooks/useGameColorContext";
import Image from "next/image";
import Link from "next/link";

export function Footer(){
    const { game } = useGame()
    return (
        <footer className="flex flex-col items-center w-full gap-12 pb-8 pt-32 bg-secondary">
            <div className="flex w-full justify-evenly items-center">
                <div className="flex flex-col">
                    <Image alt="logo" src={game == "valorant" ? "/logo-valorant.svg" : "/logo-lol.svg"} width={0} height={0} className="w-24 h-24 object-cover"/>
                    <p className="text-md text-primary-foreground max-w-sm">Our vision is to provide convenience and help increase your sales business.</p>
                    <div className="flex gap-3 items-center mt-2">
                        <Image alt="social media icon" src="/instagram.svg" width={0} height={0} className="w-10 h-10 text-secondary bg-primary rounded-full p-2"/>
                        <Image alt="social media icon" src="/facebook.svg" width={0} height={0} className="w-10 h-10 text-secondary bg-primary rounded-full p-2"/>
                        <Image alt="social media icon" src="/twitter.svg" width={0} height={0} className="w-10 h-10 text-secondary bg-primary rounded-full p-2"/>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-xl text-primary">League of Legends</h3>
                    <Link href="/lol/elo-boost" className="text-primary-foreground text-md hover:text-lol transition-all">Duo Boost</Link>
                    <Link href="/lol/duo-boost" className="text-primary-foreground text-md hover:text-lol transition-all">Elo Job</Link>
                    <Link href="/lol/md5" className="text-primary-foreground text-md hover:text-lol transition-all">Md5</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-xl text-primary">Valorant</h3>
                    <Link href="/valorant/elo-boost" className="text-primary-foreground text-md hover:text-valorant transition-all">Duo Boost</Link>
                    <Link href="/valorant/duo-boost" className="text-primary-foreground text-md hover:text-valorant transition-all">Elo Job</Link>
                    <Link href="/valorant/md5" className="text-primary-foreground text-md hover:text-valorant transition-all">Md5</Link>
                </div>
            </div>
            <span className="text-sm font-medium text-primary">©2024 EloBlitz. All rights reserved</span>
        </footer>
    )
}