import React from "react";

//Curry
export const curry = fn => {
  const resLength = fn.length;
  return function $curry(...args) {
    return args.length < resLength
      ? $curry.bind(null, ...args)
      : fn.call(null, ...args);
  };
};
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
