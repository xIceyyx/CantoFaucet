// Styled Components
import styled from "styled-components";

// MUI
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user-slice";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Nav = () => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.user.mode);

  const handleMode = () => {
    if (mode === "light") {
      dispatch(userActions.setMode("dark"));
    } else {
      dispatch(userActions.setMode("light"));
    }
  };

  return (
    <Wrapper mode={mode}>
      <div className="mode">
        <div className="icon-button">
          {mode === "light" ? (
            <Button className="icon" onClick={handleMode}>
              <p className="text">Light</p>
              <LightModeIcon className="sun" />
            </Button>
          ) : (
            <Button className="icon" onClick={handleMode}>
              <p className="text">Dark</p>
              <DarkModeIcon className="moon" />
            </Button>
          )}
        </div>
      </div>

      {/* <a
        href="https://twitter.com/AptoFlip"
        className="twitter"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="socials">
          <TwitterIcon className="twitter-icon" />
        </Button>
      </a> */}

      <ToastContainer
        style={{ width: "400px" }}
        toastClassName="font-bold  border-[1px] border-[#23263D] rounded-[10px] w-2xl"
        position="top-center"
        rtl={false}
        toastStyle={{
          backgroundColor: mode === "light" ? "#000" : "#fff",
          color: mode === "light" ? "#fff" : "#000",
          fontFamily: "VT323",
          fontSize: "1.3rem",
        }}
        className="toastContainer"
      />
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  background-color: ${(props) => (props.mode === "light" ? "#fff" : "#000")};

  padding: 0 20px;
  padding-top: 20px;

  .socials {
    border: 1px solid #fff;
    border-color: ${(props) => (props.mode === "light" ? "#000" : "#fff")};

    background-color: ${(props) => (props.mode === "light" ? "#fff" : "#000")};
    box-shadow: none;

    padding: 6px 20px;

    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => (props.mode === "light" ? "#000" : "#fff")};

    .twitter {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .twitter-icon {
      fill: ${(props) => (props.mode === "dark" ? "#fff" : "#000")} !important;
      width: 25px;
    }
  }

  display: flex;

  align-items: center;
  gap: 10px;

  .mode {
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      border: 1px solid #fff;
      border-color: ${(props) => (props.mode === "light" ? "#000" : "#fff")};

      background-color: ${(props) =>
        props.mode === "light" ? "#fff" : "#000"};
      box-shadow: none;

      padding: 5px 20px;
      width: 100px;
      border-radius: 6px;

      color: ${(props) => (props.mode === "light" ? "#000" : "#fff")};

      &:hover {
        //    box-shadow: #e0ca00 0px 0px 25px 1px;
      }

      .moon {
        width: 20px;

        fill: ${(props) =>
          props.mode === "dark" ? "#fff" : "#000"} !important;
      }

      .sun {
        width: 20px;

        fill: ${(props) =>
          props.mode === "light" ? "#000" : "#000"} !important;
      }

      .text {
        font-size: 1.2rem;
        font-weight: 100;

        color: ${(props) => (props.mode === "light" ? "#000" : "#fff")};

        text-transform: uppercase;

        font-family: "VT323", monospace !important;
      }
    }
  }
`;
