import { RankData } from "@/types/rank-interface";

export const Ranks: RankData[] = [
  {
    rankName: "Unranked",
    details: {
      backgroundColor: "#1F1717",
      backgroundImage: "/elo-unranked.svg",
      price: 19.20,
      matchPrice: 3.84,
    },
  },
  {
    rankName: "Ferro",
    details: {
      backgroundColor: "#5B443F",
      backgroundImage: "/elo-iron.svg",
      price: 18.45,
      matchPrice: 3.69,
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Bronze",
    details: {
      backgroundColor: "#794A36",
      backgroundImage: "/elo-bronze.svg",
      price: 22.05,
      matchPrice: 4.41,
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Prata",
    details: {
      backgroundColor: "#556B80",
      backgroundImage: "/elo-silver.svg",
      price: 24.75,
      matchPrice: 4.95,
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Ouro",
    details: {
      backgroundColor: "#C27C34",
      backgroundImage: "/elo-gold.svg",
      price: 29.25,
      matchPrice: 5.85,
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Platina",
    details: {
      backgroundColor: "#2F8E94",
      backgroundImage: "/elo-plat.svg",
      price: 40.95,
      matchPrice: 8.19,
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Esmeralda",
    details: {
      backgroundColor: "#009F61",
      backgroundImage: "/elo-emerald.svg",
      price: 49.50,
      matchPrice: 9.90,
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Diamante",
    details: {
      backgroundColor: "#3356A6",
      backgroundImage: "/elo-diamond.svg",
      price: 54.45,
      matchPrice: 10.89,
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Mestre",
    details: {
      backgroundColor: "#8449CE",
      backgroundImage: "/elo-master.svg",
      price: 76.95,
      matchPrice: 15.39,
    },
  },
  {
    rankName: "Grão Mestre",
    details: {
      backgroundColor: "#702523",
      backgroundImage: "/elo-grandmaster.svg",
      price: 144.45,
      matchPrice: 28.89,
    },
  },
  {
    rankName: "Desafiante",
    details: {
      backgroundColor: "#053477",
      backgroundImage: "/elo-challenger.svg",
      price: 229.50,
      matchPrice: 45.90,
    },
  },
];
