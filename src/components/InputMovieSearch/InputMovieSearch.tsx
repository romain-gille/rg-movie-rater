import * as React from "react";
import "./styles.css";

export interface OwnProps {
  handleSearchChange: (newSearch: string) => void;
}

interface Props extends OwnProps {

}

const className = "InputSearch";

const InputMovieSearch: React.FC<Props> = ({ handleSearchChange }) => {
return (
  <div>hey</div>
)
};

export default InputMovieSearch;
