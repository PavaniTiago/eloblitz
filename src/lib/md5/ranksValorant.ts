import { RankData } from "@/types/rank-interface";

export const Ranks: RankData[] = [
  {
    rankName: "Unranked",
    details: {
      backgroundColor: "#1F1717",
      backgroundImage: "/valorant/elo-unranked.svg",
      price: 63.00,
      matchPrice: 12.60,
    },
  },
  {
    rankName: "Ferro",
    details: {
      backgroundColor: "#584C4B",
      backgroundImage: "/valorant/elo-iron.svg",
      price: 43.20,
      matchPrice: 8.64,
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
      price: 53.00,
      matchPrice: 10.60,
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
      price: 63.00,
      matchPrice: 12.60,
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
      price: 79.20,
      matchPrice: 15.84,
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
      price: 85.50,
      matchPrice: 17.10,
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
      price: 108.00,
      matchPrice: 21.60,
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
      price: 121.50,
      matchPrice: 24.30,
      division: {
        1: { price: 10, name: "III" },
        2: { price: 10, name: "II" },
        3: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Immortal",
    details: {
      backgroundColor: "#AC366F",
      backgroundImage: "/valorant/elo-immortal.svg",
      price: 130.50,
      matchPrice: 26.10,
    },
  },
  {
    rankName: "Radiante",
    details: {
      backgroundColor: "#C2974E",
      backgroundImage: "/valorant/elo-radiant.svg",
      price: 153.00,
      matchPrice: 30.60,
    },
  },
];
