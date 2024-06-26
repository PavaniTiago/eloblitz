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
import AutoPlay from "embla-carousel-autoplay"

export function ReviewCarousel() {
    const { game } = useGame()
    return (
        <Carousel
        plugins={[
            AutoPlay({
                delay: 3000,
            })
           ]} 
           opts={{
            loop: true,
            align: "center",
           }}
        className="md:w-full max-w-64 md:max-w-7xl"
        >
        <CarouselContent>
            {depoimentos.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <ReviewsCard color={game} description={review.comment} title={review.nick} rating={review.rating as any} />
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    )
}
