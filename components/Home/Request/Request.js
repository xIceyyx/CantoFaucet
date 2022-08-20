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
  const [valid, setValid] = useState();

  const capthcaRef = useRef();

  const claim = async () => {
    if (!valid) {
      toast.error("Complete catpha");
      return;
    }
    console.log(inputValue);

    try {
      toast.success("Claim submitted");

      capthcaRef.current.reset();

      setValid(false);

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
    } catch (error) {
      capthcaRef.current.reset();
      toast.error("Failed to claim");
      setValid(false);
    }

    capthcaRef.current.reset();
  };

  const onChange = async (value) => {
    setValid(value);
  };

  return (
    <Wrapper>
      <div className="captha">
        <ReCAPTCHA
          sitekey="6LcDR5MhAAAAADDA_Bw3ezcRrfZpfk0dBW9jRqE6"
          onChange={onChange}
          ref={capthcaRef}
        />
      </div>

      <Paper
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
        className="search"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="ENTER EVM CANTO ADDRESS"
          inputProps={{ "aria-label": "search google maps" }}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="input-text"
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon onClick={claim} />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>

      <p className="support">
        do not connect your wallet or use web3 for this faucet
      </p>

      <p className="support">
        support canto faucet: 0xF39eEe4F21359e78A30D992e0b2D7fEAAe5c97Ff
      </p>

      <p className="support punks">
        first punks on canto minting now: cantopunks.netlify.app
      </p>
    </Wrapper>
  );
};

export default Request;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .support {
    text-align: center;

    margin-top: 10px;

    font-size: 1rem;
  }

  .punks {
    font-size: 1.5rem;
  }

  .captha {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 30px;
  }

  .search {
    margin-top: 30px;
  }

  .input-text {
    font-family: "VT323", monospace !important;
  }
  .items {
    padding: 10px 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .nft-wrap {
    text-align: center;

    .item {
      width: 100px;
      height: 100px;
      border-radius: 12px;
      border: 2px solid transparent;
      cursor: pointer;
    }
    .selected {
      border: 2px solid #fff;
      box-shadow: 0px 0px 25px 1px #fff;
    }
  }
`;
