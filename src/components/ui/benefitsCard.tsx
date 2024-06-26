import Image, { StaticImageData } from "next/image"

interface BenefitsCardProps {
    icon: StaticImageData | string | any;
    title: string;
    description: string;
    color: string;
}

export default function BenefitsCard({ description, icon, title, color }: BenefitsCardProps){
    return (
        <article className={`flex items-center max-w-xl h-36 md:h-44 rounded-xl bg-secondary-foreground border gap-4 p-3 ${color == "valorant" ? "border-valorant" : "border-lol"}`}>
            <Image src={icon} alt="benefits icon" width={0} height={0} className={`object-cover self-start w-12 mt-4 h-12 rounded-lg border p-3 ${color == "valorant" ? "border-valorant" : "border-lol"}`} />
            <div className="flex flex-col gap-1.5">
                <h2 className={`${color == "valorant" ? "text-valorant" : "text-lol"} text-lg md:text-2xl font-semibold`}>{title}</h2>
                <p className="text-primary-foreground max-w-56 md:max-w-lg text-xs md:text-sm">{description}</p>
            </div>
        </article>
    )
}