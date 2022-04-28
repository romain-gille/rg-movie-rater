import * as React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, gql  } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import "./index.css";
import App from "./App";
import { createRoot } from 'react-dom/client';
// import { query } from "./components/MovieList/query";
import { setContext } from '@apollo/client/link/context';


const restLink2 = new RestLink({
  uri: 'https://reqres.in/api',   // this is your API base url
  credentials: 'same-origin',
});


// Set `RestLink` with your endpoint
// const restLink = new RestLink({ uri: "https://api.themoviedb.org/" });
// const authLink = setContext((_, { headers }) => {
//   const token = process.env.REACT_APP_TMDBAPI;
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// Setup your client
const testclient = new ApolloClient({
  cache: new InMemoryCache(),
  // link: authLink.concat(restLink2)
  link: restLink2,
  connectToDevTools: true
});

export const query = gql `query GET_USERS {
  users @rest(type: "Users", path: "/users") {
    total
    data @type(name: "User") {
       id
       first_name
       last_name
     }
  }
}`
// testclient.query({ query }).then((response) => {
//    console.log(response.data.users.data[0].id)})

// Invoke the query and log the person's name
// const getMovieList = () => {
// testclient.query({ query }).then((response) => {
//   console.log(response);
//   return response;
// });}

// const movies = getMovieList();
// console.log("movie: ");
// console.log({movies});
// const client = new ApolloClient({
//   uri: "https://spacexdata.herokuapp.com/graphql",
//   cache: new InMemoryCache(),
// });
const container = document.getElementById("root")
if (container){
const root = createRoot (container)
root.render(<ApolloProvider client={testclient}>
  <App/>
</ApolloProvider>);
};
