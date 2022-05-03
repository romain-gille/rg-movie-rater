import React from "react";
import "./App.css";
import MovieInfosContainer from "./components/MovieInfos";
import MoviesSearchContainer from "./components/MovieSearch";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [id, setId] = React.useState(422222);
  const [search, setSearch] = React.useState("batman");
  const handleIdChange = React.useCallback((newId: number) => {
    setId(newId);
  }, []);

  const handleSearchChange = React.useCallback((newSearch: string) => {
    setSearch(newSearch);
  }, []);
  return (
    <div>
      <NavBar handleSearchChange={handleSearchChange} />
      <div className="App">
        <MoviesSearchContainer
          handleIdChange={handleIdChange}
          search={search}
        />
        <MovieInfosContainer id={id} />
      </div>
    </div>
  );
};

export default App;
