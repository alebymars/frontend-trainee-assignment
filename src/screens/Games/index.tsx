import React from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
}

const Games = (props: Props) => {

    const { pathname, search } = useLocation();

    return (
        <div>
            <h1>
                Games
            </h1>
        </div>
    )
};

export default Games;
