import React from 'react';
import {Movies} from '../components/Movies';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

class Main extends React.Component {
    
    constructor() {
        super();
        this.state = {
            movies: [],
        }
        this.searchMovies = this.searchMovies.bind(this);
    }
    componentDidMount() {
        // fetch("http://www.omdbapi.com/?s=matrix&apikey=7f8af3af&page=1")
        //     .then((data) => data.json())
        //     .then((data) => this.setState({movies: data.Search}))
        //     .then((data) => console.log(this.state.movies));  
        this.searchMovies('matrix');              
    }

    searchMovies(title) {
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=7f8af3af&page=1`)
            .then((data) => data.json())
            .then((data) => this.setState({movies: data.Search}));
    }

    render() { return <main className="container content">
        <Search searchCb={this.searchMovies} />
        {
            this.state.movies.length ? (
                <Movies data={this.state.movies} />
            ) : (<Preloader/>)
        }
        </main>;
    }
}

export {Main}