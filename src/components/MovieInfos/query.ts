import { gql } from '@apollo/client';

export const GET_MOVIE = gql`
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
