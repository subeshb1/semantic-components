import React from "react";
import { Route, NavLink } from "react-router-dom";
import * as Pages from "./pages";
import {
  DisplayList,
  mapPagesToLinks,
  mapPagesToRoutes
} from "../lib/react-extras";
import { Menu, Container, Segment } from "../components";

const NavBar = ({ pages, url }) => {
  return (
    <Menu
      tabular
      container
      stackable
      extra="computer only"
      size="huge"
      attached="top"
      items={mapPagesToLinks(pages, url, NavLink, {
        style: { transition: "all 0.3s ease-in" }
      })}
      color="red"
    />
  );
};

const NavMenu = Object.entries(Pages).reduce((acc, item, index) => {
  const View = ({ match: { url } }) => (
    <React.Fragment>
      <DisplayList pages={item[1]} url={url} name={item[0]} />
    </React.Fragment>
  );
  return {
    ...acc,
    [item[0]]: ({ match: { path, url } }) => {
      return (
        <React.Fragment>
          <NavBar pages={item[1]} url={url} />
          <Segment attached="bottom">
            <Route exact path={path} component={View} />
            {mapPagesToRoutes(item[1], path)}
          </Segment>
        </React.Fragment>
      );
    }
  };
}, {});

export default NavMenu;
