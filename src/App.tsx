import "./App.css";
import MovieInfosContainer from "./components/MovieInfos";
import { MoviesBest } from "./components/MovieList/MovieList";

const App = () => {
  return (
    <div className="App">
      {/* <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} /> */}
      <MovieInfosContainer id={2} />
    </div>
  );
};

export default App;
