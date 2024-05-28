"use client"

import Image from "next/image";
import { Dialog } from "./dialog";
import { EloDialog } from "./eloDialog";
import { useState } from "react";
import { RankDetails } from "@/types/rank-interface";

export interface ActualCardProps {
    onActualRankSelect: (rank: { rankName: string; details: RankDetails; division?: { name: string; price: number } | null }) => void;
    gamerank: any
}

export function ActualCard({ onActualRankSelect, gamerank }: ActualCardProps){
    const [selectedRank, setSelectedRank] = useState<{ rankName: string; details: RankDetails } | null>(null);
    const [selectedDivision, setSelectedDivision] = useState<{ name: string; price: number } | null>(null);

    const handleSelect = (rank: { rankName: string; details: RankDetails; division: { name: string; price: number } } | null) => {
        if (rank) {
          setSelectedRank({ ...rank });
          setSelectedDivision(rank.division);
          onActualRankSelect({ ...rank });
        } else if (rank && selectedDivision) {
            setSelectedRank(rank);
            setSelectedDivision(rank);
            onActualRankSelect(rank);
        }
    };

    function isValidHexColor(color: string): boolean {
        return /^#[0-9A-F]{6}$/i.test(color);
    }

    const backgroundColor = selectedRank && isValidHexColor(selectedRank.details.backgroundColor)
    ? selectedRank.details.backgroundColor
    : "#6B4230";


    return (
        <div className="flex flex-col items-center pt-20 h-[26rem] w-[18rem] md:h-[32rem] md:w-[20rem] bg-[#7A4B36] rounded-2xl" style={{ backgroundColor: backgroundColor }}>
            <EloDialog image={selectedRank?.details.backgroundImage as string} onRankSelect={handleSelect as any} rankData={gamerank as any} />
            <span className="text-xl font-medium text-primary">Selecione seu Elo Atual</span>
            {selectedRank && (
                <h3 className="text-3xl font-extrabold uppercase">{`${selectedRank.rankName} ${selectedDivision ? `${selectedDivision.name}` : ""}`}</h3>
            )}
        </div>
    )
}