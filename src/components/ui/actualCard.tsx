import Image from "next/image";
import { Dialog } from "./dialog";
import { EloDialog } from "./eloDialog";

export function ActualCard(){
    return (
        <div className="flex flex-col items-center pt-20 h-[32rem] w-[20rem] bg-[#7A4B36] rounded-2xl">
            <EloDialog />
            <span className="text-xl font-medium text-primary">Selecione seu Elo Atual</span>
            <h3 className="text-3xl font-semibold uppercase">bronze IV</h3>
        </div>
    )
}