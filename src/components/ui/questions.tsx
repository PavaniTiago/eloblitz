import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Questions() {
    return (
      <Accordion type="single" collapsible className="w-[280px] md:w-[440px]">
        <AccordionItem value="item-1" className="text-primary">
          <AccordionTrigger className="text-start">A ELOBLITZ É CONFIÁVEL?</AccordionTrigger>
          <AccordionContent>
            Sim! Na ELOBLITZ, construímos nossa reputação com base na confiança e na excelência dos nossos serviços. 
            Com uma equipe dedicada, e com diversos serviços concluídos com sucesso, garantimos segurança, qualidade e satisfação para todos os nossos clientes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="text-primary">
          <AccordionTrigger>PORQUE CONTRATAR A ELOBLITZ?</AccordionTrigger>
          <AccordionContent>
            Nossa prioridade número 1 sempre será o cliente. Com anos de experiência, oferecemos os melhores serviços de boost, garantindo que suas necessidades sejam atendidas de forma rápida, profissional e segura, com o melhor preço do mercado!
            Após o serviço ser finalizado, todos os dados de sua conta são completamente deletados de nosso banco de dados, certificando segurança para nossos usuários. Proporcionamos uma plataforma que utiliza das melhores e mais modernas tecnologias, garantindo uma excelente experiência para nossos clientes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="text-primary">
          <AccordionTrigger>OS BOOSTERS SÃO QUALIFICADOS?</AccordionTrigger>
          <AccordionContent>
            Antes de um jogador fazer parte de nossa equipe ele passa por um árduo processo seletivo onde filtramos somente os mais interessados, 
            habilidosos e responsáveis jogadores da fila ranqueada. Nossa equipe é composta somente por jogadores Mestre, Grão-Mestre e Desafiante. Além disso, nossos profissionais recebem um treinamento adequado para discrição dos serviços e cuidados técnicos com as contas de nossos clientes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="text-primary">
          <AccordionTrigger>COMO SEI QUE MINHA CONTA NÃO SERÁ ROUBADA?</AccordionTrigger>
          <AccordionContent>
            Para realizar qualquer modificação em sua conta, é necessário acesso ao seu e-mail pessoal. Nós nunca solicitaremos essas informações a você. Caso sinta necessidade, recomendamos utilizar uma senha temporária antes de fornecer os dados de acesso à ELOBLITZ. Após a conclusão do serviço, você pode retornar à sua senha original.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="text-primary">
          <AccordionTrigger>ESSE SERVIÇO É HONESTO?</AccordionTrigger>
          <AccordionContent>
            Embora algumas pessoas possam considerar nosso serviço de eloboosting imoral, discordamos dessa visão. Nossos Boosters proporcionam uma oportunidade para aprender como se comportar em jogos de SoloQ, mesmo quando sua equipe enfrenta desafios de habilidade e maturidade. Reconhecemos que muitos jogadores enfrentam situações estressantes em filas ranqueadas devido a trolls, afks e comportamentos agressivos. Além disso, muitos jogadores têm dificuldades devido à falta de tempo, resultando em quedas por inatividade mesmo em elos mais altos. Acreditamos que nosso trabalho é justo e motivado por boas intenções.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="text-primary">
          <AccordionTrigger>HÁ RISCO DE SER BANIDO?</AccordionTrigger>
          <AccordionContent>
            Seguimos um protocolo rigoroso para garantir a segurança da sua conta durante a prestação dos serviços. As chances são mínimas, e com nosso protocolo de segurança, praticamente NULAS! No máximo, pode ocorrer um "bloqueio de segurança" pela empresa responsável pelo jogo, mas com um simples ticket informando os dados corretos da conta, você poderá recuperá-la.
          </AccordionContent>
        </AccordionItem>

        <h2 className="text-primary font-semibold text-2xl mt-12">PAGAMENTOS</h2>

        <AccordionItem value="item-7" className="text-primary">
          <AccordionTrigger>QUAIS SÃO AS FORMAS DE PAGAMENTO?</AccordionTrigger>
          <AccordionContent>
            No momento, aceitamos somente PIX devido a uma atualização no sistema de pagamentos que está afetando a integração de outras formas de pagamento.
            Aceitamos somente dinheiro, não aceitamos outras formas de pagamento como: Contas, Steam, etc.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" className="text-primary">
          <AccordionTrigger>O PAGAMENTO É SEGURO?</AccordionTrigger>
          <AccordionContent>
            Sim. Utilizamos o PIX como método de pagamento seguro. Garantimos a segurança através de medidas de proteção rigorosas. Além disso, nosso site possui Certificado de Segurança (SSL/HTTPS - Cadeado verde ao lado da barra de endereços do navegador). Isso significa que todos seus dados e informações estão criptografadas tanto na hora da navegação quanto na hora da compra.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9" className="text-primary text-start">
          <AccordionTrigger className="text-start">POSSO PAGAR PELO SERVIÇO APÓS A SUA FINALIZAÇÃO?</AccordionTrigger>
          <AccordionContent>
          Infelizmente não. Trabalhamos apenas com o pagamento antecipado.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10" className="text-primary">
          <AccordionTrigger className="text-start">MEU MMR ESTÁ MUITO BAIXO (GANHANDO MENOS DE 18 PONTOS POR VITÓRIA), TERÁ ALGUMA MODIFICAÇÃO DE PREÇO?</AccordionTrigger>
          <AccordionContent>
          Sim. O motivo para a modificação do preço é que o booster terá que jogar quase o dobro de partidas em relação à uma conta com MMR normal. Cobramos uma taxa adicional proporcional ao elo contratado, caso sua conta esteja ganhando menos de 18 pontos por partida. A taxa é paga somente uma vez.
          </AccordionContent>
        </AccordionItem>

        <h2 className="text-primary font-semibold text-2xl mt-12">OUTROS</h2>

        <AccordionItem value="item-11" className="text-primary">
          <AccordionTrigger>FAÇO PARA SER UM BOOSTER?</AccordionTrigger>
          <AccordionContent>
            Caso seja Mestre, Grão-Mestre ou Desafiante e gostaria de fazer parte da nossa equipe, basta fazer o procedimento em nosso Discord ou entrar em contato no WhatsApp. Não contratamos pessoas fora desses padrões mencionados.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12" className="text-primary">
          <AccordionTrigger>QUAIS SÃO OS CONTATOS OFICIAIS DA ELOBLITZ?</AccordionTrigger>
          <AccordionContent>
            A seguir estão os contatos oficiais, são somente esses e nenhum outro. Não acredite em ninguém que diga estar vinculado a ELOBLITZ sem o contato ser exercido pelos contatos oficiais.
            <br />
            <span className="font-bold">
                WhatsApp:
            </span>  
            (12) 98217-5403
            <br />
            <span className="font-bold">
                Instagram:
            </span>
                https://www.instagram.com/eloblitzlol/
            <br />
            <span className="font-bold">
                Discord:
            </span>
                https://discord.com/invite/DGpYEzHrw4
            <br />
            <span className="font-bold">
                Atendimento Online:
            </span>
            Via WhatsApp ou no servidor do Discord
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13" className="text-primary">
          <AccordionTrigger>EU TENHO OUTRA DÚVIDA QUE NÃO ESTÁ NO FAQ, COMO PROCEDER?</AccordionTrigger>
          <AccordionContent>
          Disponibilizamos suporte 24 horas por dia e prezamos pela comunicação transparente com o cliente. Poderá tirar qualquer dúvida pelos nossos canais de atendimento: WhatsApp ou Discord.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  