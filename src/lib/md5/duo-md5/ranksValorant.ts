import { RankData } from "@/types/rank-interface";

export const RanksDuo: RankData[] = [
  {
    rankName: "Unranked",
    details: {
      backgroundColor: "#1F1717",
      backgroundImage: "/valorant/elo-unranked.svg",
      price: 157.50,
      matchPrice: 31.50,
    },
  },
  {
    rankName: "Ferro",
    details: {
      backgroundColor: "#584C4B",
      backgroundImage: "/valorant/elo-iron.svg",
      price: 105.00,
      matchPrice: 21.00,
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
      price: 115.50,
      matchPrice: 23.10,
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
      price: 157.50,
      matchPrice: 31.50,
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
      price: 189.00,
      matchPrice: 37.80,
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
      price: 210.00,
      matchPrice: 42.00,
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
      price: 262.50,
      matchPrice: 52.50,
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
      price: 315.00,
      matchPrice: 63.00,
    },
  },
  {
    rankName: "Immortal",
    details: {
      price: 367.50,
      matchPrice: 73.50,
      backgroundColor: "#AC366F",
      backgroundImage: "/valorant/elo-immortal.svg",
    },
  },
  {
    rankName: "Radiante",
    details: {
      price: 420.00,
      matchPrice: 84.00,
      backgroundColor: "#C2974E",
      backgroundImage: "/valorant/elo-radiant.svg",
    },
  },
];
