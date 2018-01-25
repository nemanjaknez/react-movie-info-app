import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';

class Movie extends Component {

  render() {
    return(
      <div className="col-md-6 movie">
        <div className="col-md-8 col-md-offset-2">
          <div className="col-md-6">
            <img src={this.props.poster} alt={this.props.title} className="poster-img img-responsive" />
          </div>
          <div className="col-md-6">
            <h3>{this.props.title}</h3>
            <p>{this.props.year}</p>
            <p>{this.props.type}</p>
          </div>
          <Link to={"/details/" + this.props.id} className="btn btn-default details-btn">Details</Link>
        </div>
      </div>
    )
  }
}

export default Movie;
