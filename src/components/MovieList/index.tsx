import { useQuery } from "@apollo/client";
import MoviesList, { MoviesData, OwnProps } from "./MovieList";
import { GET_MOVIE_LIST } from "./query";



const MoviesListContainer: React.FC<OwnProps> = (props) => {
  const { loading, error, data } = useQuery<MoviesData>(GET_MOVIE_LIST);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {

    return <div>Error!</div>;
  }
  if (data) {

    return <MoviesList data={data.movies.results}  {...props} />;
  }
  else {
    return <div>hey</div>;
  }
};
export default MoviesListContainer;
