import { RankData } from "@/types/rank-interface";

export const Ranks: RankData[] = [
  {
    rankName: "Unranked",
    details: {
      backgroundColor: "#1F1717",
      backgroundImage: "/valorant/elo-unranked.svg",
      price: 73.50,
      matchPrice: 14.70,
    },
  },
  {
    rankName: "Ferro",
    details: {
      backgroundColor: "#584C4B",
      backgroundImage: "/valorant/elo-iron.svg",
      price: 50.00,
      matchPrice: 10.00,
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
      price: 56.25,
      matchPrice: 11.25,
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
      price: 73.50,
      matchPrice: 14.70,
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
      price: 92.50,
      matchPrice: 18.50,
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
      price: 100.00,
      matchPrice: 20.00,
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
      price: 125.00,
      matchPrice: 25.00,
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
      price: 140.00,
      matchPrice: 28.00,
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
      price: 150.50,
      matchPrice: 30.50,
    },
  },
  {
    rankName: "Radiante",
    details: {
      backgroundColor: "#C2974E",
      backgroundImage: "/valorant/elo-radiant.svg",
      price: 183.75,
      matchPrice: 36.75,
    },
  },
];
