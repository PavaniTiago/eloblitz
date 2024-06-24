import { Star } from "lucide-react";

interface ReviewsCardProps {
    color: string;
    title: string;
    description: string;
}

export function ReviewsCard({ color, description, title }: ReviewsCardProps){
    return (
        <article className={`flex flex-col items-center justify-center max-w-xs md:max-w-md h-56 md:h-64 rounded-xl bg-secondary-foreground border gap-2 p-3 z-10 ${color == "valorant" ? "border-valorant" : "border-lol"}`}>
            <div className="flex flex-col items-start justify-start w-full gap-1 relative px-8">
                <div className="flex gap-3 items-center justify-start">
                    <div className={`object-cover self-start w-5 h-5 md:w-8 md:h-8 rounded-full p-3 ${color == "valorant" ? "bg-valorant" : "bg-lol"}`} />
                    <h2 className="text-md md:text-2xl font-semibold">{title}</h2>
                </div>
                <span className={`${color == "valorant" ? "text-valorant" : "text-lol"} text-lg font-medium flex items-center `}>
                    <Star className={`w-4 h-4 ${color == "valorant" ? "text-valorant" : "text-lol"}`}/>
                    <Star className={`w-4 h-4 ${color == "valorant" ? "text-valorant" : "text-lol"}`}/>
                    <Star className={`w-4 h-4 ${color == "valorant" ? "text-valorant" : "text-lol"}`}/>
                    <Star className={`w-4 h-4 ${color == "valorant" ? "text-valorant" : "text-lol"}`}/>
                    <Star className={`w-4 h-4 ${color == "valorant" ? "text-valorant" : "text-lol"}`}/>
                </span>
            </div>
                <p className="text-primary-foreground text-xs md:text-sm md:text-md px-8 md:leading-loose">{description}</p>
        </article>
    )
}