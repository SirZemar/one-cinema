import React from "react";
// Components
import Thumb from "../Thumb";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Image
import NoImage from '../../images/no_image.jpg';
// Syles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
// Types 
import { MovieState } from "../../hooks/useMovieFetch";

type Props = {
    movie: MovieState;
}
const MovieInfo: React.FC<Props> = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                }
                clickable={false}
            />
            <Text>
                <h1>{movie.title}<span> ({movie.release_date.slice(0, 4)})</span></h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className='rating-directors'>
                    <div>
                        <h3>RATING</h3>
                        <div className='score'>{movie.vote_average.toFixed(1)}</div>
                    </div>
                    <div className='director'>
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                </div>

            </Text>
        </Content>

    </Wrapper>
);

export default MovieInfo;