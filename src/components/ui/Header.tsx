"use client"

import { useGame } from "@/hooks/useGameColorContext";
import Image from "next/image";
import Link from "next/link";
import { HeaderLinks } from "./headerLinks";
import { useEffect, useState } from "react";
import { MenuDrawer } from "./menuDrawer";

export function Header(){
    const { game, setGame } = useGame()
    const [color, setColor] = useState("/logo-lol.svg")
    
    const validadePathname = (pathname: string) => {
        if ((pathname === "/" && game === "valorant") || 
            pathname === "/valorant/duo-boost" || 
            pathname === "/valorant/elo-boost" || 
            pathname === "/valorant/md5") {
            setColor("/logo-valorant.svg");
            setGame("valorant")
        } else if ((pathname === "/" && game === "lol") || 
            pathname === "/league-of-legends/duo-boost" || 
            pathname === "/league-of-legends/elo-boost" || 
            pathname === "/league-of-legends/md5") {
            setColor("/logo-lol.svg");
            setGame("lol")
        }
    };

    useEffect(() => {
        validadePathname(window.location.pathname);
    }, [game]);

    return(
        <header className="flex absolute top-0 bg-current z-30 text-primary items-center justify-between w-full h-24 md:px-14 px-4">
            <Link href="/"><Image alt="logo eloblitz" src={color} width={0} height={0} className="object-cover w-28 h-28" /></Link>
            <nav className="flex gap-10 items-center md:mr-12">
                <div className="hidden md:block">
                    <HeaderLinks />
                </div>
                <div className="block md:hidden">
                    <MenuDrawer />
                </div>
            </nav>
        </header>
    )
}