import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ElementPage,ImplementationPage } from "./pages";
import TestPage from "./tests/TestPage";

import { Container, Header, List } from "./components";
// import TopRepos from './pages/implementations/TopRepos';
const NoContent = () => (
  <Container textAlign="center">
    <Header size="large"> No Content Found</Header>
  </Container>
);

const Home = () => (
  <Container textAlign="center">
    <Header as="h1">Semantic Components Menu</Header>
    <List link>
      <List.Item as={Link} to="/elements">
        View all the Elements
      </List.Item>
    </List>
  </Container>
);

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/elements" component={ElementPage} />
          <Route exact path="/" component={Home} />
          <Route path="/test" component={TestPage} />
          <Route path="/implementations" component={ImplementationPage} />

          <Route component={NoContent} />
        </Switch>
      </Router>
    );
  }
}
export default App;
