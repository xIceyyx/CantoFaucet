// React
import { useState, useEffect } from "react";

// Styled Components
import styled from "styled-components";

// Redux
import { useSelector } from "react-redux";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Request from "./Request/Request";

const Home = () => {
  const mode = useSelector((state) => state.user.mode);

  return (
    <Wrapper mode={mode}>
      <img
        src="https://convert.canto.io/assets/bg-noise.8793d4fd.gif"
        alt=""
        className="background-image"
      />

      <p className="header">canto evm faucet</p>

      {/* <p className="support">
        Do not connect your wallet or use web3 for this faucet
      </p> */}

      <Request />

      <ToastContainer
        style={{ width: "400px" }}
        toastClassName="font-bold  border-[1px] border-[#23263D] rounded-[10px] w-2xl"
        position="top-center"
        rtl={false}
        toastStyle={{
          backgroundColor: mode === "light" ? "#000" : "#000",
          color: mode === "light" ? "#06fc99" : "#06fc99",
          fontFamily: "VT323",
          fontSize: "1rem",
        }}
        className="toastContainer"
      />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 0 20px;
  padding-top: 125px;
  padding-bottom: 125px;

  min-height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 20px;

  background: rgb(0, 0, 0);
  background: repeating-linear-gradient(
    0deg,
    #010000 0%,
    #010000 4px,
    #021911 4px,
    #021911 8px
  );
  background-repeat: repeat-y;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    background-attachment: fixed;
    background-repeat: repeat;
    inset: 0px;
    display: block;
    height: 100%;
    margin: 0px;
    padding: 0px;
    pointer-events: none;
    position: absolute;
    width: 100%;
    background-image: url(/assets/bg-noise.8793d4fd.gif);
    background-size: 170px;
    mix-blend-mode: lighten;
    opacity: 0.4;
    z-index: 600;
  }

  .header {
    font-size: 2.25rem;

    text-align: center;

    font-weight: 900;

    font-family: "modeSeven", monospace !important;

    text-shadow: 0 0 4px #2cffab, 0 0 20px #06fc99;
  }

  .support {
    font-size: 1.5rem;

    text-align: center;
  }

  .footer {
    font-size: 2.25rem;

    text-align: center;

    letter-spacing: 20px;

    position: absolute;
    bottom: 20px;
  }
`;
