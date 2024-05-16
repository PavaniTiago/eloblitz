import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image"

interface GameButtonProps {
    icon: StaticImageData | string;
    title: string;
    className?: string;
    onClick?: () => void;
}

export default function GameButton({ icon, title, className, onClick }: GameButtonProps) {
    return (
        <button onClick={onClick} className={cn(`flex flex-col items-center hover:text-white text-xl text-primary hover:text-white font-bold py-2 px-4 rounded z-20 transition-all ${className}`)}>
            <Image src={icon} alt="game icon" width={0} height={0} className="object-cover h-20 w-20"/>
            {title}
        </button>
    )
};
