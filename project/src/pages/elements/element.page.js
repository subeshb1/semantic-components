import React from "react";
import { Route, Link } from "react-router-dom";
// eslint-disable-next-line
import {Button,Container,Divider,Flag,Header,Icon,Image,Input,Label,List,Loader,Reveal,Segment} from '../../components';
// eslint-disable-next-line
import {ButtonPage,ContainerPage,DividerPage,HeaderPage,IconPage,ImagePage,InputPage,LabelPage,ListPage,LoaderPage,RevealPage,SegmentPage} from './';

import { toLower, curry } from "../../lib/basic-utils";
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
