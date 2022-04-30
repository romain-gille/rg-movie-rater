import { useQuery } from "@apollo/client";
import MoviesList, { MoviesData } from "./MovieList";
import { GET_MOVIE_LIST } from "./query";

interface OwnProps {
  id: number;
}

const MoviesListContainer: React.FC<OwnProps> = ({ id }) => {
  const { loading, error, data } = useQuery<MoviesData>(GET_MOVIE_LIST);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  if (data) {
    console.log(data);
    return <MoviesList data={data.movies.results} />;
  }
  else {
    return <div>hey</div>;
  }
};
export default MoviesListContainer;
