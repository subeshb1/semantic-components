import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import List from "../components/list";
import Container from "../components/container";
import Header from "../components/header";
import ListPage from "./list.page";
import ButtonPage from "./button.page";
import LabelPage from "./label.page";
import SegmentPage from "./segment.page";
import inputPage from "./input.page";
const ElementList = ({ match: { url } }) => {
  return (
    <Container>
      <Header as="h1">Element Lists</Header>
      <List
        link
        ordered
        items={[
          {
            as: Link,
            children: "List and List Items",
            to: `${url}/list`,
            active: true
          },
          {
            as: Link,
            children: "Button and Button Groups",
            to: `${url}/button`,
            active: true
          },
          {
            as: Link,
            children: "Label",
            to: `${url}/label`,
            active: true
          },
          {
            as: Link,
            children: "Segments ",
            to: `${url}/segment`,
            active: true
          }
        ].sort((a, b) => a.children > b.children)}
      />
    </Container>
  );
};

const Main = ({ match: { path } }) => {
  return (
    <React.Fragment>
      <Route exact path={`${path}/list`} component={ListPage} />
      <Route exact path={`${path}/label`} component={LabelPage} />
      <Route exact path={`${path}/button`} component={ButtonPage} />
      <Route exact path={`${path}/segment`} component={SegmentPage} />
      <Route exact path={`${path}/input`} component={inputPage} />
      <Route exact path={`${path}/`} component={ElementList} />
    </React.Fragment>
  );
};

export default Main;
