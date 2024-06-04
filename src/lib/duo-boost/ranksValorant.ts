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
        1: { price: 19.50, name: "III" },
        2: { price: 19.50, name: "II" },
        3: { price: 19.50, name: "I" },
      },
    },
  },
  {
    rankName: "Bronze",
    details: {
      backgroundColor: "#794A36",
      backgroundImage: "/valorant/elo-bronze.svg",
      division: {
        1: { price: 19.50, name: "III" },
        2: { price: 19.50, name: "II" },
        3: { price: 19.50, name: "I" },
      },
    },
  },
  {
    rankName: "Prata",
    details: {
      backgroundColor: "#556B80",
      backgroundImage: "/valorant/elo-silver.svg",
      division: {
        1: { price: 30.00, name: "III" },
        2: { price: 30.00, name: "II" },
        3: { price: 30.00, name: "I" },
      },
    },
  },
  {
    rankName: "Ouro",
    details: {
      backgroundColor: "#C27C34",
      backgroundImage: "/valorant/elo-gold.svg",
      division: {
        1: { price: 51.50, name: "III" },
        2: { price: 51.50, name: "II" },
        3: { price: 51.50, name: "I" },
      },
    },
  },
  {
    rankName: "Platina",
    details: {
      backgroundColor: "#24A094",
      backgroundImage: "/valorant/elo-plat.svg",
      division: {
        1: { price: 51.43, name: "III" },
        2: { price: 66.43, name: "II" },
        3: { price: 66.43, name: "I" },
      },
    },
  },
  {
    rankName: "Diamante",
    details: {
      backgroundColor: "#6C61CC",
      backgroundImage: "/valorant/elo-diamond.svg",
      division: {
        1: { price: 66.50, name: "III" },
        2: { price: 66.50, name: "II" },
        3: { price: 66.50, name: "I" },
      },
    },
  },
  {
    rankName: "Ascendente",
    details: {
      backgroundColor: "#24A763",
      backgroundImage: "/valorant/elo-ascendant.svg",
      division: {
        1: { price: 170.00, name: "III" },
        2: { price: 170.00, name: "II" },
        3: { price: 170.00, name: "I" },
      },
    },
  },
  {
    rankName: "Immortal",
    details: {
      backgroundColor: "#AC366F",
      backgroundImage: "/valorant/elo-immortal.svg",
      division: {
        1: { price: 332.00, name: "III" },
        2: { price: 283.00, name: "II" },
        3: { price: 206.00, name: "I" },
      },
    },
  },
  {
    rankName: "Radiante",
    details: {
      backgroundColor: "#C2974E",
      backgroundImage: "/valorant/elo-radiant.svg",
      price: 1072.00,
    },
  },
];