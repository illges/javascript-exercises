const palindromes = function(phrase) {

  const array = phrase.split('').filter(char => /^[a-zA-Z]+$/.test(char));

  for (let i = 0; i < phrase.length/2; i++) {
    if (array[i].toLowerCase() != array[array.length - i - 1].toLowerCase()){
      return false
    }
  }
  return true
}

module.exports = palindromes
