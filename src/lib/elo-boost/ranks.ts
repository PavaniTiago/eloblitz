import { RankData } from "@/types/rank-interface";

export const Ranks: RankData[] = [
  // {
  //   rankName: "Unranked",
  //   details: {
  //     backgroundColor: "#1F1717",
  //     backgroundImage: "/elo-unranked.svg",
  //     price: 0,
  //   },
  // },
  {
    rankName: "Ferro",
    details: {
      backgroundColor: "#5B443F",
      backgroundImage: "/elo-iron.svg",
      division: {
        1: { price: 10.80, name: "IV" },
        2: { price: 10.80, name: "III" },
        3: { price: 10.80, name: "II" },
        4: { price: 10.80, name: "I" },
      },
    },
  },
  {
    rankName: "Bronze",
    details: {
      backgroundColor: "#794A36",
      backgroundImage: "/elo-bronze.svg",
      division: {
        1: { price: 12.60, name: "IV" },
        2: { price: 12.60, name: "III" },
        3: { price: 12.60, name: "II" },
        4: { price: 12.60, name: "I" },
      },
    },
  },
  {
    rankName: "Prata",
    details: {
      backgroundColor: "#556B80",
      backgroundImage: "/elo-silver.svg",
      division: {
        1: { price: 17.10, name: "IV" },
        2: { price: 17.10, name: "III" },
        3: { price: 17.10, name: "II" },
        4: { price: 17.10, name: "I" },
      },
    },
  },
  {
    rankName: "Ouro",
    details: {
      backgroundColor: "#C27C34",
      backgroundImage: "/elo-gold.svg",
      division: {
        1: { price: 21.60, name: "IV" },
        2: { price: 21.60, name: "III" },
        3: { price: 21.60, name: "II" },
        4: { price: 21.60, name: "I" },
      },
    },
  },
  {
    rankName: "Platina",
    details: {
      backgroundColor: "#2F8E94",
      backgroundImage: "/elo-plat.svg",
      division: {
        1: { price: 30.60, name: "IV" },
        2: { price: 30.60, name: "III" },
        3: { price: 30.60, name: "II" },
        4: { price: 30.60, name: "I" },
      },
    },
  },
  {
    rankName: "Esmeralda",
    details: {
      backgroundColor: "#009F61",
      backgroundImage: "/elo-emerald.svg",
      division: {
        1: { price: 60.30, name: "IV" },
        2: { price: 60.30, name: "III" },
        3: { price: 60.30, name: "II" },
        4: { price: 60.30, name: "I" },
      },
    },
  },
  {
    rankName: "Diamante",
    details: {
      backgroundColor: "#3356A6",
      backgroundImage: "/elo-diamond.svg",
      division: {
        1: { price: 63.00, name: "IV" },
        2: { price: 90.00, name: "III" },
        3: { price: 98.10, name: "II" },
        4: { price: 107.10, name: "I" },
      },
    },
  },
  {
    rankName: "Mestre",
    details: {
      backgroundColor: "#8449CE",
      backgroundImage: "/elo-master.svg",
      price: 125.10,
    },
  },
  {
    rankName: "Grão Mestre",
    details: {
      backgroundColor: "#702523",
      backgroundImage: "/elo-grandmaster.svg",
      price: 660.60 ,
    },
  },
  {
    rankName: "Desafiante",
    details: {
      backgroundColor: "#053477",
      backgroundImage: "/elo-challenger.svg",
      price: 1410.30,
    },
  },
];
