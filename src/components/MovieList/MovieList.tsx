import { Movie } from "../MovieInfos/MovieInfos";
import "./styles.css";




export interface MoviesData {
  movies: Movies;
}
interface Movies {
  results: Movie[];
}

interface Props {
  data: Movie[];
}

const MoviesList: React.FC<Props> = ({ data }) => {
  if (!data) {
    return <div>No Info available</div>;
  }
  return (
    <div className="main-container">
      <h1>Popular</h1>
      {data.map((mov) => (
        <div key={mov.id}>
          <h3>{mov.title}</h3>
          <h4>{mov.popularity}</h4>
          <p>{mov.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
