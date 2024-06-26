"use client"

import { useState } from "react"
import { Button } from "./button"
import { Minus, Plus } from "lucide-react"
import { Switch } from "./switch";
import { log } from "console";

interface Md5Props {
    color: string;
    onSelectCount: (count: number) => void;
    onSwitch: (value: boolean) => void;
    bgColor: string;
}

export function     Md5Card({ color, bgColor, onSelectCount, onSwitch }: Md5Props) {
    const [count, setCount] = useState<number>(5);
    const [duoBoost, setDuoBoost] = useState(false);

    const decrement = () => {
        if (count > 1) {setCount(count - 1); onSelectCount(count - 1)};
    };

    const increment = () => {
        if (count < 5) {setCount(count + 1); onSelectCount(count + 1)};
    };

    function isValidHexColor(color: string): boolean {
        return /^#[0-9A-F]{6}$/i.test(color);
    }

    const backgroundColor = bgColor && isValidHexColor(bgColor)
    ? bgColor
    : "#6B4230";

    return (
        <div className={`flex flex-col items-center pt-20 h-[26rem] w-[18rem] md:h-[32rem] md:w-[20rem] rounded-2xl z-20`} style={{backgroundColor: backgroundColor}}>
            <div className="flex items-center justify-center bg-[#000]/25 w-28 h-28 md:w-32 md:h-32 rounded-full p-6">
                <span className="text-5xl text-primary font-extrabold">{count}</span>
            </div>
            <span className="text-xl font-medium text-primary pt-12">Quantidade de Partidas</span>
            <div className="flex items-center space-x-2 mt-3">
                <Button onClick={decrement} className="bg-primary rounded-full h-7 w-7 p-1.5 opacity-25 hover:opacity-100 transition-all">
                    <Minus className="text-secondary-foreground" />
                </Button>
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={i}
                            className={`h-8 w-8 border-2 border-[#fff]/50 ${i < count ? `${`bg-${color}`}` : 'bg-transparent'} rounded-sm`}
                        ></span>
                    ))}
                </div>
                <Button onClick={increment} className="bg-primary rounded-full h-7 w-7 p-1.5 opacity-25 hover:opacity-100 transition-all">
                    <Plus className="text-secondary-foreground" />
                </Button>
            </div>
            <div className="flex mt-auto mb-4 items-center justify-center space-x-2 bg-[#000]/25 px-8 md:px-16 py-4 rounded-lg">
                <span className="text-xl font-medium text-primary">Duo Boost</span>
                <Switch onClick={() => {
                    setDuoBoost(prevDuoBoost => !prevDuoBoost);
                    onSwitch(!duoBoost);
                    console.log(!duoBoost, "chego");
                }} />
            </div>
        </div>
    );
}