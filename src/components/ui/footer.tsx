"use client"

import { useGame } from "@/hooks/useGameColorContext";
import Image from "next/image";
import Link from "next/link";

export function Footer(){
    const { game } = useGame()
    return (
        <footer className="flex flex-col items-center w-full gap-12 pb-8 pt-32 bg-secondary">
            <div className="flex w-full justify-evenly items-center">
                <div className="flex flex-col items-start justify-center">
                    <Image alt="logo" src={game == "valorant" ? "/logo-valorant.svg" : "/logo-lol.svg"} width={0} height={0} className="w-16 h-16 md:w-24 md:h-24 object-cover"/>
                    <p className="text-xs md:text-base text-primary-foreground max-w-24 md:max-w-sm">Our vision is to provide convenience and help increase your sales business.</p>
                    <div className="flex gap-3 items-center mt-2">
                        <Link href="https://www.instagram.com/eloblitzlol?igsh=b2FnaGpvdHN1MW85"><Image alt="social media icon" src="/instagram.svg" width={0} height={0} className={`w-8 h-8 md:w-10 md:h-10 text-secondary ${game == "valorant" ? "bg-valorant" : "bg-lol"} rounded-full p-2`}/></Link>
                        <Link href="https://discord.gg/DGpYEzHrw4"><Image alt="discord icon" src="/discord.svg" width={0} height={0} className={`w-8 h-8 md:w-10 md:h-10 text-secondary ${game == "valorant" ? "bg-valorant" : "bg-lol"} rounded-full p-2`}/></Link>
                        {/* <Link href=""><Image alt="social media icon" src="/facebook.svg" width={0} height={0} className="w-8 h-8 md:w-10 md:h-10 text-secondary bg-primary rounded-full p-2"/></Link>
                        <Link href=""><Image alt="social media icon" src="/twitter.svg" width={0} height={0} className="w-8 h-8 md:w-10 md:h-10 text-secondary bg-primary rounded-full p-2"/></Link> */}
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                    <h3 className="font-semibold text-sm md:text-xl text-primary">League of Legends</h3>
                    <Link href="/lol/elo-boost" className="text-primary-foreground text-xs md:text-base hover:text-lol transition-all">Elo Job</Link>
                    <Link href="/lol/duo-boost" className="text-primary-foreground text-xs md:text-base hover:text-lol transition-all">Duo Boost</Link>
                    <Link href="/lol/md5" className="text-primary-foreground text-xs md:text-base hover:text-lol transition-all"><del>MD10</del> MD5</Link>
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                    <h3 className="font-semibold text-sm md:text-xl text-primary">Valorant</h3>
                    <Link href="/valorant/elo-boost" className="text-primary-foreground text-xs md:text-base hover:text-valorant transition-all">Elo Job</Link>
                    <Link href="/valorant/duo-boost" className="text-primary-foreground text-xs md:text-base hover:text-valorant transition-all">Duo Boost</Link>
                    <Link href="/valorant/md5" className="text-primary-foreground text-xs md:text-base hover:text-valorant transition-all"><del>MD10</del> MD5</Link>
                </div>
            </div>
            <span className="text-sm font-medium text-primary">©2024 EloBlitz. All rights reserved</span>
        </footer>
    )
}