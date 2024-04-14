import throttle from '../throttle'; // Importa la función throttle desde tu archivo

// Prueba para asegurar que la función original sea llamada solo una vez dentro del intervalo de tiempo especificado
test('throttle should call the original function only once within the specified interval', () => {
  jest.useFakeTimers(); // Utiliza temporizadores falsos para controlar el tiempo

  // Define una función de prueba que se utilizará como argumento para throttle
  const originalFunction = jest.fn();

  // Crea una versión "throttled" de la función de prueba con un intervalo de 1000 ms
  const throttledFunction = throttle(originalFunction, 1000);

  // Llama la función throttled dos veces con el mismo argumento
  throttledFunction('argument');
  throttledFunction('argument');

  // Avanza el tiempo en 1000 ms
  jest.advanceTimersByTime(1000);

  // La función original debería haber sido llamada solo una vez, aunque fue llamada dos veces
  expect(originalFunction).toHaveBeenCalledTimes(1);

  // Llama la función throttled nuevamente después de 1000 ms
  throttledFunction('argument');

  // Avanza el tiempo en otros 1000 ms
  jest.advanceTimersByTime(1000);

  // La función original debería ser llamada por segunda vez ahora
  expect(originalFunction).toHaveBeenCalledTimes(2);
});