import http from "./httpService";

const apiEndpoint = "http://localhost:5000/api/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}
