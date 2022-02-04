import React from "react";
import { useParams } from "react-router-dom";
// Hook
import { usePersonFetch } from "../hooks/usePersonFetch";
// Config 
import { IMAGE_BASE_URL, PROFILE_SIZE, POSTER_SIZE } from "../config";
// Components
import BreadCrumb from "./BreadCrumb";
import Spinner from "./Spinner";
import PersonInfo from "./PersonInfo";
import Grid from "./Grid";
import Thumb from "./Thumb";
// Images 
import NoImage from "../images/no_image.jpg"

const Person: React.FC = () => {
    const { actorId, movieTitle, movieId }: any = useParams();
    const { state: person, loading, error } = usePersonFetch(actorId ? actorId : '');
    // console.log(person)

    const imageUrl = `${IMAGE_BASE_URL}${PROFILE_SIZE}${person.profile_path}`;

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>

    return (
        <>
            <BreadCrumb movieTitle={movieTitle} movieId={movieId} actor={person.name} actorId={actorId} />
            <PersonInfo person={person} imageUrl={imageUrl} />
            <Grid header='Movies'>
                {person.credits && person.credits.map(movie => (
                    <Thumb
                        image={movie.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage}
                        clickable
                        key={movie.id}
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            {/* {loading && <Spinner />} */}
        </>
    )
};

export default Person;