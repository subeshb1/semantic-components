import { toLower, curry, join, split, compose, replace } from "./basic-utils";

import React from "react";
import { Route, Link } from "react-router-dom";
import {
  Container,
  Header,
  List,
  Segment
} from "../components";

/** This function returns a function that makes a simple React Component
 *
 * @param {string} className
 * @param {[string , object]} defaultAs
 * @returns {function} - A Simple React Component Builder
 */
export const simpleComponent = (className, defaultAs = "div") => ({
  as = defaultAs,
  ...otherProps
}) => React.createElement(as, { className, ...otherProps });

export const reactComponent = curry((as, props) => ({ ...otherProps }) =>
  React.createElement(as, { ...props, ...otherProps })
);

export const color = [
  "",
  "primary",
  "secondary",
  "positive",
  "negative",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black"
];
export const social = [
  "facebook",
  "twitter",
  "google plus",
  "vk",
  "linkedin",
  "instagram",
  "youtube"
];

export const size = [
  "mini",
  "tiny",
  "small",
  "medium",
  "large",
  "big",
  "huge",
  "massive"
];

const splitUpper = compose(split(/(?=[A-Z])/g), replace(/Page/gi, ""));
const toUrlSlug = compose(toLower, join("-"), splitUpper);
const toDisplay = compose(join(" "), splitUpper);
export const mapPagesToRoutes = (pages, path) =>
  Object.entries(pages)
    .filter(x => x[0] !== "default")
    .map((page, index) => (
      <Route
        path={`${path}/${toUrlSlug(page[0])}`.replace(/\/\//, "/")}
        component={page[1]}
        key={index}
      />
    ));

export const mapPagesToLinks = (pages, url) =>
  Object.keys(pages)
    .filter(x => x !== "default")
    .map((page, index) => ({
      as: Link,
      to: `${url}/${toUrlSlug(page)}`.replace(/\/\//, "/"),
      children: toDisplay(page)
    }));

export const DisplayList = ({ pages, url }) => {
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
            items={mapPagesToLinks(pages, url)}
          />
        </Segment>
      </Segment.Group>
    </Container>
  );
};
