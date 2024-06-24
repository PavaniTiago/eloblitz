import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useGame } from "@/hooks/useGameColorContext"
import { ReviewsCard } from "./reviewsCard"
import { depoimentos } from "@/lib/reviews-content"

export function ReviewCarousel() {
    const { game, setGame } = useGame()
    return (
        <Carousel
        opts={{
            align: "center",
        }}
        className="md:w-full max-w-64 md:max-w-7xl"
        >
        <CarouselContent>
            {depoimentos.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <ReviewsCard color={game} description={review.comment} title={review.nick} />
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    )
}
