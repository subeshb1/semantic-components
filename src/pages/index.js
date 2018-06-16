import React from "react";
// import ReactDOM, { render } from "react-dom";

import { Route, NavLink } from "react-router-dom";
import * as Pages from "./pages";
import {
  DisplayList,
  mapPagesToLinks,
  mapPagesToRoutes
} from "../lib/react-extras";
import { Menu } from "../components";

class NavBar extends React.Component {
  state = {
    pos: undefined,
    stick: false,
    dis: false
  };
  ref = React.createRef();
  scrollHandler = () => {
    if (window.scrollY > 61) {
      this.setState({ stick: true });
    } else {
      this.setState({ stick: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler, false);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollHandler, false);
  };

  render() {
    const { pages, url } = this.props;
    const { stick } = this.state;
    return (
      <React.Fragment>
        <Menu
          key="#1"
          container
          pointing
          secondary
          fixed={stick ? "top" : undefined}
          size="huge"
          style={{
            overflowX: "scroll",
            zIndex: 10000,
            transition: "background 0.8s ease",
            ...(stick
              ? {
                  padding: 2,
                  background: "rgb(22, 114, 160)",
                  boxShadow: "rgb(164, 183, 207) 0px 4px 4px 0px",
                  borderBottom: "0px"
                }
              : {})
          }}
          items={mapPagesToLinks(pages, url, NavLink, {
            style: { transition: "all 0.3s ease" }
          })}
          color={!stick ? "purple" : undefined}
          inverted={stick}
        />
        {stick ? <div style={{ height: "60px" }} /> : ""}
      </React.Fragment>
    );
  }
}

const NavMenu = Object.entries(Pages).reduce((acc, item) => {
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
          <NavBar pages={item[1]} url={url} key={"#1"} />
          <Route exact path={path} component={View} />
          {mapPagesToRoutes(item[1], path)}
        </React.Fragment>
      );
    }
  };
}, {});

export default NavMenu;
