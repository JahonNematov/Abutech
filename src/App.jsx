import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import Single from "./pages/Single";
import Search from "./pages/Search";
import Foot from "./components/Footer";

import { Flex } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";

import "./App.css";

function App() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Content style={{ margin: "16px auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:id" element={<Single />} />
          <Route path="/search/:searchQuery" element={<Search />} />
        </Routes>
      </Content>
      <Footer>
        <Foot />
      </Footer>
    </>
  );
}

export default App;
