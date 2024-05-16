"use client"

import { useState } from "react"
import { Button } from "./button"
import { Minus, Plus } from "lucide-react"

interface Md5Props {
    color: string;
}

export function Md5Card({ color }: Md5Props) {
    const [count, setCount] = useState<number>(5);

    const decrement = () => {
        if (count > 1) setCount(count - 1);
    };

    const increment = () => {
        if (count < 5) setCount(count + 1);
    };

    return (
        <div className="flex flex-col items-center pt-20 h-[32rem] w-[20rem] bg-[#7A4B36] rounded-xl">
            <div className="flex items-center justify-center bg-[#000]/25 w-32 h-32 rounded-full p-6">
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
        </div>
    );
}