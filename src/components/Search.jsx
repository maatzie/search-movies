import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: '',
    }
    constructor(props) {
        super();
        this.searchCb = props.searchCb;
    }

    handleSearch = (event) => {
        if(event.code === "Enter") {
            this.searchCb(this.state.search, this.state.type);
        }
    }

    handleFilterChange = (event) => {
        this.setState(
            () => ({ type: event.target.value }),
            () => {
                this.props.searchCb(this.state.search, this.state.type);
            }
        );
    }
    
    render() {
        return <div className="row">
          <div className="input-field inline search-field">
            <input 
                placeholder="search" 
                type="search" 
                className="validate"
                value={this.state.search}
                onChange={(event) => this.setState({search: event.target.value})}
                onKeyDown={this.handleSearch}/>
          </div>
          <div className="btn input-field inline right purple darken-4" onClick={() => this.searchCb(this.state.search, this.state.type)}>
            <span>Search</span>
          </div>
          <div className="filter">
            <label>
                <input className='purple darken-4' name="type" type="radio" value='' checked={this.state.type===""} onChange={this.handleFilterChange} />
                <span>All</span>
            </label>
            <label>
                <input name="type" type="radio" value='movie' checked={this.state.type==="movie"} onChange={this.handleFilterChange}/>
                <span>Movies only</span>
            </label>
            <label>
                <input name="type" type="radio" value='series' checked={this.state.type==="series"} onChange={this.handleFilterChange}/>
                <span>Series only</span>
            </label>
          </div>
        </div>
    }

}

export {Search}