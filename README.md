# Resolución prueba tecnica Airbag . 

Clonar el respositorio. Cada uno de los script a correr con node js deben ser ejecutados desde la raiz
del proyecto.

## Ejercicio 1:
Directorio de entrega: ex01/
Nombre de la función: printCombinations
● Crea una función que imprima todas las combinaciones de tres dígitos distintos de
manera ascendente.

- ejecutar el siguiente script `node -e 'require(\"./ex01/ex01.js\").printCombinations()'`

## Ejercicio 2:
Directorio de entrega: ex02/
Nombre de la función: evalExpression
● Crea una función que tome una variable de tipo String como parámetro. Esta
variable corresponde a una expresión aritmética.
● Esta expresión debe de ser calculada y regresar su valor.
● La variable como parámetro será siempre válida. Es decir, no te debes preocupar
por recibir letras, divisiones por cero, paréntesis mal colocados, etc.
● Se debe de tener soporte para las siguientes operaciones:
○ + para sumar.
○ - para restar.
○ / para dividir.
○ * para multiplicar.
● Tip: ya existe un algoritmo que te ayudará a resolver este ejercicio.

- ejecutar el siguiente script `node -e 'require(\"./ex02/ex02.js\").evalExpression("3 + 42 * (1 - 2 / (3 + 4) - 1 * 21) + 1")'` --> El argumento de la funcion puede ser cambiada por la expresion que se desea evaluar.

## Ejercicio 3:
Directorio de entrega: ex03/
Nombre de la función: clearDuplicates
● Crea una función que reciba como parámetro un arreglo de números.
● La función debe de quitar los números que se repiten. 

- ejecutar el siguiente script `node -e 'require(\"./ex03/ex03.js\").clearDuplicates([4, 3, 4, 3, 1, 7, 8, 8])'` --> El argumento de la funcion puede ser cambiada por el valor que se desea evaluar.

## Ejercicio 4:
Directorio de entrega: ex04/
Nombre de la función: blackjack
● Crea una función que calcule el valor de una mano de blackjack.
● Recibirás como parámetro un arreglo de Strings con las cartas.
● Tu mano debe de tener el valor más alto posible sin exceder los 21 puntos.
● Las cartas 2,3,4,5,6,7,8,9 toman el valor que les corresponde (2 vale 2 puntos, 7
vale 7 puntos).
● Las cartas J,Q,K toman el valor de 10 puntos.
● El As tiene un valor de 1 u 11 puntos.

- ejecutar el siguiente script `node -e 'require(\"./ex04/ex04.js\").blackjack([\"A\",\"A\",\"J\"])'` --> El argumento de la funcion puede ser cambiada por el valor que se desea evaluar.

## Ejercicio 5:
Directorio de entrega: ex05/
Nombre de la función: shiftCipher
● Crea una función que realice un cifrado César. Un cifrado César consiste en
desplazar todas las letras de una oración N lugares hacia la derecha.
Debe de recibir como primer argumento una variable de tipo String (que es la que se
va a cifrar) y como segundo argumento un número que indica las posiciones de
desplazamiento.

- ejecutar el siguiente script `node -e 'require(\"./ex05/ex05.js\").shiftCipher(\"hola\",5)'` --> Los argumentos de la funcion pueden ser cambiados por el valor que se desea evaluar.