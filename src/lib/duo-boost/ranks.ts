import { RankData } from "@/types/rank-interface";

export const Ranks: RankData[] = [
  {
    rankName: "Unranked",
    details: {
      backgroundColor: "#1F1717",
      backgroundImage: "/elo-unranked.svg",
      price: 0,
    },
  },
  {
    rankName: "Ferro",
    details: {
      backgroundColor: "#5B443F",
      backgroundImage: "/elo-iron.svg",
      division: {
        1: { price: 25.71, name: "IV" },
        2: { price: 25.71, name: "III" },
        3: { price: 25.71, name: "II" },
        4: { price: 25.71, name: "I" },
      },
    },
  },
  {
    rankName: "Bronze",
    details: {
      backgroundColor: "#794A36",
      backgroundImage: "/elo-bronze.svg",
      division: {
        1: { price: 30.00, name: "IV" },
        2: { price: 30.00, name: "III" },
        3: { price: 30.00, name: "II" },
        4: { price: 25.71, name: "I" },
      },
    },
  },
  {
    rankName: "Prata",
    details: {
      backgroundColor: "#556B80",
      backgroundImage: "/elo-silver.svg",
      division: {
        1: { price: 40.71, name: "IV" },
        2: { price: 40.71, name: "III" },
        3: { price: 40.71, name: "II" },
        4: { price: 30.00, name: "I" },
      },
    },
  },
  {
    rankName: "Ouro",
    details: {
      backgroundColor: "#C27C34",
      backgroundImage: "/elo-gold.svg",
      division: {
        1: { price: 51.43, name: "IV" },
        2: { price: 51.43, name: "III" },
        3: { price: 51.43, name: "II" },
        4: { price: 40.71, name: "I" },
      },
    },
  },
  {
    rankName: "Platina",
    details: {
      backgroundColor: "#2F8E94",
      backgroundImage: "/elo-plat.svg",
      division: {
        1: { price: 72.86, name: "IV" },
        2: { price: 72.86, name: "III" },
        3: { price: 72.86, name: "II" },
        4: { price: 51.43, name: "I" },
      },
    },
  },
  {
    rankName: "Esmeralda",
    details: {
      backgroundColor: "#009F61",
      backgroundImage: "/elo-emerald.svg",
      division: {
        1: { price: 143.57, name: "IV" },
        2: { price: 143.57, name: "III" },
        3: { price: 143.57, name: "II" },
        4: { price: 72.86, name: "I" },
      },
    },
  },
  {
    rankName: "Diamante",
    details: {
      backgroundColor: "#3356A6",
      backgroundImage: "/elo-diamond.svg",
      division: {
        1: { price: 248.57, name: "IV" },
        2: { price: 227.14, name: "III" },
        3: { price: 195.00, name: "II" },
        4: { price: 71.79, name: "I" },
      },
    },
  },
  {
    rankName: "Mestre",
    details: {
      backgroundColor: "#8449CE",
      backgroundImage: "/elo-master.svg",
      price: 270.00,
    },
  },
];
