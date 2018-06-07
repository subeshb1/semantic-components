import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Pages from "./pages";
import { Container, Header, Menu } from "./components";
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

const NavBar = () => {
  return (
    <Menu
      secondary
      container
      pointing
      size="huge"
      items={mapPagesToLinks(Pages, "/", NavLink, {
        style: { transition: "all 0.3s ease-in", padding: 30 }
      })}
      children={
        <Menu.Item
          as={NavLink}
          exact
          to="/"
          style={{ transition: "all 0.3s ease-in", padding: 30 }}
        >
          Home
        </Menu.Item>
      }
    />
  );
};
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
