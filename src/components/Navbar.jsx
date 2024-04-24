import { Flex, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const { Search } = Input;
  const onSearch = (value) => setInputValue(value);
  const navigate = useNavigate();
  useEffect(() => {
    if (inputValue.trim().length) {
      navigate("/search/" + inputValue);
    } else {
      navigate("/");
    }
  }, [inputValue]);
  return (
    <>
      <Flex justify="space-evenly">
        <Flex>
          <img src={logo} alt="logo" width="50px" />
        </Flex>
        <Flex gap="large" justify="space-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/toprated">Top Rated</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
        </Flex>
        <Flex vertical justify="center">
          <Search placeholder="Search movie" onSearch={onSearch} enterButton />
        </Flex>
      </Flex>
    </>
  );
};
export default Navbar;
