interface ReviewsCardProps {
    color: string;
    title: string;
    description: string;
    rank: string;
}

export function ReviewsCard({ color, description, title, rank }: ReviewsCardProps){
    return (
        <article className={`flex flex-col items-center justify-center max-w-md h-48 md:h-64 rounded-xl bg-secondary-foreground border gap-4 p-3 z-10 ${color == "valorant" ? "border-valorant" : "border-lol"}`}>
            <div className="flex items-center justify-start w-full gap-3 relative px-8">
                <div className={`object-cover self-start w-8 h-8 md:w-12 md:h-12 rounded-full p-3 ${color == "valorant" ? "bg-valorant" : "bg-lol"}`} />
                <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
                <span className={`${color == "valorant" ? "text-valorant" : "text-lol"} text-lg font-medium absolute right-8`}>{rank}</span>
            </div>
                <p className="text-primary-foreground text-sm md:text-md px-8 md:leading-loose">{description}</p>
        </article>
    )
}