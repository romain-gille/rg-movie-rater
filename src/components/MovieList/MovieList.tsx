import { Movie } from "../MovieInfos/MovieInfos";
import "./styles.css";


export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

export interface MoviesData {
  movies: Movies;
}
interface Movies {
  results: Movie[];
}

interface Props extends OwnProps {
  data: Movie[];
}

const className = "movies-list";

const MoviesList: React.FC<Props> = ({ data, handleIdChange }) => {
  if (!data) {
    return <div>No Info available</div>;
  }
  return (
    <div className={`${className}__container`}>
      <h1>Popular</h1>
      {data.map((mov) => (
        <div
          key={mov.id}
          className={`${className}__el`}
          onClick={() => handleIdChange(mov.id!)}
        >
          <h3>{mov.title}</h3>
          <h4>{mov.vote_average}</h4>
          {/* <p>{mov.overview}</p> */}
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
