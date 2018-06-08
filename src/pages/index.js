import React from "react";
import ReactDOM, { render } from "react-dom";

import { Route, NavLink } from "react-router-dom";
import * as Pages from "./pages";
import {
  DisplayList,
  mapPagesToLinks,
  mapPagesToRoutes
} from "../lib/react-extras";
import { Menu, Segment, Display, Container } from "../components";

class NavBar extends React.Component {
  state = {
    pos: undefined,
    stick: false
  };
  ref = React.createRef();
  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this));
    window.addEventListener("scroll", e => {
      if (window.scrollY > 180) {
        this.setState({ stick: true });
      } else {
        this.setState({ stick: false });
      }
      console.log(1);
    });
  }

  render() {
    const { pages, url } = this.props;
    const { stick } = this.state;
    return (
      <Display>
        <Menu
          key="#1"
          container
          pointing
          secondary
          fixed={stick ? "top" : undefined}
          size="huge"
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            background: "white",
            zindex: 10,
            // transition: "all 0.3s ease-in",
            padding: 5
          }}
          items={mapPagesToLinks(pages, url, NavLink, {
            style: { transition: "all 0.3s ease-in" },
          })}
          color="red"
        />
        {stick ? (
          <Menu
            container
            pointing
            secondary
            size="huge"
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              background: "white",
              zindex: 10,
              // transition: "all 0.3s ease-in",
              padding: 5
            }}
            items={mapPagesToLinks(pages, url, NavLink, {
              style: { transition: "all 0.3s ease-in" }
            })}
            color="red"
          />
        ) : (
          ""
        )}
      </Display>
    );
  }
}

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
          <Container fluid>
            <NavBar pages={item[1]} url={url} key={"#1"}/>
            <Segment attached="bottom" compact>
              <Route exact path={path} component={View} />
              {mapPagesToRoutes(item[1], path)}
            </Segment>
          </Container>
        </React.Fragment>
      );
    }
  };
}, {});

export default NavMenu;
