import { gql } from '@apollo/client';

export const query = gql`
  query {
    movie @rest(type: "Movie", path: "3/movie/76321") {
      imdb_id
    }
  }
`;
