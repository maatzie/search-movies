import React from 'react';
import {Movies} from '../components/Movies';

class Main extends React.Component {
    
    constructor() {
        super();
        this.state = {
            movies: [],
          }
    }
    componentDidMount() {
        fetch("http://www.omdbapi.com/?s=matrix&apikey=7f8af3af&page=2")
            .then((data) => data.json())
            .then((data) => this.setState({movies: data.Search}))
            .then((data) => console.log(this.state.movies));                
    }
    render() { return(
        <main className="container content">
        {this.state.movies.length ? (
            <Movies data={this.state.movies} />
        ) : (
            <h3>Loading...</h3> 
        )}
        </main>);
    }
}

export {Main}