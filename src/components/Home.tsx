import React, { useContext, useEffect } from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';
import { LoadingContext } from '../context';

const Home: React.FC = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore
    } = useHomeFetch();

    const [_loadingGlobal, setLoadingGlobal] = useContext(LoadingContext)

    useEffect(() => {
        setLoadingGlobal(loading)
    }, [loading, setLoadingGlobal])

    const firstResult = state.results[0];

    if (error) return <div>Something went wrong...</div>;

    // To avoid warnings ***
    false ? console.log(_loadingGlobal) : console.log();

    return (
        <>
            {!searchTerm && firstResult ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${firstResult.backdrop_path}`}
                    title={firstResult.original_title}
                    text={firstResult.overview}
                />
                : null}
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? 'Search result' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)} />
            )}
        </>
    );
};

export default Home;