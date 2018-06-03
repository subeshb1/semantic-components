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
import { reactComponent } from "../lib/react-extras";

const getLink = (x, url) => ({
  as: Link,
  children: x,
  to: `${url}/${x.toLowerCase()}`.replace(/\/\//, "/")
});
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
            items={[
              "Button",
              "Segment",
              "List",
              "Input",
              "Image",
              "Label"
            ].sort((a, b) => a > b).map(x => getLink(x,url))}
          />
        </Segment>
      </Segment.Group>
    </Container>
  );
};

const Main = ({ match: { path } }) => {
  return (
    <React.Fragment>
      <Route path={`${path}/list`} component={ListPage} />
      <Route path={`${path}/label`} component={LabelPage} />
      <Route path={`${path}/button`} component={ButtonPage} />
      <Route path={`${path}/segment`} component={SegmentPage} />
      <Route path={`${path}/input`} component={InputPage} />
      <Route path={`${path}/image`} component={ImagePage} />
      <Route exact path={`${path}`} component={ElementList} />
    </React.Fragment>
  );
};

export default Main;
