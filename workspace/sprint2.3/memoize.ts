function memoize(fn) {
  let diccionario = {};

  return function (...args) {
    const clave = args.join("_");

    if (diccionario.hasOwnProperty(clave)) {
       console.log("Devuelve resultado almacenado en el diccionario");
       return diccionario[clave];
    }

    const result = fn(...args);

    diccionario[clave] = result;
    return result;
  };
}

export default memoize;