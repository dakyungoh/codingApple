import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

function Detail(props) {
  const { shoes } = props;
  const { id } = useParams();
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState("");
  let [tabs, setTabs] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, [count]);

  useEffect(() => {
    if (isNaN(num) === true) {
      alert("그러지마세요");
    }
  }, [num]);

  const findshoes = shoes.find((shoe) => {
    return shoe.id == id;
  });

  let Box = styled.div`
    padding: 20px;
    color: grey;
  `;
  let YellowBtn = styled.button`
    background: ${(props) => props.color};
    color: ${(props) => (props.color === "blue" ? "white" : "black")};
    padding: 10px;
  `;

  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning"> 2초 이내 구매 시 할인 </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findshoes.title}</h4>
          <p>{findshoes.content}</p>
          <p>{findshoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              eventKey="link0"
              onClick={() => {
                setTabs(0);
              }}
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link1"
              onClick={() => {
                return setTabs(1);
              }}
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => setTabs(2)}>
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tabs={tabs} />
      </div>
    </div>
  );
}

function TabContent({ tabs }) {
  const [fadeIn, setFadeIn] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFadeIn("end");
    }, 100);
    return () => {
      setFadeIn("");
    };
  }, [tabs]);
  return (
    <div className={`start ${fadeIn}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tabs]}
    </div>
  );
  // if (tabs === 0) {
  //   return <div>내용0</div>;
  // }
  // if (tabs === 1) {
  //   return <div>내용1</div>;
  // }
  // if (tabs === 2) {
  //   return <div>내용2</div>;
  // }
}

export default Detail;
