import React from "react";
import { Button } from "rimble-ui";

import logo from "../logo.png";
import "./App.css";

import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

export default function App() {
  const [modalShow, setModalShow] = React.useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted valid form");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        </>
      </header>
    </div>
  );
}
