import React from "react";
import { Route } from "react-router-dom";
import * as Pages from "./pages";
import { DisplayList, mapPagesToRoutes } from "../lib/react-extras";

const NavMenu = Object.entries(Pages).reduce((acc, item, index) => {
  const View = ({ match: { url } }) => (
    <DisplayList pages={item[1]} url={url} name={item[0]} />
  );
  return {
    ...acc,
    [item[0]]: ({ match: { path } }) => {
      return (
        <React.Fragment>
          <Route exact path={path} component={View} />
          {mapPagesToRoutes(item[1], path)}
        </React.Fragment>
      );
    }
  };
}, {});


export default NavMenu;
