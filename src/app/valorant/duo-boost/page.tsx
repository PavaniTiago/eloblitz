import { ActualCard } from "@/components/ui/actualCard";
import { Button } from "@/components/ui/button";
import { DesireblaCard } from "@/components/ui/desirableCard";

export default function EloBoost(){
    return (
        <main className="flex min-h-screen w-full flex-col justify-center items-center bg-secondary text-primary pt-40">
            <section className="flex w-full max-w-7xl items-center justify-between">
                <div className="flex items-center gap-8 z-10">
                    <ActualCard />
                    <DesireblaCard />
                </div>
                <div className="flex flex-col gap-4 relative">
                    <div className="w-64 h-40 rounded-full absolute mx-auto top-10">
                        <div className="w-full h-full bg-valorant blur-[10rem]"></div>
                    </div>
                    <h2 className="text-primary text-5xl font-extrabold pt-12 z-10 max-w-lg text-start">BRONZE IV ao PLATINA III</h2>
                    <div className="flex items-center gap-4 z-10">
                        <p className="text-primary text-2xl font-semibold text-center z-10">R$ 126,00</p>
                        <del className="text-primary-foreground text-lg font-semibold text-center max-w-l z-10">R$ 96,00</del>
                        <span className="border-valorant border rounded-full text-valorant text-sm p-1.5 px-2">25% off</span>
                    </div>
                    <Button className="bg-valorant text-xl text-primary max-w-sm py-7 mt-6 rounded-xl font-semibold z-10">Contratar (R$ 126,00)</Button>
                </div>
            </section>
            <section className="flex flex-col w-full max-w-7xl items-start justify-start border-t border-primary-foreground mt-20">
                <h2 className="text-primary text-5xl pt-12 font-extrabold z-10">SOBRE DUO BOOST</h2>
                <p className="text-primary-foreground text-md max-w-xl mt-6 z-10">
                    Quer subir de ELO, garantir recompensas, economizar tempo ou elevar o nível dos seus adversários e colegas de equipe? Elo boost (Elo Job) é o serviço ideal para você.
                </p>
                <p className="text-primary-foreground text-md max-w-xl mt-6 z-10">
                    Quer subir de ELO, garantir recompensas, economizar tempo ou elevar o nível dos seus adversários e colegas de equipe? Elo boost (Elo Job) é o serviço ideal para você.
                    Nós jogaremos para você até atingir o ELO desejado. Você poderá observar como nos comportamos em partidas ranqueadas, entender as táticas e estratégias utilizadas para subir de ELO, além de receber dicas para melhorar sua performance in-game e evoluir sozinho.
                </p>
                <p className="text-primary-foreground text-md max-w-xl mt-6 z-10">
                    Sabemos que disputar partidas com jogadores de ligas mais altas é a forma mais rápida de evoluir suas habilidades in-game. Jogando em elos mais altos, cada jogada desafiará suas habilidades e você terá a oportunidade de aprender com colegas de equipe em vez de se frustrar com jogadas sem sentido e a toxicidade comum em elos mais baixos.
                </p>
            </section>
        </main>
    )
}