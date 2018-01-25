import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
import './Details.css';

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    }
  }

  componentWillMount() {
    const BASE_URL = 'http://www.omdbapi.com/?apikey=e6418ebb&i=';
    const FETCH_URL = BASE_URL + this.props.match.params.id;
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => this.setState({movie: json}));
  }

  render() {
    return(
      <div className="container">
        <div>
          {
            this.state.title !== {} &&
              <div className="details-content">
                <div className="row">
                  <div className="col-md-4">
                    <img src={this.state.movie.Poster} alt={this.state.movie.Title} />
                  </div>
                  <div className="col-md-8">
                    <h2>{this.state.movie.Title}</h2>
                    <h4>Year: {this.state.movie.Year}</h4>
                    <h4>Released: {this.state.movie.Released}</h4>
                    <h4>Runtime: {this.state.movie.Runtime}</h4>
                    <div className="rating">
                      <h5>Rating</h5>
                      <h4>{this.state.movie.imdbRating}<span>/10</span> <Glyphicon glyph="star" className="star" /></h4>
                    </div>
                    <h4>Genre: {this.state.movie.Genre}</h4>
                    <h4>Director: {this.state.movie.Director}</h4>
                    <h4>Writer: {this.state.movie.Writer}</h4>
                    <h4>Actors: {this.state.movie.Actors}</h4>
                  </div>
                </div>
              </div>
          }
        </div>
        <Link to={"/"} className="btn btn-default back-btn">Back to homepage</Link>
      </div>
    )
  }
}

export default Details;
