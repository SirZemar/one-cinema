import { useState, useEffect } from "react";
import API, { Movie, Cast, Crew } from '../API';
// Helpers
import { isPersistedState } from "../helpers";
// type 
export type MovieState = Movie & { actors: Cast[], directors: Crew[] };

export const useMovieFetch = (movieId: string) => {
    const [state, setState] = useState<MovieState>({} as MovieState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {

        // Fetch from session
        const sessionState = isPersistedState(`movie${movieId}`);
        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        };

        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                // Get directors only
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })

                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };

        fetchMovie();
    }, [movieId]);

    // Write to sessionStorage
    useEffect(() => {
        sessionStorage.setItem('movie' + movieId.toString(), JSON.stringify(state));
    }, [movieId, state])

    return { state, loading, error };
}