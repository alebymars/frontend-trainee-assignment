import { HeadersDG } from "../types/fetch";

export const getDetailsGame = async (id: number) => {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const options: { method: string; headers: HeadersDG } = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "KEY",
      "X-RapidAPI-Host": "HOST",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  }
};
