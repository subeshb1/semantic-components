import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/header";
import Container from "./components/container";
import Element from "./pages";
import List from "./components/list";
import Test from "./tests/TestPage";
import TestPage from "./tests/TestPage";
import TopRepos from './pages/implementations/TopRepos';
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
          <Route path="/elements" component={Element} />
          <Route exact path="/" component={Home} />
          <Route path="/test" component={TestPage} />
          <Route path="/implementations/top-repos" component={TopRepos} />

          <Route component={NoContent} />
        </Switch>
      </Router>
    );
  }
}
export default App;
