import React from "react";
import { Route } from "react-router-dom";
import * as Pages from ".";
import { DisplayList, mapPagesToRoutes } from "../../lib/react-extras";

const ImplementationView = ({ match: { url } }) => (
  <DisplayList pages={Pages} url={url} />
);

export default ({ match: { path } }) => {
  return (
    <React.Fragment>
      <Route exact path={path} component={ImplementationView} />
      {mapPagesToRoutes(Pages, path)}
    </React.Fragment>
  );
};
