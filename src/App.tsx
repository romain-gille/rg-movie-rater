import React from "react";
import "./App.css";
import MovieInfosContainer from "./components/MovieInfos";
import MoviesListContainer from "./components/MovieList";
import MoviesSearchContainer from "./components/MovieSearch";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [id, setId] = React.useState(42);
  const [search, setSearch] = React.useState("bat");
  const handleIdChange = React.useCallback((newId: number) => {
    console.log(newId);
    setId(newId);
  }, []);
  return (
    <div className="App">
      {/* <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} /> */}
      {/* <NavBar/> */}
      <MoviesListContainer handleIdChange={handleIdChange}/>
      <MoviesSearchContainer handleIdChange={handleIdChange} search={"bat"}/>

      <MovieInfosContainer id={id}/>

    </div>
  );
};

export default App;
