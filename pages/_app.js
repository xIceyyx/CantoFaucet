import "../styles/globals.css";

// Redux
import { Provider } from "react-redux";
import store from "../store/index";
//

// Components
import Nav from "../components/Global/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
