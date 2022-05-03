import { Chip, Typography } from "@mui/material";
import { generateKey } from "crypto";
import "./styles.css";

export interface MovieData {
  movie: Movie;
}
export interface Movie {
  title: String;
  overview: String;
  popularity: number;
  poster_path: string;
  id: number;
  vote_average: number;
  release_date?: string;
  runtime?: number;
  genres?: Genre[];
}
interface Genre {
  name: string;
}
interface Props {
  data: Movie;
}

const className = "movie-info";

const MovieInfos: React.FC<Props> = ({ data }) => {
  if (!data) {
    return <div>No Info available</div>;
  }
  if (!data.genres) {
    return <div>No Info available</div>;
  }
  console.log(data.genres);

  return (
    <div className={`${className}__container`}>
      <img
        className={`${className}__img`}
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
      />
      <div className={`${className}__content`}>
        <Typography variant="h3">{data.title}</Typography>
        <Typography variant="body1" my={2}>
          {data.overview}
        </Typography>
        <Typography variant="h6">
          Release date: {data.release_date?.substring(0, 4)}
        </Typography>
        <Typography variant="h6">Duration: {data.runtime} min</Typography>
        <Typography variant="h6">
          {data.genres!.map((genre) => (
            <Chip label={genre.name} variant="outlined" size="medium" />
          ))}
        </Typography>
      </div>
    </div>
  );
};

export default MovieInfos;
