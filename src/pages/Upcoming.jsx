import { useEffect, useState } from "react";
import { Flex, Pagination } from "antd";
import Cards from "../components/Cards";

const Upcoming = () => {
  const [films, setFilms] = useState([]);
  const [activePage, setActivePage] = useState(1);
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
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${activePage}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setFilms(response.results))
      .catch((err) => console.error(err));
  }, [activePage]);

  return (
    <>
      <Flex gap="middle" wrap="wrap" justify="space-around">
        {films.length &&
          films.map((el) => {
            return <Cards key={el.id} obj={el} />;
          })}
        <Pagination
          defaultCurrent={1}
          total={500}
          onChange={(e) => {
            setActivePage(e);
          }}
        />
      </Flex>
    </>
  );
};
export default Upcoming;
