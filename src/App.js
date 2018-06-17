import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Pages from "./pages";
import {
  Container,
  Header,
  Menu,
  Display,
  Icon,
  Transition2
} from "./components";
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
            color: "red",
            vertical: false,
            fluid: false,
            container: true,

            style: {
              borderRadius: 0,
              background: "rebeccapurple"
            }
          }
        }}
      >
        <Menu
          vertical
          inverted
          pointing
          secondary
          color="purple"
          stackable
          fluid
          size="huge"
          style={{
            borderRadius: 0,
            transition: "max-height 0.2s ease",
            maxHeight: active ? 9 * 46 : 0,
            overflow: "hidden",
            background: "rebeccapurple",
            boxShadow: " 0px 0px 10px",
            border: "0px"
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
        <Route
          render={() => (
            <React.Fragment>
              <NavBar />
              <Transition2
                // key={location.key}
                onEnter={[
                  {
                    style: {
                      opacity: 0
                    },
                    start: true
                  },
                  {
                    style: {
                      opacity: 1
                    },
                    duration: 500
                  },
                  {
                    style: {
                      opacity: 1
                    },
                    default: true
                  }
                ]}
              >
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route
                    exact
                    path="/home"
                    component={() => <Redirect to="/" />}
                  />
                  {mapPagesToRoutes(Pages, "")}
                  <Route component={NoContent} />
                </Switch>
              </Transition2>
            </React.Fragment>
          )}
        />
      </Router>
    );
  }
}
export default App;
