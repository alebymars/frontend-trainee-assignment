import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../types";
import { cards } from "../../screens/Home/data";
import { Game } from "../../types/game";
import { GameDetails } from "../../components/MyCarousel/types";

const initialState: InitialState = {
  game: {
    title: "",
    screenshots: [],
    id: 0,
    thumbnail: "",
    status: "",
    short_description: "",
    description: "",
    game_url: "",
    genre: "",
    platform: "",
    publisher: "",
    developer: "",
    release_date: "",
    freetogame_profile_url: "",
    minimum_system_requirements: {
      os: "",
      processor: "",
      memory: "",
      graphics: "",
      storage: "",
    },
  },
  games: cards,
};

const rootSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Partial<Game[]>>) => {
      const newGames = { ...state.games, ...action.payload } as Game[];
      if (!state.games) {
        return;
      }
      state.games = newGames;
    },
    setGame: (state, action: PayloadAction<Partial<GameDetails>>) => {
      const newGame = { ...state.game, ...action.payload } as GameDetails;
      if (!state.game) {
        return;
      }
      state.game = newGame;
    },
    resetStore: (state) => {
      const resetState = {
        ...initialState,
      };
      return { ...resetState };
    },
  },
});

export const { resetStore, setGames, setGame } = rootSlice.actions;

export const rootReducer = rootSlice.reducer;
