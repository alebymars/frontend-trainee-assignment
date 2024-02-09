import { Game } from "../../types/game";

export const filterSortBy = async (
  allGames: Game[],
  sortBy: string
): Promise<Game[]> => {
  try {
    let sortedGames = [...allGames]; // создаем копию массива, чтобы не мутировать исходный массив

    switch (sortBy) {
      case "Relevance":
        // сортировка по релевантности (здесь вам нужно определить, что именно означает "релевантность" для ваших игр)
        console.log("Select Relevance!");
        break;
      case "Popularity":
        // сортировка по популярности (предполагается, что у вас есть поле `popularity` в объекте игры)
        // sortedGames.sort((a, b) => b.popularity - a.popularity);
        console.log("Select Popularity!");
        break;
      case "Release Date":
        // сортировка по дате выпуска (предполагается, что у вас есть поле `releaseDate` в объекте игры)
        sortedGames.sort((a, b) => {
          let dateA = a.release_date.split(".").reverse().join("-");
          let dateB = b.release_date.split(".").reverse().join("-");

          return new Date(dateA).getTime() - new Date(dateB).getTime();
        });
        console.log("Select Release Date!");
        break;
      case "Alphabetical":
        // алфавитная сортировка по названию игры
        sortedGames.sort((a, b) => a.title.localeCompare(b.title));
        console.log("Select Alphabetical!");
        break;
      default:
        // если sortBy не соответствует ни одному из вышеуказанных значений, возвращаем игры в исходном порядке
        console.log("Select Default!");
        break;
    }

    return sortedGames;
  } catch (error) {
    console.log("Error with filterSortBy: ", error);
    return [];
  }
};
