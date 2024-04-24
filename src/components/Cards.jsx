import { Card, Progress } from "antd";
import { Link } from "react-router-dom";

const Cards = ({ obj }) => {
  return (
    <Link to={`/movie/${obj.id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`}
          />
        }
      >
        <div className="description">
          <span className="progressBar">
            <Progress
              size="small"
              type="circle"
              percent={Math.round(obj.vote_average * 10)}
              strokeColor={`rgb(${Math.round(obj.vote_average) * 25.5}, 200, ${
                Math.round(obj.vote_average) * 25.5
              })`}
              colorText="red"
            />
          </span>
          <p className="title">{obj.title}</p>
          <p className="year">{obj.release_date}</p>
        </div>
      </Card>
    </Link>
  );
};

export default Cards;
