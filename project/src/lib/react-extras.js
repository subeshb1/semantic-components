import { curry } from "./basic-utils";
import React from "react";
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
  "black",
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

export const size = 
  [
    "mini",
    "tiny",
    "small",
    "medium",
    "large",
    "big",
    "huge",
    "massive",
  ]
