const caesar = function(string, factor) {

  //Creates an Object containing the Alphabet : { 0:'a', 1:'b', etc }
  const cipherUp = Object.assign({}, 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''));
  const cipherLow = Object.assign({}, 'abcdefghijklmnopqrstuvwxyz'.split(''));

  return string
          .split('')
          .map(current => { if (Object.values(cipherUp).includes(current)) {
            if (Object.values(cipherUp).indexOf(current) + factor >= 0) {

              return Object.values(cipherUp)[(Object.values(cipherUp).indexOf(current) + factor) % 26]

            } else {

              return Object.values(cipherUp)[(Object.values(cipherUp).indexOf(current) + factor) % 26 + 26]

            }

          } else if (Object.values(cipherLow).includes(current)) {

            if (Object.values(cipherLow).indexOf(current) + factor >= 0) {

              return Object.values(cipherLow)[(Object.values(cipherLow).indexOf(current) + factor) % 26]

            } else {
  
              return Object.values(cipherLow)[(Object.values(cipherLow).indexOf(current) + factor) % 26 + 26]

            }

          } else {

            return current

          }})
          .join('')

}

module.exports = caesar
