import React from 'react';

function Movie(props) {
    const {title, year, type, poster} = props;
    return (
        <div className="movie card">
            <div className="card-image"> 
                {
                    poster === "N/A" ? <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`}/>: 
                    <img className="activator" src={poster}/>
                }
            </div>
            <div className="card-content">
                <span className="card-title activator">{title}</span>
                <span className="card-year">{year}</span>
                <span className="card-type right">{type}</span>
            </div>
        </div>);
}

export { Movie };