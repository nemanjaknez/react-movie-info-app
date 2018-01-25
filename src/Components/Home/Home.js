import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Movie from '../Movie/Movie';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      movies: {
        Response: 'False',
      },
    }
  }

  search() {
    const BASE_URL = 'http://www.omdbapi.com/?apikey=e6418ebb&s=';
    const FETCH_URL = BASE_URL + this.state.query;
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => this.setState({movies: json}));
  }

  getMovies() {
    let movies = [];
    if(this.state.movies.Response === 'True') {
      let m = this.state.movies.Search;
      for (var i = 0; i < m.length; i++) {
        if(m[i].Poster !== "N/A") {
          movies.push(m[i]);
        }
      }
      return movies;
    }
  }

  render() {
    return(
      <div className="text-center">
        <h1>Movie Info App</h1>
        <FormGroup className="col-md-4 col-md-offset-4">
          <InputGroup className="search-group">
            <FormControl
              type="text"
              placeholder="Search for an movie"
              className="search-input"
              value={this.state.query}
              onChange={e => {this.setState({query: e.target.value})}}
              onKeyPress={e => {
                if(e.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()} className="search-btn">
              <Glyphicon glyph="search" className="search-glyph"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div>
          {
            this.getMovies() !== undefined &&
              <div>
                {
                  this.getMovies().map((movie, index) => {
                    return(
                      <Movie
                        key={index}
                        title={movie.Title}
                        year={movie.Year}
                        type={movie.Type}
                        poster={movie.Poster}
                        id={movie.imdbID}
                      />
                    )
                  })
                }
              </div>
          }
        </div>
      </div>
    )
  }

}

export default Home;
