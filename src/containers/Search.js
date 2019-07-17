import React from 'react';
import './Search.css'
import SearchButton from './SearchButton'
import { withRouter } from "react-router-dom";

class Search extends React.Component {
    state = { term: '' }
    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = event => {
         event.preventDefault();
         const location = `/search/${this.state.term}`

         this.props.history.push(location)
         this.props.history.replace(location)

     };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">

                        <input type="text"
                            value={this.state.term}
                            placeholder='Search term'
                            onChange={this.onInputChange} />

                    </div>
<SearchButton />
                </form>

            </div>)
    }
}

export default withRouter(Search);;
