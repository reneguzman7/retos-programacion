/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci(numberOfRepetitions) {
    let result = []
    num1 = 0
    num2 = 1
    for (let i = 0; i < numberOfRepetitions; i++) {
        result.push(num1)
        let temp = num1
        num1 = num2
        num2 += temp
    }
    return result
}

console.log(fibonacci(50))