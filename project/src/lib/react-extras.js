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
