import React from "react";

const MoviesTable = ({ movies }) => {
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Movie</th>
          <th scope="col">Genre</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <th scope="col">{movies.indexOf(movie)}</th>
            <th scope="col">{movie.title}</th>
            <th scope="col">{movie.genre}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
