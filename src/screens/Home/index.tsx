import React, { useEffect, useState } from 'react';
import { getAllGames } from '../../utils/getAllGames';
import { Game } from '../../types/games';
import { cards } from './data';
import { MyCards } from '../../components/MyCards';
import "./home.css"
import { MenuProps, message } from 'antd';
import MyDropdown from '../../components/MyDropdown';
import { GenreTags, Platform, SortBy } from './filters';

interface Props {
}

const Home = (props: Props) => {

    const [allGames, setAllGames] = useState<Game[]>(cards);
    const [genre, setGenre] = useState(GenreTags[1].label);
    const [platform, setPlatform] = useState(Platform[0].label);
    const [sortBy, setSortBy] = useState(SortBy[0].label);

    const onClickPlatform: MenuProps['onClick'] = ({ key }) => {
        message.info(`Click on item ${key}`);
        const PL = Platform.find(data => data.key === key)
        PL && setPlatform(PL.label);

    };

    const onClickGenre: MenuProps['onClick'] = ({ key }) => {
        message.info(`Click on item ${key}`);
        const GT = GenreTags.find(data => data.key === key)
        GT && setGenre(GT.label);
    };

    const onClickSortBy: MenuProps['onClick'] = ({ key }) => {
        message.info(`Click on item ${key}`);
        const SB = SortBy.find(data => data.key === key)
        SB && setSortBy(SB.label);
    };

    useEffect(() => {
        console.log("genre: ", genre);
        console.log("platform: ", platform);
        console.log("sortBy: ", sortBy);
    }, [genre, platform]);

    useEffect(() => {
        // getAllGames()
        //     .then((games: Game[]) => setAllGames(games))

        console.log(allGames);
    }, []);

    if (allGames.length < 1) {
        return <p>Нет игр :/</p>
    }

    return (
        <>
            <div className='filterMain'>
                <MyDropdown
                    title={"Platform"}
                    description={platform}
                    items={Platform}
                    onClick={onClickPlatform}
                />
                <MyDropdown
                    title={"Genre/Tag"}
                    description={genre}
                    items={GenreTags}
                    onClick={onClickGenre}
                />
                <MyDropdown
                    title={"Sort By"}
                    description={sortBy}
                    items={SortBy}
                    onClick={onClickSortBy}
                />
            </div>

            <div style={{ gap: 20, justifyContent: "center", alignContent: "center", flexWrap: "wrap", display: "flex", paddingTop: 20, paddingBottom: 20 }}>
                {allGames ? <MyCards allGames={allGames} /> : <p>Нет игр :/</p>}
            </div>
        </>
    )
};

export default Home;
