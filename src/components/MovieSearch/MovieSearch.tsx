import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Movie } from "../MovieInfos/MovieInfos";
import "./styles.css";

export interface OwnProps {
  search: string;
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

const MoviesSearch: React.FC<Props> = ({ data, handleIdChange }) => {
  console.log(data);

  if (!data) {
    return <div>No Info available</div>;
  }
  return (
    <div className={`${className}__container`}>
      <Grid container spacing={2}>
        {data.map((mov) => (
          <Grid item xs={6} md={3} spacing={3} key={mov.id}>
            {/* <h3>{mov.title}</h3> */}
            <Card
              className={`${className}__el`}
              onClick={() => handleIdChange(mov.id!)}
            >
              <CardMedia
                component="img"
                // height="300"
                image={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                alt={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
              />
              <div className="card-content">
                <Typography gutterBottom variant="h6">
                  {mov.title}
                </Typography>
              </div>

              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>

            {/* <img
              className={`${className}__img`}
              src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
              alt={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
            /> */}
            {/* <h4>{mov.vote_average}</h4> */}
            {/* <p>{mov.overview}</p> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MoviesSearch;
