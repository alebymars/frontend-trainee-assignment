import { Game } from "../../types/games";
import "./card.css"

interface Props {
    key?: string;
    id?: number;
    thumbnail: string;
    description: Description
    title: string;
}

interface Description extends Pick<Game, "publisher" | "genre"> {
    formattedDate: string;
}

const MyCard = ({ thumbnail, description, title, id }: Props) => {

    return (
        <div className='card' onClick={() => {
            console.log(id);
        }}>
            <img alt={title} src={thumbnail} width={200} style={{ objectFit: "cover" }} />
            <div className="cardDescriptionBlock">
                <p className="cardTitle">{title}</p>
                <p className="cardPublisher">{description.publisher}</p>
                <p className="cardGenre">{description.genre}</p>
                <p className="cardFormattedDate">{description.formattedDate}</p>
            </div>
        </div>
    )
};

export default MyCard;