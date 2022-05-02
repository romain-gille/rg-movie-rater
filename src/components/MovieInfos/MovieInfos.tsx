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
  vote_average: number
}
interface Props {
  data: Movie;
}

const className = "movie-info";


const MovieInfos: React.FC<Props> = ({data}) => {
  if (!data) {
    return <div>No Info available</div>;
  }
  return(
    <div className={`${className}__container`}>

    <img className={`${className}__img`} src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
    <div className={`${className}__content`}>
    <h2>{data.title}</h2>
    <p>{data.overview}</p>
    <p>{data.vote_average}</p>

    <p>{data.id}</p>
    </div>
    </div>
  )
}

export default MovieInfos
