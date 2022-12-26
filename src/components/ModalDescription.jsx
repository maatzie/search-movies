import React from 'react';
import { Movie } from './Movie';
import {Preloader} from "./Preloader"

const API_KEY = process.env.REACT_APP_API_KEY;

class ModalDescription extends React.Component {
    constructor(props) {
        super();
        const {movieId} = props;
        console.log("constructor modal", props);
        this.state = {
            loading: true, //TODO add loading or remove state
            movie: null,
            movieId: movieId, //TODO try movieId,
        }
        this.getMovieDescription = this.getMovieDescription.bind(this);
        this.closeModal = props.closeHandler;
    }

    componentDidMount() {
        this.getMovieDescription(this.state.movieId);
        document.body.style.overflow = 'hidden'
    }

    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    getMovieDescription(id) {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
            .then((data) => data.json())
            .then((data) => this.setState({movie: data, loading: false}))
            .catch((error) => {
                console.error(error);
                this.setState({loading: false});
            });
    }
    render () {
        const displayClass = this.props.show ? "modal-window show-modal" : "modal-window hidden-modal";
        console.log(this.state.movie);

        const movie = this.state.movie;
        return this.state.movie ? <div className={displayClass}>
        <div className="modal-window-content">
            <a className="waves-effect waves-light btn-flat close-btn" onClick={this.closeModal}>close</a>
            <h4>{movie.Title}</h4>
            <h6>{movie.Year} &bull; {movie.Runtime} &bull; {movie.imdbRating}</h6>
            <div className="movie-parameters">
                <img src={movie.Poster}/>
                <div>
                    <p><b>Actors:</b> {movie.Actors}</p>
                    <p><b>Director:</b> {movie.Director}</p>
                    <p><b>Awards:</b> {movie.Awards}</p>
                </div>
            </div>
            <p>{movie.Plot}</p>
        </div>
        </div> :  <div className={displayClass} onClick={this.closeModal}>
            <div className="modal-window-content">
                <Preloader/>
            </div>
        </div>
        ;
    }
}

export {ModalDescription};