import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from "./pages";
import { Container, Header } from "./components";
import { DisplayList, mapPagesToRoutes } from "./lib/react-extras";

const NoContent = () => (
  <Container textAlign="center">
    <Header size="large"> No Content Found</Header>
  </Container>
);

const Home = ({ match: { url } }) => (
  <DisplayList pages={Pages} url={url} name="App" />
);

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {mapPagesToRoutes(Pages, "")}
          <Route component={NoContent} />
        </Switch>
      </Router>
    );
  }
}
export default App;
