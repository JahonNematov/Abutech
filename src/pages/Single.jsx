import { useEffect, useState } from "react";
import { Flex } from "antd";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

const Single = () => {
  const { id } = useParams();
  const [film, setFilm] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzI1YjhlNTIwZjI4YzkyNzk3YjczMjIwZjkzNTY1MyIsInN1YiI6IjY2MjgwZjM5NGE0YmY2MDE4ODc2YTBkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SNxl1QedyhfijF7VzLWhWpTcpqeilnF9BizMjpNEa0k",
    },
  };
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/" + id, options)
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setFilm(response);
      })
      .catch((err) => console.error(err));
  }, []);
  return <>{!isLoading ? <Movie obj={film} /> : <h1>...loading</h1>}</>;
};

export default Single;
