import React from 'react';
import {Movie} from './Movie';
import {NothingFound} from './NothingFound';

function Movies(props) {
    const {movies = []} = props;
    return <div className="movies">
            {movies.length ? movies.map((movie) => <Movie title={movie.Title} 
                                        key={movie.imdbID}
                                        year={movie.Year} 
                                        type={movie.Type}
                                        poster={movie.Poster}/> )
                                    : <NothingFound/>}

    </div>;
}

export { Movies };