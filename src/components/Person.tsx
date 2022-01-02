import React from "react";
import { useParams } from "react-router-dom";
// Hook
import { usePersonFetch } from "../hooks/usePersonFetch";
// Config 
import { IMAGE_BASE_URL, PROFILE_SIZE } from "../config";
// Components
import BreadCrumb from "./BreadCrumb";
import Spinner from "./Spinner";
import ActorCard from "./ActorCard";

const Person: React.FC = () => {
    const { actorId, movieTitle, movieId }: any = useParams();
    const { state: person, loading, error }: any = usePersonFetch(actorId);
    console.log(person);
    console.log(error);

    if (person.credits) {
        person.credits.forEach((a: any) => {
            console.log(a)
        })

    }
    const imageUrl = `${IMAGE_BASE_URL}${PROFILE_SIZE}${person.profile_path}`;

    if (loading) return <Spinner />
    return (
        <>
            <BreadCrumb movieTitle={movieTitle} movieId={movieId} actor={person.name} actorId={actorId} />
            {<ActorCard name={person.name} character={null} imageUrl={imageUrl} actorId={actorId} movieTitle={movieTitle} movieId={movieId} clickable={false} hoverable={false} />}
            <div style={{ maxWidth: 'var(--maxWidth)', margin: '0 auto' }}>
                <h1 style={{ color: 'black' }}>Actor</h1>
                <h1 style={{ color: 'black' }}>{actorId}</h1>
                <h1 style={{ color: 'black' }}>{person.name}</h1>
                <h2 style={{ color: 'black', display: 'inline' }}>{person.birthday} </h2>
                <h2 style={{ color: 'black', display: 'inline' }}>- {person.deathday ? person.deathday : 'today'}</h2>
                <p style={{ color: 'black' }}>{person.biography}</p>
                <img src={`${IMAGE_BASE_URL}${PROFILE_SIZE}${person.profile_path}`} alt={person.name} />
            </div>
        </>
    )
};

export default Person;