import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

export function EloDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer animate-pulse">
        <Image alt="elo image" src="/elo-bronze.svg" width={0} height={0} className="object-cover w-40 h-40"/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-6xl bg-secondary-foreground border-secondary border-2">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">Selecione a sua Liga e Divisão Anterior</DialogTitle>
        </DialogHeader>
        
        <DialogFooter className="mx-auto">
          <Button type="submit" className="bg-lol text-primary px-20">Selecionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
