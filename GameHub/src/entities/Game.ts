import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type { Publisher } from "./Publisher";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
  slug: string;
  description_raw: string;
  publishers: Publisher[]
}
