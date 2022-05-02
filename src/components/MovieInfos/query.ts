import { gql } from '@apollo/client';

export const GET_MOVIE = gql`
  query GET_MOVIE($id: String!) {
    movie(id: $id) @rest(type: "Movie", path: "movie/{args.id}") {
      title
      overview

      poster_path
      id
      vote_average
    }
  }
`;
