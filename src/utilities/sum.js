function sumUntyped(a, b) {
  return a + b
}

/**
 * @typedef {{
 * id: number,
 * title: string
 * }} Article
 */

/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function sum(a, b) {
  return a + b
}

// eslint-disable-next-line
const a = sumUntyped(4, 12)
// eslint-disable-next-line
const b = sum(2, 32)
