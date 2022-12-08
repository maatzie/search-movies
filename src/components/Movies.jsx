import React from 'react';
import {Movie} from './Movie';

function Movies(props) {
    return <div className="movies">
            {props.data.map((movie) => <Movie title={movie.Title} 
                                        key={movie.imdbID}
                                        year={movie.Year} 
                                        type={movie.Type}
                                        poster={movie.Poster}/> )}

    </div>;
}

export { Movies };