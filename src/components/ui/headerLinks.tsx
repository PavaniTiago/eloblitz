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
import Image from "next/image"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Elo Boost",
    href: "/valorant/elo-boost",
    description:
      "Evolua Seu rank de forma segura com os melhores players.",
  },
  {
    title: "Duo Boost",
    href: "/valorant/duo-boost",
    description:
      "Jogue Duo juntamente com os melhores players.",
  },
  {
    title: "Md5",
    href: "/valorant/md5",
    description:
      "Tenha Garantia na sua Md5.",
  },
]

export function HeaderLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>League of Legends</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col">
            <ul className="gap-3 p-6">
              <ListItem href="/league-of-legends/elo-boost" title="Elo Boost" className="w-60 hover:bg-secondary-foreground hover:text-primary">
                Evolua Seu rank de forma segura com os melhores players.
              </ListItem>
              <ListItem href="/league-of-legends/duo-boost" title="Duo Boost" className="w-60 hover:bg-secondary-foreground hover:text-primary">
                Jogue Duo juntamente com os melhores players.
              </ListItem>
              <ListItem href="/league-of-legends/md5" title="Md5" className="w-60 hover:bg-secondary-foreground hover:text-primary">
                Tenha Garantia na sua Md5.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Valorant</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col">
            <ul className="w-[300px] gap-3 p-4">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="hover:bg-secondary-foreground hover:text-primary"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/faq" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              FAQ
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contato" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Image alt="discord icon" src="/discord.svg" width={0} height={0} className="w-8 h-8 my-auto"/>
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
