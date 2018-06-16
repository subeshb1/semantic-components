import { toLower, curry, join, split, compose, replace } from "./basic-utils";

import React from "react";
import { Route, Link } from "react-router-dom";
import { Container, Header, List, Segment } from "../components";

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
export const colorDef = [
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

export const wide = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen"
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

const splitUpper = compose(
  split(/(?=[A-Z])/g),
  replace(/Page/gi, "")
);
const toUrlSlug = compose(
  toLower,
  join("-"),
  splitUpper
);
const toDisplay = compose(
  join(" "),
  splitUpper
);
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

export const mapPagesToLinks = (pages, url, as = Link, extraProps = {}) =>
  Object.keys(pages)
    .filter(x => x !== "default")
    .map((page, index) => ({
      as,
      to: `${url}/${toUrlSlug(page)}`.replace(/\/\//, "/"),
      children: toDisplay(page),
      ...extraProps
    }));

export const DisplayList = ({ pages, url, name }) => {
  return (
    <Container>
      <Segment.Group raised>
        <Segment color="violet">
          <Header as="h1">{splitUpper(name)} List</Header>
        </Segment>

        <Segment>
          <List
            animated
            selection
            relaxed="very"
            items={mapPagesToLinks(pages, url).map(
              ({ children, ...props }) => ({
                ...props,
                children: <Header color="grey" text={children} />
              })
            )}
          />
        </Segment>
      </Segment.Group>
    </Container>
  );
};

export const widthArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen"
];
const widths = {
  one: "one",
  two: "two",
  three: "three",
  four: "four",
  five: "five",
  six: "six",
  seven: "seven",
  eight: "eight",
  nine: "nine",
  ten: "ten",
  eleven: "eleven",
  twelve: "twelve",
  thirteen: "thirteen",
  fourteen: "fourteen",
  fifteen: "fifteen",
  sixteen: "sixteen",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen"
};
export const widthMapper = x => (widths[x] ? widths[x] : "one");
