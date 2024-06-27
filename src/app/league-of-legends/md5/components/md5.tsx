"use client"

import { ActualCard } from "@/components/ui/actualCard";
import { Button } from "@/components/ui/button";
import { Md5Card } from "@/components/ui/md5Card";
import { Ranks } from "@/lib/md5/ranks";
import { RanksDuo } from "@/lib/md5/duo-md5/ranks";
import { RankDetails } from "@/types/rank-interface";
import { useState, useEffect } from "react";
import Link from "next/link";

interface EloDialogProps {
    onActualRankSelect?: (rank: { rankName: string; details: RankDetails; division?: { name: string; price: number } | null }) => void;
    onSelectCount?: (count: number) => void;
    onSwitch?: (value: boolean) => void;
}

export function Md5({ onActualRankSelect, onSelectCount, onSwitch }: EloDialogProps){
    const [actualRank, setActualRank] = useState<{ rankName: string; details: RankDetails; division: { name: string; price: number } } | null>(null);
    const [count, setCount] = useState<number>(5);
    const [duoBoost, setDuoBoost] = useState<boolean>(false);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalPriceWithDiscount, setTotalPriceWithDiscount] = useState<number>(0);

    useEffect(() => {
        const { totalPrice, totalPriceWithDiscount } = calculateTotalPrice(actualRank, count);
        setTotalPrice(totalPrice);
        setTotalPriceWithDiscount(totalPriceWithDiscount);
    }, [actualRank, count, duoBoost]);

    const handleActualRankSelect = (rank: { rankName: string; details: RankDetails; division: { name: string; price: number } }) => {
        setActualRank(rank);
        if(onActualRankSelect){
            onActualRankSelect(rank);
        }
    };

    const handleSelect = (count: number) => {
        setCount(count);
        if(onSelectCount){
            onSelectCount(count);
        }
    };

    const handleSwitch = (value: boolean) => {
        setDuoBoost(value);
        if (typeof onSwitch === 'function') {
            onSwitch(value);
        } else {
            console.error("onSwitch não é uma função válida");
        }
    };

    const calculateTotalPrice = (actualRank: { rankName: string; details: RankDetails; division: { name: string; price: number } } | null, count: number) => {
        let totalPrice = 0;
        let totalPriceWithDiscount = 0;

        if (actualRank) {
            const currentRankData = (duoBoost ? RanksDuo : Ranks).find(rank => rank.rankName === actualRank.rankName);
            if (currentRankData) {
                const rankPrice = currentRankData.details.price || 0;
                const matchPrice = currentRankData.details.matchPrice || 0;

                totalPrice = rankPrice + matchPrice * (count - 5);

                totalPriceWithDiscount = totalPrice * 0.7;
            }
        }

        return { totalPrice, totalPriceWithDiscount };
    };

    const gameranks = duoBoost ? RanksDuo : Ranks;

    

    return (
        <main className="flex min-h-screen w-full flex-col justify-center items-center bg-secondary text-primary pt-40">
            <section className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-center md:justify-between">
                <div className="flex flex-col md:flex-row items-center gap-8 z-10">
                <ActualCard gamerank={gameranks as any} onActualRankSelect={handleActualRankSelect as any} />
                <Md5Card onSwitch={handleSwitch as any} onSelectCount={handleSelect as any} bgColor={actualRank?.details.backgroundColor as string} color="lol"/>
                </div>
                <div className="flex flex-col gap-4 relative">
                    <div className="w-64 h-40 rounded-full absolute mx-auto top-10">
                        <div className="w-full h-full bg-lol blur-[10rem]"></div>
                    </div>
                    <h2 className="text-primary text-center text-4xl md:text-5xl font-extrabold pt-12 z-10 max-w-lg md:text-start">
                        {actualRank ? `${actualRank.rankName} ${actualRank.division ? actualRank.division.name : ""} (${count} Partidas)` : `BRONZE IV (${count} Partidas)`}
                    </h2>
                    <div className="flex items-center md:justify-start justify-center gap-4 z-10">
                        <p className="text-primary text-2xl font-semibold text-center z-10">R$ {totalPriceWithDiscount.toFixed(2)}</p>
                        <del className="text-primary-foreground text-lg font-semibold text-center max-w-l z-10">R$ {totalPrice.toFixed(2)}</del>
                        <span className="border-lol border rounded-full text-lol text-sm p-1.5 px-2">30% off</span>
                    </div>
                    <Link href={`https://api.whatsapp.com/send?phone=12982175403&text=Olá quero contratar o serviço Md5 ${duoBoost ? "Duo Boost": ""} league of legends da Eloblitz. ${actualRank ? `${actualRank.rankName} ${actualRank.division ? actualRank.division.name : ""} no valor de ${totalPriceWithDiscount.toFixed(2)}` : ""}`}>
                        <Button className="bg-valorant self-center md:self-start text-md md:text-xl text-primary px-12 max-w-xl md:max-w-sm py-7 mt-6 rounded-xl font-semibold z-10">
                            Contratar (R$ {totalPriceWithDiscount.toFixed(2)})
                        </Button>
                    </Link>
                </div>
            </section>
            <section className="flex flex-col w-full max-w-7xl items-start text-center md:text-start justify-center px-8 md:px-0 md:justify-start border-t border-primary-foreground mt-20">
                <h2 className="text-primary text-4xl md:text-5xl pt-12 font-extrabold z-10">MD5 (ELO JOB)</h2>
                <p className="text-primary-foreground text-md max-w-xl mt-6 z-10">
                    Quer subir de ELO, garantir recompensas, economizar tempo ou elevar o nível dos seus adversários e colegas de equipe? Elo job é o serviço ideal para você.
                </p>
                <p className="text-primary-foreground text-md max-w-xl mt-6 z-10">
                    Nós jogaremos para você até atingir o ELO desejado. Você poderá observar como nos comportamos em partidas ranqueadas, entender as táticas e estratégias utilizadas para subir de ELO, além de receber dicas para melhorar sua performance in-game e evoluir sozinho.
                </p>
                <p className="text-primary-foreground text-md max-w-xl mt-6 z-10">
                    Sabemos que disputar partidas com jogadores de ligas mais altas é a forma mais rápida de evoluir suas habilidades in-game. Jogando em elos mais altos, cada jogada desafiará suas habilidades e você terá a oportunidade de aprender com colegas de equipe em vez de se frustrar com jogadas sem sentido e a toxicidade comum em elos mais baixos.
                </p>
            </section>
        </main>
    );
}