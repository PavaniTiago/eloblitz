"use client"

import { ActualCard } from "@/components/ui/actualCard";
import { Button } from "@/components/ui/button";
import { DesireblaCard } from "@/components/ui/desirableCard";
import { Ranks } from "@/lib/duo-boost/ranksValorant";
import { RankDetails } from "@/types/rank-interface";
import { useState } from "react";

interface EloDialogProps {
    onActualRankSelect?: (rank: { rankName: string; details: RankDetails; division?: { name: string; price: number } | null }) => void;
    onDesirebleRankSelect?: (rank: { rankName: string; details: RankDetails; division?: { name: string; price: number } | null }) => void;
}

export function DuoBoost({ onActualRankSelect, onDesirebleRankSelect }: EloDialogProps){

    const [actualRank, setActualRank] = useState<{ rankName: string; details: RankDetails; division: { name: string; price: number } } | null>(null);
    const [desirableRank, setDesirableRank] = useState<{ rankName: string; details: RankDetails; division: { name: string; price: number } } | null>(null);

    const handleActualRankSelect = (rank: { rankName: string; details: RankDetails; division: { name: string; price: number } }) => {
        setActualRank(rank);
        if(onActualRankSelect){
            onActualRankSelect(rank);
        }
    };

    const handleDesirableRankSelect = (rank: { rankName: string; details: RankDetails; division: { name: string; price: number } }) => {
        setDesirableRank(rank);
        if(onDesirebleRankSelect){
            onDesirebleRankSelect(rank);
        }
    };

    const isRankValid = () => {
        if (!actualRank || !desirableRank) return true;
        const rankOrder = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Diamante", "Ascendente", "Immortal", "Radiante"];
        const actualRankIndex = rankOrder.indexOf(actualRank.rankName);
        const desirableRankIndex = rankOrder.indexOf(desirableRank.rankName);

        return actualRankIndex <= desirableRankIndex;
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        let totalPriceWithDiscount = 0;
    
        if (actualRank && desirableRank) {
            const rankOrder = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Diamante", "Ascendente", "Immortal", "Radiante"];
            const actualRankIndex = rankOrder.indexOf(actualRank.rankName);
            const desirableRankIndex = rankOrder.indexOf(desirableRank.rankName);
    
            if (actualRankIndex === -1 || desirableRankIndex === -1) {
                console.error("Rank not found in rankOrder");
                return { totalPrice, totalPriceWithDiscount };
            }
    
            if (actualRankIndex > desirableRankIndex) {
                return { totalPrice, totalPriceWithDiscount };
            }
    
            for (let i = actualRankIndex; i <= desirableRankIndex; i++) {
                const currentRankData = Ranks.find(rank => rank.rankName === rankOrder[i]);
    
                if (currentRankData && currentRankData.details.division) {
                    const divisions = currentRankData.details.division;
                    const divisionKeys = Object.keys(divisions).map(key => divisions[key as any].name);
    
                    const actualDivisionName = i === actualRankIndex ? actualRank.division.name : divisionKeys[0];
                    const desirableDivisionName = i === desirableRankIndex ? desirableRank.division.name : divisionKeys[divisionKeys.length - 1];
    
                    const startDivisionIndex = divisionKeys.indexOf(actualDivisionName);
                    const endDivisionIndex = divisionKeys.indexOf(desirableDivisionName);
    
                    if (startDivisionIndex === -1 || endDivisionIndex === -1) continue;
    
                    for (let j = startDivisionIndex; j <= endDivisionIndex; j++) {
                        totalPrice += divisions[Object.keys(divisions)[j] as any].price;
                    }
                } else if (currentRankData && currentRankData.details.price) {
                    totalPrice += currentRankData.details.price;
                }
            }
            totalPriceWithDiscount = totalPrice * 0.7;
        }
        return { totalPrice, totalPriceWithDiscount };
    };
    
    const { totalPrice, totalPriceWithDiscount } = calculateTotalPrice();

    return (
        <main className="flex min-h-screen w-full flex-col justify-center items-center bg-secondary text-primary pt-40">
            <section className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-center md:justify-between">
                <div className="flex flex-col md:flex-row items-center gap-8 z-10">
                    <ActualCard gamerank={Ranks as any} onActualRankSelect={handleActualRankSelect as any}/>
                    <DesireblaCard gameRank={Ranks as any} onDesirebleRankSelect={handleDesirableRankSelect as any} />
                </div>
                <div className="flex flex-col gap-4 relative">
                    <div className="w-64 h-40 rounded-full absolute mx-auto top-10">
                        <div className="w-full h-full bg-valorant blur-[10rem]"></div>
                    </div>
                    <h2 className="text-primary text-center text-4xl md:text-5xl font-extrabold pt-12 z-10 max-w-lg md:text-start">
                    {actualRank && desirableRank ? `${actualRank.rankName} ${actualRank.division?.name || ""} AO ${desirableRank.rankName} ${desirableRank.division?.name || ""}` : "BRONZE III AO PLATINA III"}
                    </h2>
                    <div className="flex items-center md:justify-start justify-center gap-4 z-10">
                        {isRankValid() ? (
                            <>
                                <p className="text-primary text-2xl font-semibold text-center z-10">R$ {totalPriceWithDiscount.toFixed(2)}</p>
                                <del className="text-primary-foreground text-lg font-semibold text-center max-w-l z-10">R$ {totalPrice.toFixed(2)}</del>
                                <span className="border-valorant border rounded-full text-valorant text-sm p-1.5 px-2">30% off</span>
                            </>
                        ) : (
                            <p className="text-primary text-2xl font-semibold text-center z-10">Selecione um elo maior para contratar o serviço</p>
                        )}
                    </div>
                    <Button className="bg-valorant self-center md:self-start text-md md:text-xl text-primary px-12 max-w-xl md:max-w-sm py-7 mt-6 rounded-xl font-semibold z-10" disabled={!isRankValid()}>{`${!isRankValid() ? "Selecione um elo maior" : `Contratar (R$ ${totalPriceWithDiscount.toFixed(2)})`}`}</Button>
                </div>
            </section>
            <section className="flex flex-col w-full max-w-7xl items-start text-center md:text-start justify-center px-8 md:px-0 md:justify-start border-t border-primary-foreground mt-20">
                <h2 className="text-primary text-4xl md:text-5xl pt-12 font-extrabold z-10">SOBRE DUO BOOST</h2>
                <p className="text-primary-foreground text-md max-w-xl mt-6 z-10">
                    Quer subir de ELO, garantir recompensas, economizar tempo ou elevar o nível dos seus adversários e colegas de equipe? Elo boost (Elo Job) é o serviço ideal para você.
                </p>
                <p className="text-primary-foreground text-md max-w-xl mt-6 z-10">
                    Quer subir de ELO, garantir recompensas, economizar tempo ou elevar o nível dos seus adversários e colegas de equipe? Elo boost (Elo Job) é o serviço ideal para você.
                    Nós jogaremos para você até atingir o ELO desejado. Você poderá observar como nos comportamos em partidas ranqueadas, entender as táticas e estratégias utilizadas para subir de ELO, além de receber dicas para melhorar sua performance in-game e evoluir sozinho.
                </p>
                <p className="text-primary-foreground text-md max-w-xl mt-6 z-10">
                    Sabemos que disputar partidas com jogadores de ligas mais altas é a forma mais rápida de evoluir suas habilidades in-game. Jogando em elos mais altos, cada jogada desafiará suas habilidades e você terá a oportunidade de aprender com colegas de equipe em vez de se frustrar com jogadas sem sentido e a toxicidade comum em elos mais baixos.
                </p>
            </section>
        </main>
    )
}