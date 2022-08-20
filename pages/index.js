// React
import { Fragment } from "react";

// Next
import Head from "next/head";

// Components
import Home from "../components/Home/Home";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>CANTO EVM FAUCET</title>

        {/* <link rel="shortcut icon" href="./images/aptoflip.png" /> */}
      </Head>
      <Home />
    </Fragment>
  );
};

export default index;
