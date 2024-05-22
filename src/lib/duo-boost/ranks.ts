import { RankData } from "@/types/rank-interface";

export const Ranks: RankData[] = [
  {
    rankName: "Unranked",
    details: {
      backgroundColor: "#1F1717",
      backgroundImage: "/elo-unranked.svg",
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Iron",
    details: {
      backgroundColor: "#5B443F",
      backgroundImage: "/elo-iron.svg",
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
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Silver",
    details: {
      backgroundColor: "#556B80",
      backgroundImage: "/elo-silver.svg",
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Gold",
    details: {
      backgroundColor: "#C27C34",
      backgroundImage: "/elo-gold.svg",
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Platinum",
    details: {
      backgroundColor: "#2F8E94",
      backgroundImage: "/elo-plat.svg",
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Emerald",
    details: {
      backgroundColor: "#009F61",
      backgroundImage: "/elo-emerald.svg",
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Diamond",
    details: {
      backgroundColor: "#3356A6",
      backgroundImage: "/elo-diamond.svg",
      division: {
        1: { price: 10, name: "IV" },
        2: { price: 10, name: "III" },
        3: { price: 10, name: "II" },
        4: { price: 10, name: "I" },
      },
    },
  },
  {
    rankName: "Master",
    details: {
      backgroundColor: "#8449CE",
      backgroundImage: "/elo-master.svg",
    },
  },
  {
    rankName: "GrandMaster",
    details: {
      backgroundColor: "#702523",
      backgroundImage: "/elo-grandmaster.svg",
    },
  },
  {
    rankName: "Challenger",
    details: {
      backgroundColor: "#053477",
      backgroundImage: "/elo-challenger.svg",
    },
  },
];
