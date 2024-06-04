import { RankData } from "@/types/rank-interface";

export const RanksDuo: RankData[] = [
  {
    rankName: "Unranked",
    details: {
      backgroundColor: "#1F1717",
      backgroundImage: "/elo-unranked.svg",
      price: 42.50,
      matchPrice: 8.55,
    },
  },
  {
    rankName: "Ferro",
    details: {
      backgroundColor: "#5B443F",
      backgroundImage: "/elo-iron.svg",
      price: 30.00,
      matchPrice: 6.00,
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
      price: 34.50,
      matchPrice: 6.90,
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
      price: 39.00,
      matchPrice: 7.80,
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
      price: 46.90,
      matchPrice: 9.38,
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
      price: 63.75,
      matchPrice: 12.75,
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
      price: 78.75,
      matchPrice: 15.75,
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
      price: 84.75,
      matchPrice: 16.95,
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
];
