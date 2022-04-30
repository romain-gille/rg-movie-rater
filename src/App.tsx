import "./App.css";
import MovieInfosContainer from "./components/MovieInfos";
import MoviesListContainer from "./components/MovieList";

const App = () => {
  return (
    <div className="App">
      {/* <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} /> */}
      <MoviesListContainer id={2}/>
      <MovieInfosContainer id={2}/>

    </div>
  );
};

export default App;
