import { gql } from '@apollo/client';

export const GET_MOVIE_LIST = gql`
  query GET_MOVIE_LIST {
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
