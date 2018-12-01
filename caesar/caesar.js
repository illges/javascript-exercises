const caesar = function(string, factor) {

  //Creates an Object containing the Alphabet : { 0:'a', 1:'b', etc }
  let cipher = Object.assign({}, 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''));

  //cipher = Object.entries(cipher);
  //return cipher

  return string
          .split('')
          .map(current => Object.values(cipher).includes(current) )
          .join('')

}

module.exports = caesar
