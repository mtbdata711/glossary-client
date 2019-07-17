import React, { Component, Fragment } from "react";
import SingleSearchResult from "./SingleSearchResult";
import { Fetcher } from './fetcher.js';
const fetcher = new Fetcher()

export default class SearchResults extends Component {
  constructor(props) {

    super(props);
    this.state = {
      results: null

    }
  }

  async componentDidMount(){
    const results = await fetcher.fetchTermsByParams(this.props)
    this.setState({
         results: results
       })

  }

  generateResults = () => {
      return this.state.results.map( (result, key) => {
        return(
          <SingleSearchResult
          key={key}
          term={result.term}
          definition={result.definition}
          topic={result.topic}
          termSlug={result.term_slug}
          topicSlug={result.topic_slug}




          />

        )


      })
  }


    render() {
      console.log(this.state.results)
        return (
          <Fragment>
          <div className="h-100 container mt-1">
          <h1>Search Results</h1>
          <div className="results-wrapper">
          {(this.state.results === null) ? null:this.generateResults()}

          </div>
          </div>

          </Fragment>
        );
    }
}
