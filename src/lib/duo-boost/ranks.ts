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
        1: { price: 19.98, name: "IV" },
        2: { price: 19.98, name: "III" },
        3: { price: 19.98, name: "II" },
        4: { price: 19.98, name: "I" },
      },
    },
  },
  {
    rankName: "Bronze",
    details: {
      backgroundColor: "#794A36",
      backgroundImage: "/elo-bronze.svg",
      division: {
        1: { price: 22.68, name: "IV" },
        2: { price: 22.68, name: "III" },
        3: { price: 22.68, name: "II" },
        4: { price: 22.68, name: "I" },
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
        1: { price: 31.68, name: "IV" },
        2: { price: 31.68, name: "III" },
        3: { price: 31.68, name: "II" },
        4: { price: 31.68, name: "I" },
      },
    },
  },
  {
    rankName: "Platina",
    details: {
      backgroundColor: "#2F8E94",
      backgroundImage: "/elo-plat.svg",
      division: {
        1: { price: 46.98, name: "IV" },
        2: { price: 46.98, name: "III" },
        3: { price: 46.98, name: "II" },
        4: { price: 46.98, name: "I" },
      },
    },
  },
  {
    rankName: "Esmeralda",
    details: {
      backgroundColor: "#009F61",
      backgroundImage: "/elo-emerald.svg",
      division: {
        1: { price: 93.96, name: "IV" },
        2: { price: 93.96, name: "III" },
        3: { price: 93.96, name: "II" },
        4: { price: 93.96, name: "I" },
      },
    },
  },
  {
    rankName: "Diamante",
    details: {
      backgroundColor: "#3356A6",
      backgroundImage: "/elo-diamond.svg",
      division: {
        1: { price: 93.96, name: "IV" },
        2: { price: 132.48, name: "III" },
        3: { price: 150.48, name: "II" },
        4: { price: 231.48, name: "I" },
      },
    },
  },
  {
    rankName: "Mestre",
    details: {
      backgroundColor: "#8449CE",
      backgroundImage: "/elo-master.svg",
      price: 356.58,
    },
  },
];
