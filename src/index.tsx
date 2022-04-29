import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { setContext } from "@apollo/client/link/context";

const restLink = new RestLink({ uri: "https://api.themoviedb.org/3/" });
const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_TMDBAPI;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const testclient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(restLink),
  connectToDevTools: true,
});

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <ApolloProvider client={testclient}>
      <App />
    </ApolloProvider>
  );
}
