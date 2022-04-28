import "./styles.css";
import { gql, useQuery } from "@apollo/client";

interface MovieData {
  movie: Movie;
}
interface Movie {
  title: String;
  overview: String;
  popularity: number;
  poster_path: string;
  id: number;
}

interface MoviesData {
  movies: Movies;
}
interface Movies {
  results: Movie[];
}

const GET_MOVIE = gql`
  query GET_MOVIE {
    movie @rest(type: "Movie", path: "movie/550") {
      title
      overview
      popularity
      poster_path
      id
    }
  }
`;

const GET_MOVIE_BEST = gql`
  query GET_MOVIE_BEST {
    movies @rest(type: "Movies", path: "movie/popular") {
      results @type(name: "Results") {
        title
        overview
        popularity
        poster_path
        id
      }
    }
  }
`;

export function MovieInfo() {
  const { loading, error, data } = useQuery<MovieData>(GET_MOVIE);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  if (data) {
    console.log(data.movie);
    return <div>{data.movie.title}</div>;
  }
}

export function MoviesBest() {
  const { loading, error, data } = useQuery<MoviesData>(GET_MOVIE_BEST);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  if (data) {
    console.log(data);
    return (
      <div className="main-container">
        <h1>Popular</h1>
        {data.movies.results.map((mov) => (
          <div key={mov.id}>
            <h3>{mov.title}</h3>
            <h4>{mov.popularity}</h4>
            <p>{mov.overview}</p>
          </div>
        ))}
      </div>
    );
  }
}
