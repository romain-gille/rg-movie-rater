import { useQuery } from "@apollo/client";
import React from "react";
import MovieInfos, { MovieData } from "./MovieInfos";
import { GET_MOVIE } from "./query";

interface OwnProps {
  id: number;
}

const MovieInfosContainer: React.FC<OwnProps> = ({ id }) => {
  const { loading, error, data, refetch } = useQuery<MovieData>(GET_MOVIE,{variables: { id: String(id) }});


  React.useEffect(() => {
    refetch({ id: String(id) });
  }, [refetch, id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }
  if (data) {
    return <MovieInfos data={data.movie} />;
  }
  else {
    return <div>hey</div>;
  }


};

export default MovieInfosContainer;
