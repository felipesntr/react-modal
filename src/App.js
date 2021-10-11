import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";
import { GlobalStyle } from "./globalStyles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background-color: rebeccapurple;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  box-shadow: 5px 5px rgba(0,0,0,0.25);
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: translate(0, -5px)
  }
`;

function App() {

  const [showModal, setShowModal ] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <Container>
        <Button onClick={openModal}>Eu sou um modal :D</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </div>
  );
}

export default App;
