/**********************************************
 * Resistor Color 
 * ==================================
 * Resistors have color coded bands, where each color maps
 * to a number. The first 2 bands of a resistor have a
 * simple encoding scheme: each color maps to a single number.
 * These colors are encoded as follows:
Black: 0
Brown: 1
Red: 2
Orange: 3
Yellow: 4
Green: 5
Blue: 6
Violet: 7
Grey: 8
White: 9
* The goal of this exercise is to create a way:
* to look up the numerical value associated with a particular color band to list the different band colors
Mnemonics map the colors to the numbers, that, when stored as an array, happen to map to their index in the array: Better Be Right Or Your Great Big Values Go Wrong.
 ***********************************************/
const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
function colorCode(num) {
  return COLORS.indexOf(num)
  // CODE HERE
}
colorCode(1)

module.exports = { colorCode, COLORS };
