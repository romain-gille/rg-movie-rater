import { gql } from '@apollo/client';

export const GET_MOVIE_SEARCH = gql`
  query GET_MOVIE_SEARCH($search: String!) {
    movies(search: $search) @rest(type: "Movies", path: "search/movie?language=en-US&query={args.search}&page=1&include_adult=false") {
      results @type(name: "Results") {
        title
        overview
        popularity
        poster_path
        id
        vote_average
      }
    }
  }
`;
