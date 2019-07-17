import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




export default class SingleSearchResult extends Component {
    render() {
        return (
          <div className="col-sm-12 single-result mb-2" key={this.props.key}>
          <Link to={`/${this.props.topicSlug}/${this.props.termSlug}`}>
          <h2>{this.props.term}</h2>
          </Link>

          <hr className='result-hr'/>
          <p>{this.props.definition}</p>
          <hr className='result-hr'/>
          <span className="badge result-badge-topic result-badge-margin">{this.props.topic}</span>

          </div>
        );
    }
}
