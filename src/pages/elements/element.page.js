import React from "react";
import { Route } from "react-router-dom";

// eslint-disable-next-line
import * as Pages from "./";
import { DisplayList, mapPagesToRoutes } from "../../lib/react-extras";

const ElementList = ({ match: { url } }) => (
  <DisplayList pages={Pages} url={url} />
);

const Main = ({ match: { path } }) => {
  return (
    <React.Fragment>
      <Route exact path={`${path}`} component={ElementList} />
      {mapPagesToRoutes(Pages, path)}
    </React.Fragment>
  );
};

export default Main;
