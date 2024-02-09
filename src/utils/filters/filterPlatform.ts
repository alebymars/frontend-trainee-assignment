import { Game } from "../../types/game";

export const filterPlatform = async (
  allGames: Game[],
  platform: string
): Promise<Game[]> => {
  try {
    if (platform === "all") {
      return allGames;
    }

    console.log("Work Filter!");
    console.log("platform: ", platform);

    const filtered = await allGames.filter(
      (games) => games.platform === platform
    );

    return filtered;
  } catch (error) {
    console.log("Error with filterPlatform: ", error);
    return [];
  }
};
