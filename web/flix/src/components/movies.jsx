import React, { Component } from "react";
import { getMovies } from "../services/movieService";
import NavBar from "./navBar";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = { movies: [] };
  async componentDidMount() {
    const { data } = await getMovies();
    this.setState({ movies: data });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MoviesTable movies={this.state.movies} />
      </React.Fragment>
    );
  }
}

export default Movies;
