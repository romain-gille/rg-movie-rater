import { gql } from '@apollo/client';

export const query = gql`
  query {
    movie @rest(type: "Movie", path: "3/movie/76321") {
      imdb_id
    }
  }
`;


export const GET_USERS = gql `query GET_USERS {
  users @rest(type: "Users", path: "/users") {
    total
    data @type(name: "User") {
       id
       first_name
       last_name
     }
  }
}`
