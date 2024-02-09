import { GameDetails } from "../components/MyCarousel/types";
import { Game } from "../types/game";

export interface InitialState {
  game: GameDetails;
  games: Game[];
}
