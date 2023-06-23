import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import data from "./data";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import axios from "axios";
import Cart from "./routes/Cart";

function App() {
  const [shoes, setShoes] = useState(data);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 1) {
      setLoading(true);
      setTimeout(() => {
        axios
          .get("https://codingapple1.github.io/shop/data2.json")
          .then((response) => {
            setShoes((shoe) => [...shoe, ...response.data]);
          })
          .catch((err) => {
            console.log("실패");
          })
          .finally(() => {
            setLoading(false);
          });
      }, 3000);
    } else if (count === 2) {
      setLoading(true);
      axios
        .get("https://codingapple1.github.io/shop/data3.json")
        .then((response) => {
          setShoes((shoe) => [...shoe, ...response.data]);
        })
        .catch((err) => {
          console.log("실패");
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (count > 3) {
      alert("더이상 상품이 없습니다.");
    }
  }, [count]);

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
                <div className="loading-text">
                  {loading && <p>로딩중입니다.</p>}
                </div>
                <button
                  onClick={() => {
                    setCount((count) => count + 1);
                  }}
                  disabled={loading}
                >
                  더보기
                </button>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
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
        alt=""
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </div>
  );
}

export default App;
