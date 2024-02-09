import { useEffect, useState } from 'react';
import { MenuProps, message } from 'antd';
import { EmptyGames } from './EmptyGames';
import { MyCards } from '../../components/MyCards';
import MyFilters from '../../components/MyFilters';
import MySpin from '../../components/MySpin';
// import { getAllGames } from '../../utils/getAllGames';
import { filterGenre } from '../../utils/filters/filterGenre';
import { GenreTags, Platform, SortBy } from './filters';
import { cards } from './data';
import { Game } from '../../types/game';
import "./home.css"
import { filterPlatform } from '../../utils/filters/filterPlatform';
import { filterSortBy } from '../../utils/filters/filterSortBy';


const Home = () => {

    const [allGames, setAllGames] = useState<Game[]>(cards);
    const [filteredGames, setFilteredGames] = useState<Game[]>(cards);
    const [genre, setGenre] = useState(GenreTags[1].label);
    const [platform, setPlatform] = useState(Platform[0].label);
    const [sortBy, setSortBy] = useState(SortBy[0].label);
    const [spinning, setSpinning] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const onClickPlatform: MenuProps['onClick'] = ({ key }) => {
        const PL = Platform.find(data => data.key === key);
        message.info(`Выбрана платформа: ${PL?.label}`);

        setSpinning(true);
        setGenre("All");

        filterPlatform(allGames, key)
            .then((games) => {
                setFilteredGames(games);
            })
            .finally(() => setSpinning(false));

        PL && setPlatform(PL.label);
    };

    const onClickGenre: MenuProps['onClick'] = ({ key }) => {
        const GT = GenreTags.find(data => data.key === key);
        message.info(`Выбран фильтр по жанру/тегу: ${GT?.label}`);

        setSpinning(true);
        setPlatform("All");

        GT && filterGenre(allGames, GT.label)
            .then((games) => {
                setFilteredGames(games);
            })
            .finally(() => setSpinning(false))

        GT && setGenre(GT.label);
    };

    const onClickSortBy: MenuProps['onClick'] = ({ key }) => {
        const SB = SortBy.find(data => data.key === key);
        message.info(`Выбрана сортировка: ${SB?.label}`);

        setSpinning(true);
        // setPlatform("All");

        SB && filterSortBy(filteredGames, SB.label)
            .then((games) => {
                setFilteredGames(games);
            })
            .finally(() => setSpinning(false))

        SB && setSortBy(SB.label);
    };


    useEffect(() => {
        if (allGames) {
            setSpinning(false);
        }
    }, []);


    // useEffect(() => {
    //     // setSpinning(true);

    //     // getAllGames()
    //     //     .then((games: Game[]) => {
    //     //         setAllGames(games);
    //     //         setFilteredGames(games);
    //     //     })

    //     // console.log(allGames);
    // }, []);

    if (allGames.length < 1 || filteredGames.length < 1) {
        return (
            <>
                <MySpin spinning={spinning} fullscreen={true} />
                <EmptyGames
                    platform={platform}
                    genre={genre}
                    sortBy={sortBy}
                    onClickPlatform={onClickPlatform}
                    onClickGenre={onClickGenre}
                    onClickSortBy={onClickSortBy}
                    onClickReverse={() => setFilteredGames([...filteredGames].reverse())}
                    onClickResetButton={() => {
                        setSpinning(true);
                        setPlatform(Platform[0].label);
                        setGenre("All");
                        setSortBy(SortBy[0].label);
                        filterGenre(allGames, "All")
                            .then((games) => {
                                setFilteredGames(games);
                            })
                            .finally(() => setSpinning(false));

                        const element = document.querySelector('.ant-layout-content');
                        if (element) {
                            element.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }
                    }} />
            </>
        )
    }

    return (
        <>
            <MySpin spinning={spinning} fullscreen={true} />

            <MyFilters
                platform={platform}
                onClickPlatform={onClickPlatform}
                genre={genre}
                onClickGenre={onClickGenre}
                sortBy={sortBy}
                onClickSortBy={onClickSortBy}
                onClickReverse={() => {
                    setIsLoading(!isLoading);
                    setFilteredGames([...filteredGames].reverse());
                }}
                loading={isLoading}
            />

            <span className="allGamesText">Всего игр:
                <p className="countGamesText">{allGames.length} (показано {filteredGames.length})</p></span>

            <div style={{ gap: 20, justifyContent: "center", alignContent: "center", flexWrap: "wrap", display: "flex", paddingTop: 20, paddingBottom: 20 }}>
                {filteredGames ? <MyCards allGames={filteredGames} /> : <p>Нет игр :/</p>}
            </div>
        </>
    )
};

export default Home;
