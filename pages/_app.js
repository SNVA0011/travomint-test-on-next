
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "../styles/global.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function MyApp({ Component, pageProps }) {

  return (
    <>
            <Component {...pageProps} />    
    </>
  );
}

export default MyApp;
