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
        1: { price: 12.86, name: "IV" },
        2: { price: 12.86, name: "III" },
        3: { price: 12.86, name: "II" },
        4: { price: 12.86, name: "I" },
      },
    },
  },
  {
    rankName: "Bronze",
    details: {
      backgroundColor: "#794A36",
      backgroundImage: "/elo-bronze.svg",
      division: {
        1: { price: 15.00, name: "IV" },
        2: { price: 15.00, name: "III" },
        3: { price: 15.00, name: "II" },
        4: { price: 12.86, name: "I" },
      },
    },
  },
  {
    rankName: "Prata",
    details: {
      backgroundColor: "#556B80",
      backgroundImage: "/elo-silver.svg",
      division: {
        1: { price: 20.36, name: "IV" },
        2: { price: 20.36, name: "III" },
        3: { price: 20.36, name: "II" },
        4: { price: 15.00, name: "I" },
      },
    },
  },
  {
    rankName: "Ouro",
    details: {
      backgroundColor: "#C27C34",
      backgroundImage: "/elo-gold.svg",
      division: {
        1: { price: 25.71, name: "IV" },
        2: { price: 25.71, name: "III" },
        3: { price: 25.71, name: "II" },
        4: { price: 20.36, name: "I" },
      },
    },
  },
  {
    rankName: "Platina",
    details: {
      backgroundColor: "#2F8E94",
      backgroundImage: "/elo-plat.svg",
      division: {
        1: { price: 36.43, name: "IV" },
        2: { price: 36.43, name: "III" },
        3: { price: 36.43, name: "II" },
        4: { price: 25.71, name: "I" },
      },
    },
  },
  {
    rankName: "Esmeralda",
    details: {
      backgroundColor: "#009F61",
      backgroundImage: "/elo-emerald.svg",
      division: {
        1: { price: 71.80, name: "IV" },
        2: { price: 71.80, name: "III" },
        3: { price: 71.80, name: "II" },
        4: { price: 36.43, name: "I" },
      },
    },
  },
  {
    rankName: "Diamante",
    details: {
      backgroundColor: "#3356A6",
      backgroundImage: "/elo-diamond.svg",
      division: {
        1: { price: 124.29, name: "IV" },
        2: { price: 113.57, name: "III" },
        3: { price: 97.50, name: "II" },
        4: { price: 71.79, name: "I" },
      },
    },
  },
  {
    rankName: "Mestre",
    details: {
      backgroundColor: "#8449CE",
      backgroundImage: "/elo-master.svg",
      price: 135.00,
    },
  },
  {
    rankName: "Grão Mestre",
    details: {
      backgroundColor: "#702523",
      backgroundImage: "/elo-grandmaster.svg",
      price: 964.00 ,
    },
  },
  {
    rankName: "Desafiante",
    details: {
      backgroundColor: "#053477",
      backgroundImage: "/elo-challenger.svg",
      price: 1607.00,
    },
  },
];
