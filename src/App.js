import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Pages from "./pages";
import { Container, Header, Menu, Display, Icon } from "./components";
import {
  DisplayList,
  mapPagesToRoutes,
  mapPagesToLinks
} from "./lib/react-extras";
import NavLink from "react-router-dom/NavLink";

const NoContent = () => (
  <Container textAlign="center">
    <Header size="large"> No Content Found</Header>
  </Container>
);

const Home = ({ match: { url } }) => (
  <DisplayList pages={Pages} url={url} name="App" />
);

class NavBar extends React.Component {
  state = {
    active: false
  };
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close = () => this.setState(({ active }) => ({ active: false }));
  render() {
    const { active } = this.state;
    return (
      <Display
        rangeProps={{
          range: { min: Display.Computer.min, max: Infinity },
          props: {
            secondary: true,
            pointing: true,
            size: "huge",
            vertical: false,
            fluid: false,
            container: true,
            inverted: false,
            style: {
              borderRadius: 0
            }
          }
        }}
      >
        <Menu
          vertical
          inverted
          fluid
          size="huge"
          style={{
            borderRadius: 0,
            transition: "max-height 0.2s ease",
            maxHeight: active ? 9 * 49 : 0,
            overflow: "hidden",
            background:
              "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)"
          }}
        >
          <Display visibleRange={{ min: 0, max: Display.Tablet.max }}>
            <Menu.Item
              header
              as="div"
              style={{ transition: "all 0.3s ease-in" }}
            >
              Semantic-UI
              <Icon
                name="sidebar"
                link
                onClick={() => {
                  this.setState(({ active }) => ({ active: !active }));
                }}
              />
            </Menu.Item>
          </Display>

          <Menu.Item as={NavLink} exact to="/" onClick={this.close}>
            Home
          </Menu.Item>
          {mapPagesToLinks(Pages, "/", NavLink, {
            onClick: this.close
          }).map((props, i) => <Menu.Item key={i} {...props} />)}
        </Menu>
      </Display>
    );
  }
}
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={() => <Redirect to="/" />} />
            {mapPagesToRoutes(Pages, "")}
            <Route component={NoContent} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
