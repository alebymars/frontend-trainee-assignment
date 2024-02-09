import { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MyCarousel from '../../components/MyCarousel';
import { getDetailsGame } from '../../utils/getDetailsGame';
import { GameDetails } from '../../components/MyCarousel/types';
import "./Games.css";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setGame } from '../../store/slices/rootSlice';
import { Button } from 'antd';

interface Props {
}

export const Games = (props: Props) => {

    const dispatch = useDispatch();
    const game = useSelector((state: RootState) => state.root.game);
    const navigation = useNavigate();

    const { pathname, search, state } = useLocation();

    const oldDate = new Date(game.release_date);
    const formattedDate = oldDate.toLocaleDateString('ru-RU');

    const onClickGoToGame = () => {
        window.open(game.game_url, '_blank');
    }

    // console.log('pathName: ', pathname);

    useLayoutEffect(() => {
        getDetailsGame(state.id)
            .then((game: GameDetails) => {
                console.log('game: ', game);
                // dispatch(setGame({ ...game }));
                dispatch(setGame({ ...game, screenshots: [{ id: game.screenshots[0].id - 1, image: game.thumbnail }, ...game.screenshots] }));
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }, []);

    // console.log('screenshots: ', game.screenshots);

    return (
        <>
            <div className="gamesMain">
                <div className='gamesTwoColumn'>
                    <div>
                        {game ? <MyCarousel images={game.screenshots} /> : null}
                    </div>
                    <div className="gamesCard">
                        <p className="gamesTitle">
                            {game?.title}
                        </p>
                        <p className="gamesDescription">Minimum System Requirements</p>
                        <p>OS: {game?.minimum_system_requirements.os}</p>
                        <p>Processor: {game?.minimum_system_requirements.processor}</p>
                        <p>Memory: {game?.minimum_system_requirements.memory}</p>
                        <p>Graphics: {game?.minimum_system_requirements.graphics}</p>
                        <p>Storage: {game?.minimum_system_requirements.storage}</p>
                    </div>
                </div>

                <div className="gamesCard">
                    <p className="gamesDescription">About {game.title}</p>
                    <p>{game.description}</p>
                </div>

                <div className="gamesCard">
                    <p className="gamesDescription">You can go to the game using the link below</p>
                    <div className="gamesButton">
                        <div>
                            {game.status === "Live" ? <div className="circleLive" /> : <div className="circleNotLive" />}
                        </div>
                        <Button
                            className="buttonGoToGame"
                            type="text"
                            onClick={onClickGoToGame}
                        >
                            Go to the game
                        </Button>
                    </div>
                </div>


                <div className="gamesAddInfoBlock">
                    <p className="gamesDescription">Additional Information</p>
                    <div className="gamesAddInfo">
                        <div className="gamesColumnsCard">
                            <p className="gamesCCTitle">Title</p>
                            <p className="gamesCCDesc">{game.title}</p>
                        </div>
                        <div className="gamesColumnsCard">
                            <p className="gamesCCTitle">Developer</p>
                            <p className="gamesCCDesc">{game.developer}</p>
                        </div>
                        <div className="gamesColumnsCard">
                            <p className="gamesCCTitle">Publisher</p>
                            <p className="gamesCCDesc">{game.publisher}</p>
                        </div>
                        <div className="gamesColumnsCard">
                            <p className="gamesCCTitle">Release Date</p>
                            <p className="gamesCCDesc">{formattedDate}</p>
                        </div>
                        <div className="gamesColumnsCard">
                            <p className="gamesCCTitle">Genre</p>
                            <p className="gamesCCDesc">{game.genre}</p>
                        </div>
                        <div className="gamesColumnsCard">
                            <p className="gamesCCTitle">Platform</p>
                            <p className="gamesCCDesc">{game.platform}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
