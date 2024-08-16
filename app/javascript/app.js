import React, { Fragment } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { BrowserRouter } from "react-router-dom";
import "./app.scss";
import Routes from "./routes";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
      <Menu />
        <Routes />
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
