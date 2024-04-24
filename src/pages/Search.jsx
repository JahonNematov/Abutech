import { useEffect, useState } from "react";
import { Flex } from "antd";
import Cards from "../components/Cards";
import { useParams } from "react-router-dom";

const Search = () => {
  const [films, setFilms] = useState([]);
  const { searchQuery } = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzI1YjhlNTIwZjI4YzkyNzk3YjczMjIwZjkzNTY1MyIsInN1YiI6IjY2MjgwZjM5NGE0YmY2MDE4ODc2YTBkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SNxl1QedyhfijF7VzLWhWpTcpqeilnF9BizMjpNEa0k",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setFilms(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Flex gap="middle" wrap="wrap" justify="space-around">
        {films.length &&
          films.map((el) => {
            return <Cards key={el.id} obj={el} />;
          })}
      </Flex>
    </>
  );
};

export default Search;
