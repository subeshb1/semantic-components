import React from "react";
import { Route, Link } from "react-router-dom";
import List from "../components/list";
import Container from "../components/container";
import Divider from "../components/divider";
import Segment from "../components/segment";
import Header from "../components/header";
import ListPage from "./list.page";
import ButtonPage from "./button.page";
import LabelPage from "./label.page";
import SegmentPage from "./segment.page";
import InputPage from "./input.page";
import ImagePage from "./image.page";
import IconPage from "./icon.page";
import HeaderPage from "./header.page";
import { toLower, curry } from "../lib/basic-utils";
import LoaderPage from "./loader.page";
import DividerPage from "./divider.page";
import ContainerPage from "./container.page";
import RevealPage from "./reveal.page";
const routes = [
  { Button: ButtonPage },
  { Segment: SegmentPage },
  { List: ListPage },
  { Input: InputPage },
  { Image: ImagePage },
  { Label: LabelPage },
  { Icon: IconPage },
  { Header: HeaderPage },
  { Loader: LoaderPage },
  { Divider: DividerPage },
  { Container: ContainerPage },
  { Reveal: RevealPage },
];
const mapRoute = (arr, path) =>
  arr.map((obj, index) => {
    const route = Object.keys(obj)[0];
    return (
      <Route
        key={index}
        path={`${path}/${toLower(route)}`}
        component={obj[route]}
      />
    );
  });

const getLink = curry((url, x) => ({
  as: Link,
  children: Object.keys(x)[0],
  to: `${url}/${toLower(Object.keys(x)[0])}`.replace(/\/\//, "/")
}));

const mapLinksToListItem = (arr, url) =>
  arr.map(getLink(url)).sort((a, b) => a.children.localeCompare(b.children));
const ElementList = ({ match: { url } }) => {
  return (
    <Container>
      <Segment.Group>
        <Segment color="yellow">
          <Header as="h1">Element Lists</Header>
        </Segment>

        <Segment color="red">
          <List
            animated
            selection
            relaxed="very"
            items={mapLinksToListItem(routes, url)}
          />
        </Segment>
      </Segment.Group>
    </Container>
  );
};

const Main = ({ match: { path } }) => {
  return (
    <React.Fragment>
      <Route exact path={`${path}`} component={ElementList} />
      {mapRoute(routes, path)}
    </React.Fragment>
  );
};

export default Main;
