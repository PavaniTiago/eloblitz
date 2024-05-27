"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function DrawerLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col text-primary items-start pt-4">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="py-2">League of Legends</AccordionTrigger>
                    <AccordionContent>
                        <Link href="/league-of-legends/elo-boost">
                            Elo Boost
                        </Link>
                    </AccordionContent>
                    <AccordionContent>
                    <Link href="/league-of-legends/duo-boost">
                        Duo Boost
                    </Link>
                    </AccordionContent>
                    <AccordionContent>
                    <Link href="/league-of-legends/md5">
                        Md5
                    </Link>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="py-2">Valorant</AccordionTrigger>
                    <AccordionContent>
                    <Link href="/valorant/elo-boost">
                        Elo Boost
                    </Link>
                    </AccordionContent>
                    <AccordionContent>
                    <Link href="/valorant/duo-boost">
                        Duo Boost
                    </Link>
                    </AccordionContent>
                    <AccordionContent>
                    <Link href="/valorant/md5">
                        Md5
                    </Link>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        <NavigationMenuItem>
          <Link href="/faq" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Faq
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contato" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
