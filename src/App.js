import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import data from "./data";
import { useState } from "react";

function App() {
  const [shoes, setShoes] = useState(data);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          <Card shoes={shoes} />
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  <div className="col-md-4">
    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
    <h4>{props.shoes[0].title}</h4>
    <p>{props.shoes[0].content}</p>
  </div>;
}
export default App;
