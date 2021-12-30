import { useEffect, useState } from "react";
// API
import API, { Person } from '../API';

export type PersonState = Person;

export const usePersonFetch = (actorId: number) => {
    const [state, setState] = useState<PersonState>({} as PersonState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                setLoading(true);
                setError(false);
                const person = await API.fetchPerson(actorId);
                setState(person);

                setLoading(false);
            } catch (e) {
                setError(true);
                console.log(e);
            }
        }
        fetchPerson()
    }, [actorId])

    return { state, loading, error }
}