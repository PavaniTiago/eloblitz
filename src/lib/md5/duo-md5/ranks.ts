import { RankData } from "@/types/rank-interface";

export const RanksDuo: RankData[] = [
  {
    rankName: "Unranked",
    details: {
      backgroundColor: "#1F1717",
      backgroundImage: "/elo-unranked.svg",
      price: 29.70,
      matchPrice: 5.94,
    },
  },
  {
    rankName: "Ferro",
    details: {
      backgroundColor: "#5B443F",
      backgroundImage: "/elo-iron.svg",
      price: 26.10,
      matchPrice: 5.22,
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
      price: 30.60,
      matchPrice: 6.12,
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
      price: 35.10,
      matchPrice: 7.02,
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
      price: 39.15,
      matchPrice: 7.83,
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
      price: 47.25,
      matchPrice: 9.45,
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
      price: 72.00,
      matchPrice: 14.40,
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
      price: 107.50,
      matchPrice: 21.50,
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
      price: 162.00,
      matchPrice: 32.40,
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
];
