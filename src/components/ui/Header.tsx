import Link from "next/link";

export function Header(){
    return(
        <header className="flex absolute top-0 bg-current z-30 text-primary items-center justify-between w-full h-24 px-14">
            <h1>Eloblitz</h1>
            <nav className="flex gap-10 items-center">
                <Link href="#">League of Legends</Link>
                <Link href="#">Valorant</Link>
                <Link href="#">Faq</Link>
                <Link href="#">Contato</Link>
            </nav>
        </header>
    )
}