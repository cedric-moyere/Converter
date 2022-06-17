/**The logic to be able to convert arabian numbers to roman
 * The rules used to establish a calculation mode are those of the classic notation (without extension)
 * https://fr.wikipedia.org/wiki/Numération_romaine
 */

module.exports = inputValue => {
  let res = {};
  let n = parseFloat(inputValue);
  isNaN(n)
    ? (res.error = 'Entrez un nombre')
    : !Number.isInteger(n)
    ? (res.error = 'Entrez un nombre entier')
    : n < 1 || n > 4999
    ? (res.error = 'Le nombre doit être entre 1 et 4999')
    : (res.value = converts(n));
  return res;
};

function converts(n) {
  return convert1000s(n) + convert100s(n) + convert10s(n) + convert1s(n);
}

function convert1000s(n) {
  return 'MMMM'.substring(0, Math.floor(n / 1000));
}

function convert100s(h) {
  var m = '',
    h = Math.floor((h % 1000) / 100);

  h === 9
    ? (m = 'CM')
    : h > 4
    ? (m = 'DCCC'.substring(0, h - 4))
    : h === 4
    ? (m = 'CD')
    : (m = 'CCC'.substring(0, h));
  return m;
}

function convert10s(t) {
  var m = '',
    t = Math.floor((t % 100) / 10);

  t === 9
    ? (m = 'XC')
    : t > 4
    ? (m = 'LXXX'.substring(0, t - 4))
    : t === 4
    ? (m = 'XL')
    : (m = 'XXX'.substring(0, t));

  return m;
}

function convert1s(u) {
  var m = '',
    u = u % 10;

  u === 9
    ? (m = 'IX')
    : u > 4
    ? (m = 'VIII'.substring(0, u - 4))
    : u === 4
    ? (m = 'IV')
    : (m = 'III'.substring(0, u));

  return m;
}
