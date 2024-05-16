import Image from "next/image";

export function Footer(){
    return (
        <footer className="flex flex-col items-center w-full gap-12 pb-8 pt-32 bg-secondary">
            <div className="flex w-full justify-evenly items-center">
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-2xl text-primary">LOGO</h3>
                    <p className="text-lg text-primary-foreground max-w-sm">Our vision is to provide convenience and help increase your sales business.</p>
                    <div className="flex gap-3 items-center">
                        <Image alt="social media icon" src="/instagram.svg" width={0} height={0} className="w-10 h-10 text-secondary bg-primary rounded-full p-2"/>
                        <Image alt="social media icon" src="/facebook.svg" width={0} height={0} className="w-10 h-10 text-secondary bg-primary rounded-full p-2"/>
                        <Image alt="social media icon" src="/twitter.svg" width={0} height={0} className="w-10 h-10 text-secondary bg-primary rounded-full p-2"/>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-xl text-primary">League of Legends</h3>
                    <p className="text-primary-foreground text-md">Duo Boost</p>
                    <p className="text-primary-foreground text-md">Elo Job</p>
                    <p className="text-primary-foreground text-md">Md5</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-xl text-primary">Valorant</h3>
                    <p className="text-primary-foreground text-md">Duo Boost</p>
                    <p className="text-primary-foreground text-md">Elo Job</p>
                    <p className="text-primary-foreground text-md">Md5</p>
                </div>
            </div>
            <span className="text-sm font-medium text-primary">©2024 EloBlitz. All rights reserved</span>
        </footer>
    )
}