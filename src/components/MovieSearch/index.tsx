import { useQuery } from "@apollo/client";
import React from "react";
import MoviesSearch, { OwnProps } from "./MovieSearch";
import { MoviesData } from "./MovieSearch";
import { GET_MOVIE_SEARCH } from "./query";



const MoviesSearchContainer: React.FC<OwnProps> = (props) => {
  const { loading, error, data, refetch } = useQuery<MoviesData>(GET_MOVIE_SEARCH,{variables: { search: props.search }});





  React.useEffect(() => {
    refetch({ search: props.search });
  }, [refetch, props.search]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {

    return <div>Error!</div>;
  }
  if (data) {
    return <MoviesSearch data={data.movies.results} {...props} />;
  }
  else {
    return <div>hey</div>;
  }
};
export default MoviesSearchContainer;
