// React
import { useState, useEffect } from "react";

// Styled Components
import styled from "styled-components";

// Redux
import { useSelector } from "react-redux";

// Components
import Request from "./Request/Request";

const Home = () => {
  const mode = useSelector((state) => state.user.mode);

  return (
    <Wrapper mode={mode}>
      <p className="header">CANTO EVM FAUCET</p>
      <Request />

      {/* <p className="footer">APTO FLIP</p> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 0 20px;
  padding-top: 75px;
  padding-bottom: 125px;

  min-height: 100vh;

  font-family: "VT323", monospace !important;

  background-color: ${(props) => (props.mode === "light" ? "#fff" : "#000")};

  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 20px;

  .header {
    font-size: 2.25rem;

    color: ${(props) => (props.mode === "light" ? "#000" : "#fff")};

    text-align: center;
  }

  .footer {
    font-size: 2.25rem;

    color: ${(props) => (props.mode === "light" ? "#000" : "#fff")};

    text-align: center;

    letter-spacing: 20px;

    position: absolute;
    bottom: 20px;
  }
`;
