import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { DrawerLinks } from "./drawerLinks"

export function MenuDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link"><Menu className="w-8 h-8"/></Button>
      </SheetTrigger>
      <SheetContent className="bg-secondary border-secondary-foreground pt-12">
        <SheetHeader>
          <SheetTitle className="text-primary">Elo Blitz</SheetTitle>
        </SheetHeader>
        <DrawerLinks />
      </SheetContent>
    </Sheet>
  )
}
