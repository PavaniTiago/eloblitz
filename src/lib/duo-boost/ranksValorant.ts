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
        1: { price: 16.20, name: "III" },
        2: { price: 16.20, name: "II" },
        3: { price: 16.20, name: "I" },
      },
    },
  },
  {
    rankName: "Bronze",
    details: {
      backgroundColor: "#794A36",
      backgroundImage: "/valorant/elo-bronze.svg",
      division: {
        1: { price: 16.20, name: "III" },
        2: { price: 16.20, name: "II" },
        3: { price: 16.20, name: "I" },
      },
    },
  },
  {
    rankName: "Prata",
    details: {
      backgroundColor: "#556B80",
      backgroundImage: "/valorant/elo-silver.svg",
      division: {
        1: { price: 26.10, name: "III" },
        2: { price: 26.10, name: "II" },
        3: { price: 26.10, name: "I" },
      },
    },
  },
  {
    rankName: "Ouro",
    details: {
      backgroundColor: "#C27C34",
      backgroundImage: "/valorant/elo-gold.svg",
      division: {
        1: { price: 48.60, name: "III" },
        2: { price: 48.60, name: "II" },
        3: { price: 48.60, name: "I" },
      },
    },
  },
  {
    rankName: "Platina",
    details: {
      backgroundColor: "#24A094",
      backgroundImage: "/valorant/elo-plat.svg",
      division: {
        1: { price: 76.50, name: "III" },
        2: { price: 76.50, name: "II" },
        3: { price: 76.50, name: "I" },
      },
    },
  },
  {
    rankName: "Diamante",
    details: {
      backgroundColor: "#6C61CC",
      backgroundImage: "/valorant/elo-diamond.svg",
      division: {
        1: { price: 126.00, name: "III" },
        2: { price: 126.00, name: "II" },
        3: { price: 126.00, name: "I" },
      },
    },
  },
  {
    rankName: "Ascendente",
    details: {
      backgroundColor: "#24A763",
      backgroundImage: "/valorant/elo-ascendant.svg",
      division: {
        1: { price: 171.00, name: "III" },
        2: { price: 171.00, name: "II" },
        3: { price: 171.00, name: "I" },
      },
    },
  },
  {
    rankName: "Immortal",
    details: {
      backgroundColor: "#AC366F",
      backgroundImage: "/valorant/elo-immortal.svg",
      division: {
        1: { price: 342.00, name: "III" },
        2: { price: 396.00, name: "II" },
        3: { price: 396.00, name: "I" },
      },
    },
  },
  {
    rankName: "Radiante",
    details: {
      backgroundColor: "#C2974E",
      backgroundImage: "/valorant/elo-radiant.svg",
      price: 1035.00,
    },
  },
];