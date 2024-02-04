import React, { useEffect, useState } from 'react';
import { getAllGames } from '../../utils/getAllGames';
import { Game } from '../../types/games';
import MyCard from '../../components/MyCard';
import { cards } from './data';

interface Props {
}

const Home = (props: Props) => {

    const [allGames, setAllGames] = useState<Game[]>(cards);

    useEffect(() => {
        getAllGames()
            .then((games: Game[]) => setAllGames(games))

        console.log(allGames);
    }, []);

    return (
        <div style={{ gap: 20, justifyContent: "center", alignContent: "center", flexWrap: "wrap", display: "flex", paddingTop: 20, paddingBottom: 20 }}>
            {allGames ? allGames.map(({ title, release_date, publisher, genre, thumbnail, id }) => {
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
            }) : <p>Нет игр :/</p>}
        </div>
    )
};

export default Home;
