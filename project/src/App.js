import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Container from "./components/container";
import Element from "./pages";
import List from "./components/list";
const simpleComponent = (className = "", defaultAs = "div") => ({
  as = defaultAs,
  ...otherProps
}) => React.createElement(as, { className, ...otherProps });

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
        <React.Fragment>
          <Route path="/elements" component={Element} />
          <Route path="/" exact component={Home} />
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
