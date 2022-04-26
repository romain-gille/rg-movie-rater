import * as React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import "./index.css";
import App from "./App";
import { query } from "./components/MovieList/query";
import { setContext } from '@apollo/client/link/context';



// Set `RestLink` with your endpoint
const restLink = new RestLink({ uri: "https://api.themoviedb.org/" });
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem("tmdbAPI");
  const token = process.env.REACT_APP_TMDBAPI;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Setup your client
const testclient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(restLink)
});

// Invoke the query and log the person's name

testclient.query({ query }).then((response) => {
  console.log(response);


});

const client = new ApolloClient({
  uri: "https://spacexdata.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
