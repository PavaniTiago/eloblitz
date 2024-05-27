import { StaticImageData } from "next/image";

export interface DivisionDetails {
  price: number;
  name: string;
}

export interface RankDetails {
  backgroundColor: string;
  backgroundImage: string | StaticImageData;
  price?: number;
  matchPrice?: number;
  division?: {
    [key: number]: DivisionDetails;
  };
}

export interface RankData {
  rankName: string;
  details: RankDetails;
}
