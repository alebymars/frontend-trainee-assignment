export const getAllGames = async () => {
  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical";
  const options = {
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
