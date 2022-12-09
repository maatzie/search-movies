import React from 'react';
import {Movies} from '../components/Movies';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: true,
        }
        this.searchMovies = this.searchMovies.bind(this);
    }
    componentDidMount() {  
        this.searchMovies('matrix', '');              
    }

    searchMovies(title, type) {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}&page=1&type=${type}`)
            .then((data) => data.json())
            .then((data) => this.setState({movies: data.Search, loading: false}))
            .catch((error) => {
                console.error(error);
                this.setState({loading: false});
            });
    }

    render() { 
        const {movies, loading} = this.state;
        return <main className="container content">
            <Search searchCb={this.searchMovies} />
            {
                loading ? (
                    <Preloader/>
                ) : (<Movies movies={movies} />)
            }
        </main>;
    }
}

export {Main}