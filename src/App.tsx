import "./App.css";
import { MoviesBest } from "./components/MovieList/MovieList";

const App = () => {
  return (
    <div className="App">
      {/* <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} /> */}
      {MoviesBest()}
    </div>
  );
};

export default App;
