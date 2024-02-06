import { Button, MenuProps } from "antd";
import MyFilters from "../../components/MyFilters";
import MyResult from "../../components/MyResult";

interface Props {
    platform: string;
    onClickPlatform: MenuProps['onClick'];
    genre: string;
    onClickGenre: MenuProps['onClick'];
    sortBy: string;
    onClickSortBy: MenuProps['onClick'];
    onClickResetButton: () => void;
    onClickReverse: () => void;
}

export const EmptyGames = ({ platform, onClickPlatform, genre, onClickGenre, sortBy, onClickSortBy, onClickResetButton, onClickReverse }: Props) => {
    return (
        <>
            <MyFilters
                platform={platform}
                onClickPlatform={onClickPlatform}
                genre={genre}
                onClickGenre={onClickGenre}
                sortBy={sortBy}
                onClickSortBy={onClickSortBy}
                onClickReverse={onClickReverse}
            />
            <MyResult
                status={404}
                title={'Oops...'}
                subTitle={`Игр по данному запросу нет, обновите фильтры`}
                extra={
                    <Button
                        className="buttonResetFilters"
                        type="link"
                        title='Reload Filters'
                        onClick={onClickResetButton}
                    >
                        Сбросить фильтры?
                    </Button>
                }
            />
        </>
    )
}