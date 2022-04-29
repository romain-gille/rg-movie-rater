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
}
interface Props {
  data: Movie;
}

const MovieInfos: React.FC<Props> = ({data}) => {
  if (!data) {
    return <div>No Info available</div>;
  }
  return(
    <div>
    <p>{data.title}</p>
    <p>{data.overview}</p>
    <p>{data.popularity}</p>
    <p>{data.poster_path}</p>
    <p>{data.id}</p>
    </div>
  )
}

export default MovieInfos
