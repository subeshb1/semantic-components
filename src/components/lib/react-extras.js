import React from "react";

export const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  toString: () => `Right(${x})`
});
// Does not perform any action
export const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  toString: () => `Right(${x})`
});

export const head = ([x]) => x;
export const fromNullable = x => (x != null ? Right(x) : Left(x));

export const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

export const LazyBox = g => ({
  fold: f => f(g()),
  map: f => LazyBox(() => f(g()))
});

//Curry
export const curry = fn => {
  const resLength = fn.length;
  return function $curry(...args) {
    return args.length < resLength
      ? $curry.bind(null, ...args)
      : fn.call(null, ...args);
  };
};
export const join = curry((delim, arr) => arr.join(delim));
export const split = curry((delim, str) => str.split(delim));
export const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});
export const replace = curry((what, repStr, str) => str.replace(what, repStr));
export const match = curry((what, str) => str.match(what));
export const filter = curry((f, arr) => arr.filter(f));
export const map = curry((f, arr) => arr.map(f));
export const reduce = curry((f, start, arr) => arr.reduce(f, start));

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
