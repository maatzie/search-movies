import { render } from '@testing-library/react';
import React from 'react';
import {ModalDescription} from './ModalDescription';

class Movie extends React.Component {
    constructor(props) {
        super();
        this.movie = {...props};
        this.state = {
            showDescription: false,
        }
        this.openDescription = this.openDescription.bind(this);
        this.closeDescription = this.closeDescription.bind(this);
    }

    openDescription() {
        this.setState({showDescription: true});
    }

    closeDescription() {
        this.setState({showDescription: false});
    }

    render() {
        const {title, year, type, poster, id} = this.movie;
        const modal = this.state.showDescription ? 
        <ModalDescription show={this.state.showDescription} closeHandler={this.closeDescription} movieId={id}/> 
        : "";
        return (
            <div className="movie card">
                <div className="card-image"> 
                    {
                        poster === "N/A" ? <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`}/>: 
                        <img className="activator" src={poster}/>
                    }
                </div>
                <div className="card-content">
                    <span className="card-title activator modal-trigger" onClick={this.openDescription}>{title}</span>
                    <span className="card-year">{year}</span>
                    <span className="card-type right">{type}</span>
                </div>
                {modal}
            </div>);
    }
    
}

export { Movie };