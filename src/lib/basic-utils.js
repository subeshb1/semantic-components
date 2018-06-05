//Basic functions
export const toUpper = str => str.toUpperCase();
export const toLower = str => str.toLowerCase();
export const head = ([x]) => x;
export const tail = ([x, ...xs]) => xs;
export const reverse = x => x.reduceRight((h, t) => h.concat(t), []);

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

//Compose

export const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
  

  