import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Pages from "./pages";
import { Container, Header, Menu, Display, Button, Icon } from "./components";
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

console.log(PropTypes.checkPropTypes(NoContent));
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
        computer={{
          secondary: true,
          pointing: true,
          size: "huge",
          vertical: false,
          fluid: false,
          container: true,
          inverted: false,
          attached: undefined
        }}
      >
        <Menu vertical inverted color="red" fluid size="huge" style={{borderRadius:0}}>
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
          <Display
            showRange={[
              {
                range: { min: 0, max: Display.Tablet.max },
                show: active
              },
              {
                range: { min: Display.Tablet.max, max: Infinity },
                show: true
              }
            ]}
            computer={{
              style: { transition: "all 0.3s ease-in", padding: 30 }
            }}
          >
            <Menu.Item as={NavLink} exact to="/" onClick={this.close}>
              Home
            </Menu.Item>
            {mapPagesToLinks(Pages, "/", NavLink, {
              // style: { transition: "all 0.3s ease-in", padding: 30 },
              onClick: this.close
            }).map((props, i) => <Menu.Item key={i} {...props} />)}
          </Display>
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
