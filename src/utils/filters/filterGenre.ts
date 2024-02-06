import { Game } from "../../types/games";

export const filterGenre = async (
  allGames: Game[],
  genre: string
): Promise<Game[]> => {
  try {
    if (genre === "All") {
      return allGames;
    }
    const filtered = await allGames.filter((games) => games.genre === genre);

    return filtered;
  } catch (error) {
    console.log("Error with filterGenre: ", error);
    return [];
  }
};
