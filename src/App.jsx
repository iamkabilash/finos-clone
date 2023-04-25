import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Banking from "./components/Banking";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Banking />
    </Fragment>
  );
}

export default App;
