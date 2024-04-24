import { Flex, Image, Rate, Progress, Button } from "antd";

const Movie = ({ obj }) => {
  const time = obj.release_date.split("-");
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          background: `url("https://image.tmdb.org/t/p/w500${obj.backdrop_path}") no-repeat`,
          backgroundSize: "100% 100%",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          filter: "blur(4px)",
          opacity: "0.3",
        }}
      ></div>
      <Flex gap="large">
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`}
            alt="img"
            width="300px"
            style={{
              padding: "30px 50px",
            }}
          ></Image>
        </div>
        <Flex className="aboutMovie" vertical align="start">
          <h1 className="title">
            {obj.title} ({time[0]})
          </h1>
          <p>
            {time[2]}/{time[1]}/{time[0]} *{" "}
            {obj.genres.map((el) => {
              return " [ " + el.name + " ] ";
            })}
            * {Math.floor(obj.runtime / 60)} h {obj.runtime % 60} m
          </p>
          <p>
            {obj.vote_count}
            <span> Users Score</span>
            <Progress
              size="small"
              type="circle"
              percent={Math.round(obj.vote_average * 10)}
              strokeColor={`rgb(${Math.round(obj.vote_average) * 10}, 200, ${
                Math.round(obj.vote_average) * 25.5
              })`}
              colorText="red"
            />
          </p>
          <br></br>
          <Button type="primary">
            <a href={`${obj.homepage}`} target="_blank">
              Trailer
            </a>
          </Button>
          <br></br>
          <Rate allowHalf defaultValue={2.5} />
        </Flex>
      </Flex>
    </div>
  );
};

export default Movie;
