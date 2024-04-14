import memoize from '../memoize'; // Asegúrate de importar la función memoize desde el archivo donde está definida

describe('memoize', () => {
  // Test para verificar que la función devuelve el mismo resultado para los mismos argumentos
  test('devuelve el mismo resultado para los mismos argumentos', () => {
    const mockFn = jest.fn((x, y) => x + y);
    const memoizedFn = memoize(mockFn);

    // Llamamos a la función memoizada dos veces con los mismos argumentos
    memoizedFn(2, 3);
    memoizedFn(2, 3);

    // Esperamos que el mockFn haya sido llamado solo una vez
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  // Test para verificar que la función devuelve el resultado almacenado en el diccionario
  test('devuelve el resultado almacenado en el diccionario', () => {
    const mockFn = jest.fn((x, y) => x * y);
    const memoizedFn = memoize(mockFn);

    // Llamamos a la función memoizada dos veces con los mismos argumentos
    const result1 = memoizedFn(3, 4);
    const result2 = memoizedFn(3, 4);

    // Esperamos que los resultados sean iguales
    expect(result1).toEqual(result2);
  });

  // Otros tests que consideres necesarios para asegurar el correcto funcionamiento de la función memoiza
});