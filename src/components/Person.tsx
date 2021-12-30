import React from "react";
import { useParams } from "react-router-dom";
// Hook
import { usePersonFetch } from "../hooks/usePersonFetch";
// Config 
import { IMAGE_BASE_URL } from "../config";
// Components
import BreadCrumb from "./BreadCrumb";

const Person: React.FC = () => {
    const { actorId, movieTitle, movieId }: any = useParams();
    const { state: person, loading, error }: any = usePersonFetch(actorId);
    console.log(loading, error)
    return (
        <>
            <BreadCrumb movieTitle={movieTitle} movieId={movieId} actor={person.name} actorId={actorId} />
            <div style={{ maxWidth: 'var(--maxWidth)', margin: '0 auto' }}>
                <h1 style={{ color: 'black' }}>Actor</h1>
                <h1 style={{ color: 'black' }}>{actorId}</h1>
                <h1 style={{ color: 'black' }}>{person.name}</h1>
                <h2 style={{ color: 'black', display: 'inline' }}>{person.birthday} </h2>
                <h2 style={{ color: 'black', display: 'inline' }}>- {person.deathday ? person.deathday : 'today'}</h2>
                <p style={{ color: 'black' }}>{person.biography}</p>
                <img src={`${IMAGE_BASE_URL}w200${person.profile_path}`} alt={person.name} />
            </div>
        </>
    )
};

export default Person;