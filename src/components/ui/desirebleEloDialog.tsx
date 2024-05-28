import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import { RankData, RankDetails } from "@/types/rank-interface";


interface DesirebleEloDialogProps {
  rankData: RankData[];
  onRankSelect: (rank: { rankName: string; details: RankDetails; division?: { name: string; price?: number } | null }) => void;
  image: string;
}

export function DesirebleEloDialog({ rankData, onRankSelect, image }: DesirebleEloDialogProps) {
  const [selectedRank, setSelectedRank] = useState<{ rankName: string; details: RankDetails } | null>(null);
  const [selectedDivision, setSelectedDivision] = useState<{ name: string; price?: number } | null>(null);

  const passData = () => {
    if (selectedRank) {
        let division = selectedDivision;
        if (!division && !["Unranked", "Mestre", "Grão Mestre", "Desafiante", "Radiante"].includes(selectedRank.rankName) && selectedRank.details.division) {
            division = { name: selectedRank.details.division[1].name, price: selectedRank.details.division[1].price !== null ?  selectedRank.details.division[1].price :  selectedRank.details.price};
        }
        onRankSelect({ rankName: selectedRank.rankName, division, details: selectedRank.details });
    }
};

return (
    <Dialog>
        <DialogTrigger asChild className="cursor-pointer animate-pulse">
            <div>
                <Image alt="elo image" src={image ? image : "/elo-bronze.svg"} width={0} height={0} className="object-cover w-40 h-40" />
            </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-7xl max-h-screen bg-secondary-foreground border-secondary border-2">
            <DialogHeader>
                <DialogTitle className="text-primary text-xl">Selecione a sua Liga e Divisão Anterior</DialogTitle>
            </DialogHeader>
            <div className="flex flex-wrap items-center justify-center gap-6 my-3 relative">
                {rankData.map((rank, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col justify-center items-center cursor-pointer`}
                        onClick={() => {
                            setSelectedRank(rank);
                            setSelectedDivision(null);
                        }}
                    >
                        <Image alt="rank image" src={rank.details.backgroundImage} width={0} height={0} className={`md:w-36 p-3 h-20 w-20 md:h-36 border-primary-foreground border-2 rounded-full ${selectedRank?.rankName === rank.rankName ? "bg-lol" : ""}`} />
                        <h3 className="text-base md:text-lg text-center font-semibold text-primary">{rank.rankName}</h3>
                    </div>
                ))}
            </div>
            {selectedRank && selectedRank.details.division && !["Master", "GrandMaster", "Challenger"].includes(selectedRank.rankName) && (
                <div className="flex flex-wrap items-center justify-center gap-6 pb-4">
                    {Object.entries(selectedRank.details.division).map(([divisionKey, divisionDetails]) => (
                        <div
                            key={divisionKey}
                            className={`cursor-pointer flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary ${selectedDivision?.name === divisionDetails.name ? "bg-lol" : ""}`}
                            onClick={() => setSelectedDivision(divisionDetails)}
                        >
                            <h3 className="text-lg font-semibold text-primary text-center">{divisionDetails.name}</h3>
                        </div>
                    ))}
                </div>
            )}
            <DialogFooter className="mx-auto">
                <Button onClick={passData} className="bg-lol text-primary px-20">Selecionar</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);
}