


import { RankData } from "@/types/rank-interface";

export const Ranks: RankData[] = [
  // {
  //   rankName: "Unranked",
  //   details: {
  //     backgroundColor: "#1F1717",
  //     backgroundImage: "/valorant/elo-unranked.svg",
  //     price: 0,
  //   },
  // },
  {
    rankName: "Ferro",
    details: {
      backgroundColor: "#584C4B",
      backgroundImage: "/valorant/elo-iron.svg",
      division: {
        1: { price: 8.10, name: "III" },
        2: { price: 8.10, name: "II" },
        3: { price: 8.10, name: "I" },
      },
    },
  },
  {
    rankName: "Bronze",
    details: {
      backgroundColor: "#794A36",
      backgroundImage: "/valorant/elo-bronze.svg",
      division: {
        1: { price: 8.10, name: "III" },
        2: { price: 8.10, name: "II" },
        3: { price: 8.10, name: "I" },
      },
    },
  },
  {
    rankName: "Prata",
    details: {
      backgroundColor: "#556B80",
      backgroundImage: "/valorant/elo-silver.svg",
      division: {
        1: { price: 12.60, name: "III" },
        2: { price: 12.60, name: "II" },
        3: { price: 12.60, name: "I" },
      },
    },
  },
  {
    rankName: "Ouro",
    details: {
      backgroundColor: "#C27C34",
      backgroundImage: "/valorant/elo-gold.svg",
      division: {
        1: { price: 21.60, name: "III" },
        2: { price: 21.60, name: "II" },
        3: { price: 21.60, name: "I" },
      },
    },
  },
  {
    rankName: "Platina",
    details: {
      backgroundColor: "#24A094",
      backgroundImage: "/valorant/elo-plat.svg",
      division: {
        1: { price: 27.90, name: "III" },
        2: { price: 27.90, name: "II" },
        3: { price: 27.90, name: "I" },
      },
    },
  },
  {
    rankName: "Diamante",
    details: {
      backgroundColor: "#6C61CC",
      backgroundImage: "/valorant/elo-diamond.svg",
      division: {
        1: { price: 50.40, name: "III" },
        2: { price: 50.40, name: "II" },
        3: { price: 50.40, name: "I" },
      },
    },
  },
  {
    rankName: "Ascendente",
    details: {
      backgroundColor: "#24A763",
      backgroundImage: "/valorant/elo-ascendant.svg",
      division: {
        1: { price: 72.00, name: "III" },
        2: { price: 72.00, name: "II" },
        3: { price: 72.00, name: "I" },
      },
    },
  },
  {
    rankName: "Immortal",
    details: {
      backgroundColor: "#AC366F",
      backgroundImage: "/valorant/elo-immortal.svg",
      division: {
        1: { price: 86.40, name: "III" },
        2: { price: 118.80, name: "II" },
        3: { price: 139.50, name: "I" },
      },
    },
  },
  {
    rankName: "Radiante",
    details: {
      backgroundColor: "#C2974E",
      backgroundImage: "/valorant/elo-radiant.svg",
      price: 450.00,
    },
  },
];
