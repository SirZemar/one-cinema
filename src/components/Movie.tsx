import React from "react";
import { useParams } from "react-router";
// Config
import { IMAGE_BASE_URL, PROFILE_SIZE } from "../config";
// Components
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./ActorCard";
// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";

// Image
import NoImage from '../images/no_image.jpg';

const Movie: React.FC = () => {
    const { movieId }: any = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} movieId={movieId} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${PROFILE_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                        clickable
                        hoverable
                        actorId={actor.id}
                        movieTitle={movie.original_title}
                        movieId={movieId}
                    />
                ))}
            </Grid>
        </>
    )
}

export default Movie;