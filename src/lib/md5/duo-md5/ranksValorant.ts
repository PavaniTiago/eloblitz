import { RankData } from "@/types/rank-interface";

export const RanksDuo: RankData[] = [
  {
    rankName: "Unranked",
    details: {
      backgroundColor: "#1F1717",
      backgroundImage: "/valorant/elo-unranked.svg",
      price: 135.00,
      matchPrice: 27.00,
    },
  },
  {
    rankName: "Ferro",
    details: {
      backgroundColor: "#584C4B",
      backgroundImage: "/valorant/elo-iron.svg",
      price: 90.00,
      matchPrice: 18.00,
      division: {
        1: { price: 10, name: "III" },
        2: { price: 10, name: "II" },
        3: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Bronze",
    details: {
      backgroundColor: "#794A36",
      backgroundImage: "/valorant/elo-bronze.svg",
      price: 99.00,
      matchPrice: 19.80,
      division: {
        1: { price: 10, name: "III" },
        2: { price: 10, name: "II" },
        3: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Prata",
    details: {
      backgroundColor: "#556B80",
      backgroundImage: "/valorant/elo-silver.svg",
      price: 135.00,
      matchPrice: 27.00,
      division: {
        1: { price: 10, name: "III" },
        2: { price: 10, name: "II" },
        3: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Ouro",
    details: {
      backgroundColor: "#C27C34",
      backgroundImage: "/valorant/elo-gold.svg",
      price: 162.00,
      matchPrice: 32.40,
      division: {
        1: { price: 10, name: "III" },
        2: { price: 10, name: "II" },
        3: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Platina",
    details: {
      backgroundColor: "#24A094",
      backgroundImage: "/valorant/elo-plat.svg",
      price: 180.00,
      matchPrice: 36.00,
      division: {
        1: { price: 10, name: "III" },
        2: { price: 10, name: "II" },
        3: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Diamante",
    details: {
      backgroundColor: "#6C61CC",
      backgroundImage: "/valorant/elo-diamond.svg",
      price: 225.00,
      matchPrice: 45.00,
      division: {
        1: { price: 10, name: "III" },
        2: { price: 10, name: "II" },
        3: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Ascendente",
    details: {
      backgroundColor: "#24A763",
      backgroundImage: "/valorant/elo-ascendant.svg",
      price: 270.00,
      matchPrice: 54.00,
    },
  },
  {
    rankName: "Immortal",
    details: {
      price: 315.00,
      matchPrice: 63.00,
      backgroundColor: "#AC366F",
      backgroundImage: "/valorant/elo-immortal.svg",
    },
  },
  {
    rankName: "Radiante",
    details: {
      price: 360.00,
      matchPrice: 72.00,
      backgroundColor: "#C2974E",
      backgroundImage: "/valorant/elo-radiant.svg",
    },
  },
];
