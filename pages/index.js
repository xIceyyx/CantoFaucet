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
        <title>Canto EVM Faucet</title>

        <link
          rel="shortcut icon"
          href="https://convert.canto.io/assets/favicon.b337524c.svg"
        />
      </Head>
      <Home />
    </Fragment>
  );
};

export default index;
