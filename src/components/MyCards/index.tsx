import { Game } from "../../types/games";
import MyCard from "../MyCard";

interface Props {
    allGames: Game[];
}


export const MyCards = ({ allGames }: Props) => {
    return allGames.map(({ title, release_date, publisher, genre, thumbnail, id }) => {
        const date = new Date(release_date);
        const formattedDate = date.toLocaleDateString('ru-RU');
        return (
            <MyCard
                key={id.toString()}
                id={id}
                title={title}
                thumbnail={thumbnail}
                description={{ formattedDate, publisher, genre }}
            />
        )
    })
};
