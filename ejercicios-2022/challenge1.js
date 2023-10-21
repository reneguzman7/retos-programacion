/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 */


function verifiedAnagrama(wordOne, wordTwo) {
  wordOne = wordOne.toLowerCase()
  wordTwo = wordTwo.toLowerCase()
  
  if (wordOne == wordTwo) {
    return false
  }
  
  return wordOne.split('').sort().join('') === wordTwo.split('').sort().join('');
  
}

console.log(verifiedAnagrama("ballena", "llenaba"))