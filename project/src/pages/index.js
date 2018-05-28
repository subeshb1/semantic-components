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
import inputPage from "./input.page";
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
              {
                as: Link,
                children: "List and List Items",
                to: `${url}/list`.replace(/\/\//, "/")
              },
              {
                as: Link,
                children: "Button ",
                to: `${url}/button`.replace(/\/\//, "/")
              },
              {
                as: Link,
                children: "Label",
                to: `${url}/label`.replace(/\/\//, "/")
              },
              {
                as: Link,
                children: "Segments ",
                to: `${url}/segment`.replace(/\/\//, "/")
              }
            ].sort((a, b) => a.children > b.children)}
          />
        </Segment>
      </Segment.Group>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="ui ribbon label">First</div>
            </td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="3">
              <div class="ui right floated pagination menu">
                <a class="icon item">
                  <i class="left chevron icon" />
                </a>
                <a class="item">1</a>
                <a class="item">2</a>
                <a class="item">3</a>
                <a class="item">4</a>
                <a class="icon item">
                  <i class="right chevron icon" />
                </a>
              </div>
            </th>
          </tr>
        </tfoot>
      </table>
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
      <Route path={`${path}/input`} component={inputPage} />
      <Route exact path={`${path}`} component={ElementList} />
    </React.Fragment>
  );
};

export default Main;
