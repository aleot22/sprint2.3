Proyecto Memoize
Descripción
Este proyecto implementa una función memoize en TypeScript, utilizando la metodología de desarrollo dirigido por pruebas (TDD). La función memoize optimiza el rendimiento de funciones que tienen una gran complejidad computacional o se ejecutan con frecuencia, guardando en una memoria caché los resultados de las llamadas anteriores.

Instalación
Clona este repositorio en tu ordenador local:
git clone https://github.com/aleot22/sprint2.3/tree/main/workspace/sprint2.3
cd proyecto-memoize
Instala las dependencias necesarias:
npm install

Implementación de la función memoize
La función memoize se encuentra en el archivo src/memoize.ts. Esta función toma como parámetro otra función func y retorna una nueva función que almacena en caché los resultados de las llamadas con los mismos argumentos.


Desarrollo Dirigido por Pruebas (TDD)
Para asegurarnos de que la función memoize funciona correctamente, hemos utilizado TDD. Las pruebas se encuentran en el archivo tests/memoize.test.ts.

Ejecutar las pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:
npm test
Las pruebas utilizan el framework de testing Jest. Si no lo tienes instalado, puedes agregarlo como dependencia al proyecto:
npm install --save-dev jest @types/jest ts-jest

