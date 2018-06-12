import React from "react";
// import ReactDOM, { render } from "react-dom";

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
    stick: false,
    dis: false
  };
  ref = React.createRef();
  scrollHandler = e => {
    if (window.scrollY > 180) {
      this.setState({ stick: true });
    } else {
      this.setState({ stick: false });
    }
    // console.log(1);
  };
  componentDidMount() {
    // console.log(ReactDOM.findDOMNode(this));
    window.addEventListener("scroll", this.scrollHandler, true);
    let prev = 0;
    this.translate = e => {
      if (window.scrollY > 1000) {
        if (window.scrollY < prev) {
          this.setState(({ dis }) => ({ dis: false }));
        } else {
          this.setState(({ dis }) => ({ dis: true }));
        }
        prev = window.scrollY;
        // console.log(this.state.dis, prev);
      }
    };
    window.addEventListener("scroll", this.translate, true);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollHandler, true);
    window.removeEventListener("scroll", this.translate, true);
  };

  render() {
    const { pages, url } = this.props;
    const { stick, dis } = this.state;
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
            transition: "all 0.1s ease-in",
            transform: stick && dis ? "translateY(-100%)" : "",
            padding: 5
          }}
          items={mapPagesToLinks(pages, url, NavLink, {
            style: { transition: "all 0.3s ease-in" }
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
              style: { transition: "all 0.2s ease" }
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
            <NavBar pages={item[1]} url={url} key={"#1"} />
            <Display
              render={[
                {
                  range: Display.Mobile,
                  render: children => (
                    <React.Fragment>{children}</React.Fragment>
                  )
                },
                {
                  range: { min: Display.Tablet.min - 100, max: Infinity },
                  render: children => (
                    <Segment attached="bottom" compact>
                      {children}
                    </Segment>
                  )
                }
              ]}
            >
              <Route exact path={path} component={View} />
              {mapPagesToRoutes(item[1], path)}
            </Display>
          </Container>
        </React.Fragment>
      );
    }
  };
}, {});

export default NavMenu;
