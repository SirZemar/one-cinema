import { useEffect, useState } from "react";
// API
import API, { Person, PersonCast } from '../API';
// Helpers
import { isPersistedState } from "../helpers";

export type PersonState = Person & { credits: PersonCast[] };

export const usePersonFetch = (actorId: string) => {
    const [state, setState] = useState<PersonState>({} as PersonState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const sessionState = isPersistedState(`person${actorId}`);
        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return
        }

        const fetchPerson = async () => {
            try {
                setLoading(true);
                setError(false);
                const person = await API.fetchPerson(actorId);
                const credits = await API.fetchPersonCredits(actorId);
                setState({
                    ...person,
                    credits: credits.cast
                });

                setLoading(false);
            } catch (e) {
                setError(true);
                console.log(e);
            }
        }
        fetchPerson()
    }, [actorId]);

    useEffect(() => {
        sessionStorage.setItem('person' + actorId.toString(), JSON.stringify(state));
    }, [actorId, state])

    return { state, loading, error }
}