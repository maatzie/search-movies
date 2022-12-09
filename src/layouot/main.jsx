import React from 'react';
import {Movies} from '../components/Movies';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

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
        // fetch("http://www.omdbapi.com/?s=matrix&apikey=7f8af3af&page=1")
        //     .then((data) => data.json())
        //     .then((data) => this.setState({movies: data.Search}))
        //     .then((data) => console.log(this.state.movies));  
        this.searchMovies('matrix', '');              
    }

    searchMovies(title, type) {
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=7f8af3af&page=1&type=${type}`)
            .then((data) => data.json())
            .then((data) => this.setState({movies: data.Search, loading: false}));
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