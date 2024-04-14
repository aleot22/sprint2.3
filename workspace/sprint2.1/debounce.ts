// debounce.ts
const debounce = (func: Function, ms: number) => {
    let timer: NodeJS.Timeout;
    return function (...args: any[]) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
  };
  
  export default debounce;