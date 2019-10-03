/** Functional Programming */

export const curry = (fn: any) =>
  (function curried(this: any, cargs: any) {
    return cargs.length >= fn.length
      ? fn.apply(this, cargs)
      : (...args: any) => curried([...cargs, ...args]);
  })([]);

export const partial = (fn: any, ...first: any) => (...rest: any) =>
  fn(...first, ...rest);

export const compose2 = (f: any, g: any) => (...args: any) => f(g(...args));
export const compose = (...fns: any) => fns.reduce(compose2);
export const pipe = (...fns: any) => fns.reduceRight(compose2);

export const pipeDebug = (...fns: any) => (value: any) => {
  debugger;
  return fns.reduce((currentValue: any, currentFunction: any) => {
    debugger;
    return currentFunction(currentValue);
  }, value);
};

export const trace = (label: string) => (value: any) => {
  console.log(`${label}: ${value}`);
  return value;
};

export const map = (fn: any) => (mappable: any) => mappable.map(fn);
export const log = (...args: any) => console.log(...args);
