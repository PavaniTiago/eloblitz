"use client"

import { DesirebleEloDialog } from "./desirebleEloDialog";
import { useState } from "react";
import { RankDetails } from "@/types/rank-interface";

interface DesireblaCardProps {
    onDesirebleRankSelect: (rank: { rankName: string; details: RankDetails; division?: { name: string; price: number } | null }) => void;
    gameRank: any
}

export function DesireblaCard({ onDesirebleRankSelect, gameRank }: DesireblaCardProps){
    const [selectedRank, setSelectedRank] = useState<{ rankName: string; details: RankDetails } | null>(null);
    const [selectedDivision, setSelectedDivision] = useState<{ name: string; price: number } | null>(null);

    const handleSelect = (rank: { rankName: string; details: RankDetails; division: { name: string; price: number } } | null) => {
        if (rank) {
          setSelectedRank({ ...rank });
          setSelectedDivision(rank.division);
          console.log("primeiro if", rank.division)
          onDesirebleRankSelect({ ...rank });
        } else if (rank && selectedDivision) {
            setSelectedRank(rank);
            setSelectedDivision(rank);
            onDesirebleRankSelect(rank);
        }
    };

    function isValidHexColor(color: string): boolean {
        return /^#[0-9A-F]{6}$/i.test(color);
    }

    const backgroundColor = selectedRank && isValidHexColor(selectedRank.details.backgroundColor)
    ? selectedRank.details.backgroundColor
    : "#6B4230";


    return (
        <div className="flex flex-col items-center pt-20 h-[32rem] w-[20rem] rounded-2xl z-20" style={{ backgroundColor: backgroundColor }}>
            <DesirebleEloDialog image={selectedRank?.details.backgroundImage as string} onRankSelect={handleSelect as any} rankData={gameRank}/>
            <span className="text-xl font-medium text-primary">Selecione seu Elo Atual</span>
            {selectedRank && (
                <h3 className="text-3xl font-extrabold uppercase">{`${selectedRank.rankName} ${selectedDivision ? `${selectedDivision.name}` : ""}`}</h3>
            )}
        </div>
    )
}