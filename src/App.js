import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import data from "./data";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Container>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
        </Nav>
      </Container>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i} key={i}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="*" element={<div>없는 페이지요</div>}></Route>
        <Route
          path="/event"
          element={
            <div>
              <h1>오늘의 이벤트</h1> <Outlet></Outlet>
            </div>
          }
        >
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일 기념 쿠폰 받기</p>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  const { shoes } = props;
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </div>
  );
}
export default App;
