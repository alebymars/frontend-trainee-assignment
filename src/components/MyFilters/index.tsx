import { GoSync } from "react-icons/go";
import { MenuProps } from "antd";
import MyDropdown from '../MyDropdown';
import MyButton from "../MyButton";
import { Platform, GenreTags, SortBy } from '../../screens/Home/filters';
import "../../screens/Home/home.css"

interface Props {
    platform: string;
    onClickPlatform: MenuProps['onClick'];
    genre: string;
    onClickGenre: MenuProps['onClick'];
    sortBy: string;
    onClickSortBy: MenuProps['onClick'];
    onClickReverse: () => void;
    loading: boolean;
}

const MyFilters = ({ platform, onClickPlatform, genre, onClickGenre, sortBy, onClickSortBy, onClickReverse, loading }: Props) => {

    return (
        <div className='filterMain'>
            <MyDropdown
                title={"Platform"}
                description={platform}
                items={Platform}
                onClick={onClickPlatform}
            />
            <MyDropdown
                title={"Genre"}
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
            <MyButton
                text={"Reverse"}
                icon={<GoSync style={{ rotate: loading ? "180deg" : "0deg", transition: "all 0.5s" }} />}
                loading={false}
                onClick={onClickReverse}
            />
        </div>
    )
};

export default MyFilters;
