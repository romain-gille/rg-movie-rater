import React from "react";
import "./App.css";
import MovieInfosContainer from "./components/MovieInfos";
import MoviesListContainer from "./components/MovieList";

const App = () => {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback((newId: number) => {
    console.log(newId);
    setId(newId);
  }, []);
  return (
    <div className="App">
      {/* <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} /> */}
      <MoviesListContainer handleIdChange={handleIdChange}/>
      <MovieInfosContainer id={id}/>

    </div>
  );
};

export default App;
