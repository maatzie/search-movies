import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
    }
    constructor(props) {
        super();
        this.searchCb = props.searchCb;
    }

    handleSearch = (event) => {
        if(event.code === "Enter") {
            this.searchCb(this.state.search);
        }
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
          <div className="btn input-field inline right purple darken-4" onClick={() => this.searchCb(this.state.search)}>
            <span>Search</span>
          </div>
        </div>
    }

}

export {Search}