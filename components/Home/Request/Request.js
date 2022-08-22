// React
import { useState, useRef } from "react";

// Styled Components
import styled from "styled-components";

// Ethers
import { ethers } from "ethers";

// MUI
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

// Toast
import { toast } from "react-toastify";

// Captcha
import ReCAPTCHA from "react-google-recaptcha";

const Request = () => {
  const [inputValue, setInputValue] = useState();
  const [status, setStatus] = useState();

  const capthcaRef = useRef();

  const claim = async () => {
    console.log(capthcaRef);

    if (!status) {
      toast.error("Complete captcha");
      return;
    }

    console.log(inputValue);

    try {
      toast.success("Claim submitted");

      capthcaRef.current.reset();

      await fetch("/api/Faucet", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          address: inputValue.toString().toLowerCase(),
        }),
      });

      setStatus(false);
    } catch (error) {
      console.log(error);
      capthcaRef.current.reset();
      toast.error("Failed to claim");
      setStatus(false);
    }

    capthcaRef.current.reset();

    setStatus(false);
  };

  const onChange = async (value) => {
    console.log("completed");
    setStatus(true);
  };

  return (
    <Wrapper>
      <div className="form">
        <input
          type="text"
          className="address"
          placeHolder={"enter canto EVM address"}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />

        <div className="captha">
          <ReCAPTCHA
            sitekey="6LcDR5MhAAAAADDA_Bw3ezcRrfZpfk0dBW9jRqE6"
            onChange={onChange}
            ref={capthcaRef}
          />
        </div>

        <button className="submit" onClick={claim}>
          request
        </button>
      </div>
    </Wrapper>
  );
};

export default Request;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  .form {
    //
    width: 425px;
    @media only screen and (max-width: 450px) {
      width: 100%;
    }
    //

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    font-family: "modeSeven", monospace !important;

    input {
      width: 100%;
      height: 35px;

      padding: 10px;

      font-family: "modeSeven", monospace !important;

      font-weight: 800;
      font-size: 20px;
      background-color: black;
      color: #06fc99;
      padding: 0.2rem 2rem;
      border: 1px solid #06fc99;

      text-align: center;

      &:focus {
        outline: none;
      }
    }

    .submit {
      width: 100%;
      height: 35px;

      cursor: pointer;

      font-family: "modeSeven", monospace !important;

      font-weight: 800;
      font-size: 20px;
      background-color: black;
      color: #06fc99;
      padding: 0.2rem 2rem;
      border: 1px solid #06fc99;
    }
  }

  .support {
    text-align: center;

    margin-top: 10px;

    font-size: 1rem;
  }

  .captha {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
