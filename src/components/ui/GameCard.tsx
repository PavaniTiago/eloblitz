import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface GameCardProps {
    title: string;
    description: string;
    icon: StaticImageData | string;
    color: string;
    href: string;
    underline?: string;
}

export function GameCard({ description, icon, title, color, href, underline }: GameCardProps) {
  return (
    <Card color={color} className={`w-[300px] h-[440px] relative bg-secondary-foreground border-2 border-secondary-foreground z-20 hover:border-2 ${color == "valorant" ? "hover:border-valorant" : "hover:border-lol"}`}>
      <CardHeader>
        <div className={`self-center border-2 rounded-full p-4 text-primary ${color == "valorant" ? "border-valorant" : "border-lol"}`}>
            <Image alt="game card icon" src={icon} width={0} height={0} className={`self-center object-contain w-16 h-16`}/>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 mx-4">
        <CardTitle className="text-3xl font-bold text-primary uppercase text-center"><del>{underline}</del> {title}</CardTitle>
        <CardDescription className="text-primary-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter className="absolute bottom-0">
        <Link href={href}><Button className={`${color == "valorant" ? "bg-valorant hover:bg-valorant/80" : "bg-lol hover:bg-lol/80"} transition-all text-md hover:bg font-normal text-primary w-64 py-6`}>Adquirir</Button></Link>
      </CardFooter>
    </Card>
  )
}
