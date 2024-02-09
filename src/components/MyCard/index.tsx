import { Link, useNavigate } from "react-router-dom";
import { Game } from "../../types/game";
import "./card.css"

interface Props {
    key?: string;
    id: number;
    thumbnail: string;
    description: Description
    title: string;
    platform: string;
    gameUrl: string;
}

interface Description extends Pick<Game, "publisher" | "genre"> {
    formattedDate: string;
}

const MyCard = ({ thumbnail, description, title, id, platform, gameUrl }: Props) => {
    const navigate = useNavigate();

    const shortGameName = gameUrl.split("/").slice(-1);

    const handleClick = () => navigate(`/games/${shortGameName}`, { replace: false, state: { id } })

    return (
        <div className='card' onClick={handleClick}>
            <img className="cardImage" alt={title} src={thumbnail} />
            <div className="cardDescriptionBlock">
                <p className="cardTitle">{title}</p>
                <p className="cardPublisher"><span style={{ fontWeight: 600, fontSize: 15 }}>Издатель: </span> {description.publisher}</p>
                <p className="cardGenre"><span style={{ fontWeight: 600, fontSize: 15 }}>Жанр: </span> {description.genre}</p>
                <p className="cardFormattedDate"><span style={{ fontWeight: 600, fontSize: 15 }}>Дата: </span> {description.formattedDate}</p>
            </div>
            <div className="cardPlatformBg">
                <p className="cardPlatform">{platform}</p>
            </div>
        </div>
    )
};

export default MyCard;