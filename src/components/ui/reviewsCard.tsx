import { StarFilledIcon } from '@radix-ui/react-icons'

interface ReviewsCardProps {
    color: string;
    title: string;
    description: string;
    rating: number;
}

export function ReviewsCard({ color, description, title, rating }: ReviewsCardProps) {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <StarFilledIcon 
            key={index} 
            className={`w-4 h-4 ${index < rating ? (color == "valorant" ? "text-valorant" : "text-lol") : "text-gray-300"}`} 
        />
    ));

    return (
        <article className={`flex flex-col items-center justify-center max-w-xs md:max-w-md h-56 md:h-64 rounded-xl bg-secondary-foreground border gap-2 p-3 z-10 ${color == "valorant" ? "border-valorant" : "border-lol"}`}>
            <div className="flex flex-col items-center w-full gap-1 relative px-8">
                <div className="flex gap-3 items-center justify-start">
                    <h2 className="text-md md:text-2xl font-semibold">{title}</h2>
                </div>
                <span className="text-lg font-medium flex items-center">
                    {stars}
                </span>
            </div>
            <p className="text-primary-foreground text-xs md:text-sm md:text-md px-8 md:leading-loose">{description}</p>
        </article>
    );
}
