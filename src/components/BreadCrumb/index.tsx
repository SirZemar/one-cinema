import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content } from "./BreadCrumb.styles";
// Types
type Props = {
    movieTitle: string;
    movieId: number;
    actor?: string;
    actorId?: number;
}

const BreadCrumb: React.FC<Props> = ({ movieTitle, movieId, actor, actorId }) => (
    <Wrapper movieTitle={movieTitle} actor={actor}>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <Link to={`/${movieId}`}>
                <span>{movieTitle}</span>
            </Link>
            <Link to={`/actor/${movieTitle}/${movieId}/${actorId}`}>
                <span className={actor ? actor : 'empty'}>{actor ? actor : null}</span>
            </Link>
        </Content>
    </Wrapper>
);

export default BreadCrumb;